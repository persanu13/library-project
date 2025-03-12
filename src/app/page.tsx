import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

export default async function MainPage() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <main>
      <h1>Main Page</h1>
    </main>
  );
}
