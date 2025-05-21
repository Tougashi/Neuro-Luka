import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://requirement-downtown-poet-streets.trycloudflare.com/';

const instance = axios.create({
    baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true,
    timeout: 30000, // Increased timeout to 30 seconds
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Accept all status codes less than 500
    }
});

// Add request interceptor for CSRF token
instance.interceptors.request.use(
    async (config) => {
        // Skip CSRF token for non-Laravel API endpoints
        if (config.url.includes('https://heroes-daily-tie-begun.trycloudflare.com/')) {
            return config;
        }

        try {
            // Use a separate axios instance for CSRF token to avoid circular dependencies
            const csrfResponse = await axios.get(`${baseURL}sanctum/csrf-cookie`, {
                withCredentials: true,
                timeout: 5000 // Shorter timeout for CSRF request
            });

            if (csrfResponse.status === 204) {
                const cookies = document.cookie.split(';');
                const xsrfToken = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
                
                if (xsrfToken) {
                    const token = decodeURIComponent(xsrfToken.split('=')[1]);
                    config.headers['X-XSRF-TOKEN'] = token;
                }
            }
        } catch (error) {
            console.warn('CSRF token fetch failed:', error.message);
            // Continue with the request even if CSRF token fetch fails
        }

        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for better error handling
instance.interceptors.response.use(
    response => response,
    error => {
        const errorDetails = {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            config: {
                url: error.config?.url,
                method: error.config?.method,
                headers: error.config?.headers
            }
        };

        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout:', errorDetails);
            return Promise.reject({
                ...error,
                message: 'Request timeout. Please try again.',
                errorDetails
            });
        }

        if (error.response) {
            console.error('API Error Response:', errorDetails);
            
            if (error.response.status === 419) {
                return Promise.reject({
                    ...error,
                    message: 'Session expired. Please refresh the page and try again.',
                    errorDetails
                });
            }
            
            if (error.response.status === 500) {
                return Promise.reject({
                    ...error,
                    message: 'Server error. Please try again later.',
                    errorDetails
                });
            }
        } else if (error.request) {
            console.error('API Error Request:', {
                message: 'No response received from server',
                request: error.request,
                config: errorDetails.config
            });
        } else {
            console.error('API Error Setup:', errorDetails);
        }

        return Promise.reject({
            ...error,
            errorDetails
        });
    }
);

export default instance;