import Cookies from "js-cookie";
import { LoginCredentials, LoginResponse, User } from "./auth";
import { api } from "@shared/api";

class AuthService {
  async login(credentials: LoginCredentials) {
    try {
      const response = await api.post<LoginResponse>("auth/login", credentials);
      Cookies.set("token", response.data.token, { expires: 7 });

      const user = await this.fetchUser();
      return { ...response.data, user: user };
    } catch (error: any) {
      console.error("Login failed", error.response?.data || error.message);
    }
  }

  async fetchUser() {
    try {
      const response = await api.get<User>("/profile");
      return response.data;
    } catch (error: any) {
      return null;
    }
  }

  async logout() {
    try {
      await api.post("/logout");
      Cookies.remove("token");
    } catch (error: any) {
      console.error("Logout failed", error.response?.data || error.message);
      throw new Error(error.response?.data.message || "Logout failed");
    }
  }
}
export const authService = new AuthService();
