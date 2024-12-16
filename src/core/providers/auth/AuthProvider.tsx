"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "src/entities/auth/auth";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  initialUserData: User | null;
}

export const AuthProvider = ({
  children,
  initialUserData,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUserData);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
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
