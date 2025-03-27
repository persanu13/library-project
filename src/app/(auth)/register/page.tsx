import { auth } from "@/auth/auth";
import { authPageSecurity } from "@/auth/security";
import RegisterForm from "@/ui/auth/register-form";
import { Button } from "@/ui/components/button";
import LibroLogo from "@/ui/logoes/libro";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  await authPageSecurity();
  return (
    <div className="flex sm:items-center sm:justify-center bg-background w-full min-h-screen  px-5 py-6">
      <main className="flex flex-col w-full  sm:rounded-xl sm:border-2 sm:border-black sm:bg-white sm:pt-10 sm:pb-8 sm:pr-10 sm:pl-10 sm:gap-4">
        <LibroLogo />
        <h1 className="text-xl font-inika font-bold text-foreground mt-2 mb-4">
          Create a new account
        </h1>
        <RegisterForm />
        <Link className="mt-3 " href={"/login"}>
          <Button type="button" className="mt-0 mb-0">
            Go to login
          </Button>
        </Link>
      </main>
    </div>
  );
}
