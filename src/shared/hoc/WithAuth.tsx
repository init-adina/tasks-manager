"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface WithAuthProps {
  children: ReactNode;
}

function WithAuth({ children }: WithAuthProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        // Проверяем токен, делая запрос к профайлу
        await axios.get("http://localhost:8000/api/v1/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsLoading(false); // Если запрос успешен, токен валиден
      } catch (error) {
        console.error("Unauthorized or token invalid:", error);
        localStorage.removeItem("token"); // Удаляем недействительный токен
        router.replace("/login"); // Перенаправляем на страницу логина
      }
    };

    checkToken();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Плейсхолдер во время проверки токена
  }

  return <>{children}</>;
}

export default WithAuth;
