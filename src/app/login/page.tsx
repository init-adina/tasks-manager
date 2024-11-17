import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";

function Login() {
  return (
    <section>
      <Container>
        <form className="max-w-lg mx-auto flex flex-col gap-4 py-8 text-sm">
          <Headline className="text-center">Login</Headline>

          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              className="border"
            />

            <Input
              label="Password"
              className="border"
            />

            <Button
              theme="secondary"
              type="submit"
              className="text-center flex items-center justify-center font-medium py-3 rounded-md w-full"
            >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Login;
