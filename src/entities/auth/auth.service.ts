import { LoginCredentials, LoginResponse } from "./auth";
import { api } from "@shared/api";

class AuthService {
  async login(
    credentials: LoginCredentials
  ): Promise<LoginResponse | undefined> {
    try {
      const response = await api.post<LoginResponse>("auth/login", credentials);
      return response.data;
    } catch (error: any) {
      console.error("Login failed", error.response?.data || error.message);
      throw new Error(error.response?.data.message || "Login failed");
    }
  }
}

export const authService = new AuthService();
