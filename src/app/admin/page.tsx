import { adminPageSecurity } from "@/auth/security";
import { LogOutButton } from "@/ui/auth/logout-button";

export default async function AdminPage() {
  await adminPageSecurity();
  return (
    <main>
      <h1>Admin Page</h1>
      <LogOutButton />
    </main>
  );
}
