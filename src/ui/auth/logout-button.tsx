"use client";

import { logout } from "@/auth/authenticate";

export function LogOutButton() {
  return (
    <form action={logout}>
      <button type="submit">LogOut</button>
    </form>
  );
}
