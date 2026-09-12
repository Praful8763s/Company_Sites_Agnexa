import axios from 'axios';

const rawApiUrl = import.meta.env.VITE_API_URL;
const resolvedBaseUrl = rawApiUrl 
  ? `${rawApiUrl.replace(/\/+$/, '')}/api` 
  : '/api';

const api = axios.create({
  baseURL: resolvedBaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Attach JWT token if stored
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('agnexa_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Auth APIs
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (payload) => api.post('/auth/reset-password', payload)
};

// Contact APIs
export const contactApi = {
  submit: (formData) => api.post('/contact', formData),
  getAll: () => api.get('/contact'),
  updateStatus: (id, payload) => api.patch(`/contact/${id}`, payload),
  delete: (id) => api.delete(`/contact/${id}`)
};

// Newsletter APIs
export const newsletterApi = {
  subscribe: (email) => api.post('/newsletter', { email }),
  getAll: () => api.get('/newsletter'),
  updateStatus: (id, status) => api.patch(`/newsletter/${id}`, { status })
};

// Services APIs
export const servicesApi = {
  getAll: () => api.get('/services'),
  getBySlug: (slug) => api.get(`/services/${slug}`),
  create: (service) => api.post('/services', service),
  update: (id, service) => api.put(`/services/${id}`, service),
  delete: (id) => api.delete(`/services/${id}`)
};

// Portfolio Case Studies APIs
export const portfolioApi = {
  getAll: () => api.get('/portfolio'),
  getBySlug: (slug) => api.get(`/portfolio/${slug}`),
  create: (project) => api.post('/portfolio', project),
  update: (id, project) => api.put(`/portfolio/${id}`, project),
  delete: (id) => api.delete(`/portfolio/${id}`)
};

// Blog & Insights APIs
export const blogApi = {
  getAll: () => api.get('/blog'),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  create: (article) => api.post('/blog', article),
  update: (id, article) => api.put(`/blog/${id}`, article),
  delete: (id) => api.delete(`/blog/${id}`)
};

// Careers & Applications APIs
export const careersApi = {
  apply: (applicationData) => api.post('/careers/apply', applicationData),
  getApplications: () => api.get('/careers/applications'),
  updateStatus: (id, status) => api.patch(`/careers/applications/${id}`, { status })
};

// Admin Management APIs
export const adminApi = {
  getStats: () => api.get('/admin/stats'),
  getUsers: () => api.get('/admin/users'),
  updateUserRole: (id, role) => api.patch(`/admin/users/${id}/role`, { role })
};

export default api;
