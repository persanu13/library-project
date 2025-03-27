import { adminPageSecurity, clientPageSecurity } from "@/auth/security";
import { LogOutButton } from "@/ui/auth/logout-button";

export default async function ClientPage() {
  await clientPageSecurity();
  return (
    <main>
      <h1>Client Page</h1>
      <LogOutButton />
    </main>
  );
}
