import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import Link from "next/link";

// interface RegisterFormData {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

function RegisterPage() {
  return (
    <section className="registration">
      <Container>
        <form className="max-w-md mx-auto pt-32 flex flex-col gap-4">
          <div className="top-title flex flex-col gap-4">
            <Headline className="text-center">Registration</Headline>

            <div className="text-center text-sm">
              <span>If you already registered - </span>

              <Link
                href="/login"
                className="text-primary-500 underline underline-offset-4 decoration-dotted"
              >
                Authorize
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full">
            <Input
              label="E-mail"
              className="border"
            />

            <Input
              label="Password"
              className="border"
            />

            <Input
              label="Confirm Password"
              className="border"
            />
          </div>

          <Button
            className="w-full flex items-center justify-center text-center py-3"
            type="submit"
            theme="secondary"
          >
            Register
          </Button>
        </form>
      </Container>
    </section>
  );
}

export default RegisterPage;
