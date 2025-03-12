"use client";

import { logout } from "@/auth/authenticate";
import { Button } from "../components/button";

export function LogOutButton() {
  return (
    <form action={logout}>
      <Button type="submit">LogOut</Button>
    </form>
  );
}
