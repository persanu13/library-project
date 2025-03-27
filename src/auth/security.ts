import { auth } from "@/auth/auth";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

export async function authPageSecurity() {
  const session = await auth();
  if (!session) return;
  const user = session!.user as User;
  if (user.role === "ADMIN") return redirect("/admin");
  if (user.role === "CLIENT") return redirect("/client");
}

export async function adminPageSecurity() {
  const session = await auth();
  if (!session) return redirect("/login");
  const user = session.user as User;
  if (user.role !== "ADMIN") return redirect("/login");
}

export async function clientPageSecurity() {
  const session = await auth();
  if (!session) return redirect("/login");
}
