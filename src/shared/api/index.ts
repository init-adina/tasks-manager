import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  let token: string | null = null;
  if (typeof window === "undefined") {
    try {
      token =
        (await import("next/headers")).cookies().get("token")?.value || null;
    } catch {}
  } else {
    token = Cookies.get("token") || null;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
