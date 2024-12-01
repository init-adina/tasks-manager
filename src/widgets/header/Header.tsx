"use client";

import { useAuth } from "src/core/providers/AuthProvider";
import HeaderDesc from "./HeaderDesc";

function Header() {
  const { user } = useAuth(); // Проверка состояния пользователя

  if (!user) {
    return null; // Если пользователя нет, ничего не рендерим
  }

  return (
    <header>
      <HeaderDesc />
      {/* <HeaderMobile /> */}
    </header>
  );
}

export default Header;
