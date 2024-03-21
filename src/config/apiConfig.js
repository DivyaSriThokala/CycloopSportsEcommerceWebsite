import axios from "axios";

export const API_BASE_URL = "https://delicious-stamp-production.up.railway.app";

// Create a new instance of Axios
export const api = axios.create({ baseURL: API_BASE_URL });

// Add a request interceptor to inject JWT token into the headers
api.interceptors.request.use(config => {
    // Retrieve JWT token from localStorage
    const jwt = localStorage.getItem("jwt");

    // If JWT token exists, set Authorization header
    if (jwt) {
        config.headers["Authorization"] = `Bearer ${jwt}`;
    }

    return config;
}, error => {
    // Handle request errors
    return Promise.reject(error);
});
