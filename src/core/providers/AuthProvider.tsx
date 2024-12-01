"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const fetchedUser = await authService.fetchUser();
      setUser(fetchedUser);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refetchUser: fetchUser }}>
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
