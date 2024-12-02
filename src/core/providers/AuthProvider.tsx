"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";
import { User } from "src/entities/auth/auth";
import { authService } from "src/entities/auth/auth.service";

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
