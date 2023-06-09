import axios, { AxiosRequestConfig } from "axios";

// http://localhost:3001

export const BASE_URL = "https://befront-backend.onrender.com";

export const befrontApi = axios.create({
  baseURL: BASE_URL,
});

befrontApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (config.headers) config.headers.Authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
