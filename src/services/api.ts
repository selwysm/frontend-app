import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://backend-api-o7nd.onrender.com/api/', 
});

export default api;