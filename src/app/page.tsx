import { auth } from "@/auth/auth";
import { LogOutButton } from "@/ui/auth/logout-button";
import { redirect } from "next/navigation";

export default async function MainPage() {
  const session = await auth();
  if (!session) redirect("/login");
  console.log(session);
  return (
    <main>
      <h1>Main Page</h1>
      <LogOutButton />
      <h1>{session.user?.email}</h1>
    </main>
  );
}
