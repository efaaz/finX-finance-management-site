import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, // send cookies automatically
});

// Axios interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const store = useAuthStore.getState();

    // Only retry if user exists and 401 occurs
    if (error.response?.status === 401 && store.user && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.refreshAccessToken();
        return api(originalRequest);
      } catch {
        store.logout();
      }
    }

    return Promise.reject(error);
  }
);


export default api;
