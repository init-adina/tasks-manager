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
        <form className="max-w-4xl mx-auto flex flex-col gap-4 py-8">
          <Headline className="text-center">Registration</Headline>

          <div className="text-center text-sm">
            <span>If you already registered - </span>

            <Link
              href="/login"
              className="text-primary-500 underline underline-offset-4 decoration-dotted"
            >
              {""}
              Authorize
            </Link>
          </div>

          <div className="btns grid sm:grid-cols-2 gap-4">
            <Button
              theme="secondary"
              className="w-full flex items-center justify-center text-center py-3"
            >
              Customer
            </Button>

            <Button
              theme="secondary"
              className="w-full flex items-center justify-center text-center py-3"
            >
              Vendor
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="UserName"
              className="border"
            />

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

          <div className="mx-auto md:w-1/2">
            <Button
              className="w-full flex items-center justify-center text-center py-3"
              type="submit"
              theme="secondary"
            >
              Register
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default RegisterPage;
