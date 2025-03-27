"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/ui/components/button";
import { useActionState } from "react";
import { authenticate } from "@/auth/authenticate";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label
            className="block text-sm font-inter font-medium text-foreground"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer bg-white block w-full rounded-sm text-sm font-inter text-foreground  py-2 pl-10 border-1 border-border glow-shadow outline-primary-400 focus:outline-1 focus:border-primary placeholder:text-placeholder placeholder:font-light "
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3  top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="block text-sm font-inter font-medium text-foreground"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer bg-white block w-full rounded-sm text-sm font-inter text-foreground  py-2 pl-10 border-1 border-border glow-shadow outline-primary-400 focus:outline-1 focus:border-primary placeholder:text-placeholder placeholder:font-light "
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
            <KeyIcon className="pointer-events-none absolute left-3  top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-primary" />
          </div>
        </div>

        {errorMessage && (
          <div
            className="flex  items-center space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm font-inter font-light text-red-500">
                {errorMessage}
              </p>
            </>
          </div>
        )}
        <Button type="submit" className="mt-4" aria-disabled={isPending}>
          Log in
        </Button>
      </div>
    </form>
  );
}
