import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

api.interceptors.response.use(
  r => r,
  err => Promise.reject({
    status: err.response?.status,
    message: err.response?.data?.detail || err.message || 'Network error',
  })
);
