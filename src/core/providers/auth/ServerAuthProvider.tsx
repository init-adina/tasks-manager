import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { authService } from "src/entities/auth/auth.service";

export const ServerAuthProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialUser = await authService.fetchUser();
  return <AuthProvider initialUserData={initialUser}>{children}</AuthProvider>;
};
