"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";
import { authService } from "src/entities/auth/auth.service";

interface Position {
  id: number;
  name: string;
  description: string | null;
  slug: string;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  birth_date_at: string | null;
  email_verified_at: string;
  avatar: string | null;
  gender: string;
  position_id: number;
  address: string | null;
  created_at: string;
  updated_at: string;
  projects_count: number;
  position: Position;
  projects: any[];
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  refetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery<User | null>({
    queryKey: ["user"],
    initialData: null,
    queryFn: authService.fetchUser,
    enabled: true,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: isLoading,
        refetchUser: () => refetch().then(() => {}),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен быть использован внутри AuthProvider");
  }
  return context;
};
