import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
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
        if (!config.url.includes('localhost:8090')) {
            try {
                await axios.get('/sanctum/csrf-cookie', {
                    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
                    withCredentials: true
                });
                
                // Get the XSRF-TOKEN cookie
                const cookies = document.cookie.split(';');
                const xsrfToken = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
                
                if (xsrfToken) {
                    const token = decodeURIComponent(xsrfToken.split('=')[1]);
                    config.headers['X-XSRF-TOKEN'] = token;
                }
            } catch (error) {
                console.error('Error getting CSRF token:', error.message);
            }
        }
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error.message);
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