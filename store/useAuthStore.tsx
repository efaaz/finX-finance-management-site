"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/lib/axios";

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  signup: (name: string, email: string, password: string) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  googleLogin: (code: string) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  logout: () => Promise<void>;
  loadUserFromCookies: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      error: null,

      signup: async (name, email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await api.post(
            "/auth/users/register",
            { name, email, password },
            { withCredentials: true }
          );
          set({ user: res.data.data.user });
        } catch (err: any) {
          set({ error: err.response?.data?.message || "Signup failed" });
        } finally {
          set({ loading: false });
        }
      },

      signin: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await api.post(
            "/auth/users/login",
            { email, password },
            { withCredentials: true }
          );
          set({ user: res.data.data.user });
        } catch (err: any) {
          set({ error: err.response?.data?.message || "Signin failed" });
        } finally {
          set({ loading: false });
        }
      },

      googleLogin: async (code) => {
        set({ loading: true, error: null });
        try {
          const res = await api.post(
            "/auth/users/google-signin",
            { code },
            { withCredentials: true }
          );
          set({ user: res.data.data.user });
        } catch (err: any) {
          set({ error: err.response?.data?.message || "Google login failed" });
        } finally {
          set({ loading: false });
        }
      },

      refreshAccessToken: async () => {
        try {
          await api.post(
            "/auth/users/refresh-token",
            {},
            { withCredentials: true }
          );
          // No tokens stored in JS; backend sets new HttpOnly cookie automatically
        } catch (err) {
          console.error("Failed to refresh token, logging out.");
          get().logout();
        }
      },

      loadUserFromCookies: async () => {
        set({ loading: true });
        try {
          const res = await api.get("/auth/users/current-user", {
            withCredentials: true,
          });
          set({ user: res.data.data });
        } catch (err) {
          // If fetching user fails (unauthenticated), stop any refresh attempts
          set({ user: null });
        } finally {
          set({ loading: false });
        }
      },

      logout: async () => {
        try {
          await api.post("/auth/users/logout", {}, { withCredentials: true });
        } catch {
          console.warn("Logout failed but clearing user state.");
        }
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user, // Only persist user info if you want; tokens are removed
      }),
    }
  )
);
