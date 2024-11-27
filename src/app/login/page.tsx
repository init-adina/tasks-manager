"use client";

import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType, loginSchema } from "src/entities/auth/auth-schemas";
import { authService } from "src/entities/auth/auth.service";

function Login() {
  const isLoading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    //TODO Send data to backend within auth service end handle errors
    const res = await authService.login(data);

    console.log(res);
  });

  return (
    <section>
      <Container>
        <form
          onSubmit={onSubmit}
          className="max-w-lg mx-auto flex flex-col gap-4 py-8 text-sm"
        >
          <Headline className="text-center">Login</Headline>

          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              className="border"
              required
              {...register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              className="border"
              required
              {...register("password")}
              error={errors.password?.message}
            />

            <Button
              theme="secondary"
              type="submit"
              className="text-center flex items-center justify-center font-medium py-3 rounded-md w-full"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Log in"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Login;
