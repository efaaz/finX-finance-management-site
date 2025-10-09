"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import DashboardLoad from "./LoadingScreens/DashboardLoad";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const router = useRouter();
  const { user, loadUserFromCookies, loading } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      await loadUserFromCookies();
      setInitialized(true); // mark as initialized after fetch
    };
    init();
  }, [loadUserFromCookies]);

  useEffect(() => {
    if (initialized && !user) {
      router.replace("/login");
    }
  }, [initialized, user, router]);

  // Don't show children until we know if user is logged in
  if (!initialized || loading || !user) return <DashboardLoad/>;

  return <>{children}</>;
}
