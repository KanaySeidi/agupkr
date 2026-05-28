import axios from 'axios';
import i18n from '@/i18n';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

api.interceptors.request.use(cfg => {
  const lang = (i18n.language || 'ru').split('-')[0];
  const supported = ['ru', 'ky', 'en'];
  cfg.headers['Accept-Language'] = supported.includes(lang) ? lang : 'ru';
  return cfg;
});

api.interceptors.response.use(
  r => r,
  err => Promise.reject({
    status: err.response?.status,
    message: err.response?.data?.detail || err.message || 'Network error',
  })
);
