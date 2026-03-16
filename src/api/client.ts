import axios from 'axios';

const api = axios.create({
  baseURL: "https://virtualdigitalhb-2.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('vdhb_token');
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});

export default api;

