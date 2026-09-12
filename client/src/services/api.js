import axios from 'axios';
import { fallbackServices, fallbackPortfolio, fallbackBlogs } from '../data/fallbackData';

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

const shouldFetchLive = import.meta.env.VITE_USE_LIVE_API === 'true';

// Services APIs
export const servicesApi = {
  getAll: async () => {
    if (!shouldFetchLive) {
      return { data: { success: true, services: fallbackServices, count: fallbackServices.length } };
    }
    try {
      const res = await api.get('/services');
      if (res.data && res.data.services && res.data.services.length > 0) return res;
      return { data: { success: true, services: fallbackServices, count: fallbackServices.length } };
    } catch {
      return { data: { success: true, services: fallbackServices, count: fallbackServices.length } };
    }
  },
  getBySlug: async (slug) => {
    if (!shouldFetchLive) {
      const found = fallbackServices.find(s => s.slug === slug) || fallbackServices[0];
      return { data: { success: true, service: found } };
    }
    try {
      const res = await api.get(`/services/${slug}`);
      if (res.data && res.data.service) return res;
      const found = fallbackServices.find(s => s.slug === slug) || fallbackServices[0];
      return { data: { success: true, service: found } };
    } catch {
      const found = fallbackServices.find(s => s.slug === slug) || fallbackServices[0];
      return { data: { success: true, service: found } };
    }
  },
  create: (service) => api.post('/services', service),
  update: (id, service) => api.put(`/services/${id}`, service),
  delete: (id) => api.delete(`/services/${id}`)
};

// Portfolio Case Studies APIs
export const portfolioApi = {
  getAll: async () => {
    if (!shouldFetchLive) {
      return { data: { success: true, portfolio: fallbackPortfolio, count: fallbackPortfolio.length } };
    }
    try {
      const res = await api.get('/portfolio');
      if (res.data && res.data.portfolio && res.data.portfolio.length > 0) return res;
      return { data: { success: true, portfolio: fallbackPortfolio, count: fallbackPortfolio.length } };
    } catch {
      return { data: { success: true, portfolio: fallbackPortfolio, count: fallbackPortfolio.length } };
    }
  },
  getBySlug: async (slug) => {
    if (!shouldFetchLive) {
      const found = fallbackPortfolio.find(p => p.slug === slug) || fallbackPortfolio[0];
      return { data: { success: true, project: found } };
    }
    try {
      const res = await api.get(`/portfolio/${slug}`);
      if (res.data && res.data.project) return res;
      const found = fallbackPortfolio.find(p => p.slug === slug) || fallbackPortfolio[0];
      return { data: { success: true, project: found } };
    } catch {
      const found = fallbackPortfolio.find(p => p.slug === slug) || fallbackPortfolio[0];
      return { data: { success: true, project: found } };
    }
  },
  create: (project) => api.post('/portfolio', project),
  update: (id, project) => api.put(`/portfolio/${id}`, project),
  delete: (id) => api.delete(`/portfolio/${id}`)
};

// Blog & Insights APIs
export const blogApi = {
  getAll: async () => {
    if (!shouldFetchLive) {
      return { data: { success: true, blogs: fallbackBlogs, count: fallbackBlogs.length } };
    }
    try {
      const res = await api.get('/blog');
      if (res.data && res.data.blogs && res.data.blogs.length > 0) return res;
      return { data: { success: true, blogs: fallbackBlogs, count: fallbackBlogs.length } };
    } catch {
      return { data: { success: true, blogs: fallbackBlogs, count: fallbackBlogs.length } };
    }
  },
  getBySlug: async (slug) => {
    if (!shouldFetchLive) {
      const found = fallbackBlogs.find(b => b.slug === slug) || fallbackBlogs[0];
      return { data: { success: true, blog: found } };
    }
    try {
      const res = await api.get(`/blog/${slug}`);
      if (res.data && res.data.blog) return res;
      const found = fallbackBlogs.find(b => b.slug === slug) || fallbackBlogs[0];
      return { data: { success: true, blog: found } };
    } catch {
      const found = fallbackBlogs.find(b => b.slug === slug) || fallbackBlogs[0];
      return { data: { success: true, blog: found } };
    }
  },
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
