import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";

function RegisterPage() {
  return (
    <div className="registration flex items-center min-h-screen bg-gradient-to-tr from-primary-300/20 via-[#D8B5FF]/10 to-primary-100/20">
      <Container>
        <form className="flex flex-col gap-8 text-sm max-w-xl mx-auto border p-16 backdrop-blur-sm bg-white/30 shadow rounded-md">
          <Headline className="text-gray-800 text-center">Register</Headline>

          <div className="flex flex-col gap-4">
            <Input
              label="Name"
              type="name"
              className="border py-3"
              required
            />

            <Input
              label="Email"
              type="email"
              className="border py-3"
              required
            />

            <Input
              label="Password"
              type="password"
              className="border py-3"
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              className="border py-3"
              required
            />

            <Input
              label="Company Name"
              type="text"
              className="border py-3"
              required
            />

            <Button
              theme="secondary"
              type="submit"
              className="text-center flex items-center justify-center font-medium py-3 rounded-md w-full"
            >
              Register
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default RegisterPage;
