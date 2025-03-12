import { auth } from "@/auth/auth";
import GithubAuth from "@/ui/auth/github-auth";
import LoginForm from "@/ui/auth/login-form";
import { Button } from "@/ui/components/button";
import LibroLogo from "@/ui/logoes/libro";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="flex items-center justify-center bg-background w-screen h-screen">
      <main className="flex flex-col  rounded-xl border-2 border-black bg-white pt-10 pb-8 pr-10 pl-10 w-[476px]  gap-4">
        <LibroLogo />
        <h1 className="text-2xl font-inika font-bold text-foreground">
          Log in your account
        </h1>
        <GithubAuth />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-400" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-3 font-inter text-foreground text-muted-foreground text-base">
              Or continue with email
            </span>
          </div>
        </div>
        <LoginForm />
        <Link href={"/register"}>
          <Button type="button" className=" w-full">
            Go to register{" "}
          </Button>
        </Link>
      </main>
    </div>
  );
}
