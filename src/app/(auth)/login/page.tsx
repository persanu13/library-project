import { auth } from "@/auth/auth";
import { authPageSecurity } from "@/auth/security";
import GithubAuth from "@/ui/auth/github-auth";
import LoginForm from "@/ui/auth/login-form";
import { Button } from "@/ui/components/button";
import LibroLogo from "@/ui/logoes/libro";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  await authPageSecurity();
  return (
    <div className="flex sm:items-center sm:justify-center bg-background min-w-screen min-h-screen px-5 py-6">
      <main className="flex flex-col w-full  sm:rounded-xl sm:border-2 sm:border-black sm:bg-white sm:pt-10 sm:pb-8 sm:pr-10 sm:pl-10 sm:gap-4">
        <LibroLogo />
        <h1 className="text-xl font-inika font-bold text-foreground mt-2">
          Log in your account
        </h1>
        <GithubAuth />
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t-[1.5px] border-placeholder" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-3 font-inter text-foreground text-sm">
              Or continue with email
            </span>
          </div>
        </div>
        <LoginForm />
        <Link className="mt-3 " href={"/register"}>
          <Button type="button" className="mt-0 mb-0">
            Go to register{" "}
          </Button>
        </Link>
      </main>
    </div>
  );
}
