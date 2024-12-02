"use client";

import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType, loginSchema } from "src/entities/auth/auth-schemas";
import { authService } from "src/entities/auth/auth.service";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuth } from "src/core/providers/AuthProvider";

function Login() {
  const isLoading = false;
  const router = useRouter();
  const { refetchUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    //TODO Send data to backend within auth service end handle errors
    const res = await authService.login(data);

    if (res?.token) {
      Cookies.set("token", res.token, { expires: 7 });
      console.log("Token saved!");

      refetchUser();
      router.push("/portfolio");
    } else {
      setError("root", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
    console.log(res);
  });

  return (
    <div className="login flex items-center min-h-screen bg-gradient-to-tr from-primary-300/20 via-[#D8B5FF]/10 to-primary-100/20">
      <Container>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-8 text-sm max-w-xl mx-auto border p-16 backdrop-blur-sm bg-white/30 shadow rounded-md"
        >
          <Headline
            size="none"
            className="text-center text-3xl text-gray-800"
          >
            Login
          </Headline>

          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              className="border py-3"
              required
              {...register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              className="border py-3"
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

            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
