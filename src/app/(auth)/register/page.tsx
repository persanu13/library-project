import { auth } from "@/auth/auth";
import RegisterForm from "@/ui/auth/register-form";
import { Button } from "@/ui/components/button";
import LibroLogo from "@/ui/logoes/libro";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="flex items-center justify-center bg-background w-screen h-screen">
      <main className="flex flex-col  rounded-xl border-2 border-black bg-white pt-10 pb-8 pr-10 pl-10 w-[476px]  gap-4">
        <LibroLogo />
        <h1 className="text-2xl font-inika font-bold text-foreground">
          Create a new account
        </h1>
        <RegisterForm />
        <Link href={"/login"}>
          <Button type="button" className=" w-full">
            Go to login
          </Button>
        </Link>
      </main>
    </div>
  );
}
