// lib/axios.js
import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
});


// Add a request interceptor to add authentication header to requests
axios.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('accessToken');
        // Check if credentials exist in local storage
        if (token) {
            // token = JSON.parse(token);
            // Set authorization header
            config.headers.Authorization = `Bearer ${token}`;
            }

        return config;
    },
    (error) => {
        console.log("error", error)
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        // Handle successful responses here
        return response;
    },
    (error) => {
        console.log("error2", error)
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default axios;
