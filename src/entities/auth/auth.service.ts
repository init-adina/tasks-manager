import Cookies from "js-cookie";
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
    }
  }

  async fetchUser() {
    try {
      const response = await api.get("auth/profile");
      return response.data;
    } catch (error: any) {
      return null;
    }
  }

  async logout() {
    try {
      await api.post("auth/logout");
      Cookies.remove("token");
    } catch (error: any) {
      console.error("Logout failed", error.response?.data || error.message);
      throw new Error(error.response?.data.message || "Logout failed");
    }
  }
}
export const authService = new AuthService();
