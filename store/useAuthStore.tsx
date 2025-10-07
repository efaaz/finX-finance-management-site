import { create } from "zustand";
import axios from "axios";

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;

  signup: (name: string, email: string, password: string) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  googleLogin: (code: string) => Promise<void>;
  logout: () => Promise<void>;
  loadUserFromCookies: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,

  signup: async (name, email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/users/register", {
        name,
        email,
        password,
      }, { withCredentials: true });

      set({
        user: res.data.data,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
      });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Signup failed" });
    } finally {
      set({ loading: false });
    }
  },

  signin: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/users/login",
        { email, password },
        { withCredentials: true }
      );

      set({
        user: res.data.data.user,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
      });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Signin failed" });
    } finally {
      set({ loading: false });
    }
  },

  googleLogin: async (code) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/users/google-signin",
        { code },
        { withCredentials: true }
      );

      set({
        user: res.data.data.user,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
      });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Google login failed" });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    set({ user: null, accessToken: null, refreshToken: null });
  },

  loadUserFromCookies: () => {
    // optionally implement to read cookies & refresh access token
  },
}));
