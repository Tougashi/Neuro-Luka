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
    timeout: 10000
});

// Add request interceptor for CSRF token
instance.interceptors.request.use(
    async (config) => {
        // Don't add CSRF token for external APIs
        if (!config.url.includes('https://heroes-daily-tie-begun.trycloudflare.com/')) {
            try {
                // Use the same instance for CSRF token request
                await instance.get('/sanctum/csrf-cookie');
                
                // Get the XSRF-TOKEN cookie
                const cookies = document.cookie.split(';');
                const xsrfToken = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
                
                if (xsrfToken) {
                    const token = decodeURIComponent(xsrfToken.split('=')[1]);
                    config.headers['X-XSRF-TOKEN'] = token;
                } else {
                    console.warn('XSRF-TOKEN cookie not found');
                }
            } catch (error) {
                console.error('Error getting CSRF token:', error);
                // Don't throw the error, just log it and continue
                // This allows the request to proceed even if CSRF token fetch fails
            }
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
        // Create a more detailed error object
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

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error Response:', errorDetails);
            
            // Handle specific error cases
            if (error.response.status === 419) {
                console.error('CSRF token mismatch. Please try again.');
            } else if (error.response.status === 500) {
                console.error('Server error. Please try again later.');
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API Error Request:', {
                message: 'No response received from server',
                request: error.request,
                config: errorDetails.config
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('API Error Setup:', errorDetails);
        }

        // Return a standardized error object
        return Promise.reject({
            ...error,
            errorDetails
        });
    }
);

export default instance;