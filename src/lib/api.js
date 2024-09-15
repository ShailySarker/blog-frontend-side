import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blog-backend-side.onrender.com',
    // baseURL: 'http://localhost:4000',
});

export default api;