import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// URL страницы логина
const LOGIN_PAGE = "/login";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Получение токена из cookies

  const { pathname } = req.nextUrl;

  // Разрешить доступ только к странице логина, если токена нет
  if (!token && pathname !== LOGIN_PAGE) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = LOGIN_PAGE;
    return NextResponse.redirect(loginUrl);
  }

  // Если пользователь авторизован и пытается зайти на страницу логина, перенаправляем на главную
  if (token && pathname === LOGIN_PAGE) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next(); // Разрешить доступ
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
