import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Некорректый электронный адрес"),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
});

export type LoginFormType = z.infer<typeof loginSchema>;
