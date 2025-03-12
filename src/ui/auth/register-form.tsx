"use client";

import { AtSymbolIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/components/button";
import { useActionState } from "react";
import { registerUser } from "@/lib/actions/users";
import { State } from "@/lib/types";

export default function RegisterForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(registerUser, initialState);
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label
            className="block text-base font-inter text-foreground"
            htmlFor="name"
          >
            Name
          </label>
          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                className="peer block w-full rounded-md text-lg font-inter text-foreground py-2 pl-10 border-1 border-gray-400 glow-shadow outline-primary-400 focus:outline-1 placeholder:text-placeholder"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                aria-describedby="name-error"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-placeholder peer-focus:text-foreground" />
            </div>

            <div id="name-error" aria-live="polite">
              {state.errors?.name?.map((error: string) => (
                <p className="text-base text-error-red" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="block text-base font-inter text-foreground"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                className="peer block w-full rounded-md text-lg font-inter text-foreground  py-2 pl-10 border-1 border-gray-400 glow-shadow outline-primary-400 focus:outline-1 placeholder:text-placeholder "
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3  top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-placeholder peer-focus:text-foreground" />
            </div>

            <div id="email-error" aria-live="polite">
              {state.errors?.email?.map((error: string) => (
                <p className="text-base text-error-red" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="block text-base font-inter text-foreground"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                className="peer block w-full rounded-md text-lg font-inter text-foreground py-2 pl-10 border-1 border-gray-400 glow-shadow outline-primary-400 focus:outline-1 placeholder:text-placeholder"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                aria-describedby="password-error"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-placeholder peer-focus:text-foreground" />
            </div>

            <div id="password-error" aria-live="polite">
              {state.errors?.password?.map((error: string) => (
                <p className="text-base text-error-red" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="block text-base font-inter text-foreground"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                className="peer block w-full rounded-md text-lg font-inter text-foreground py-2 pl-10 border-1 border-gray-400 glow-shadow outline-primary-400 focus:outline-1 placeholder:text-placeholder"
                id="confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                aria-describedby="confirm-password-error"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-placeholder peer-focus:text-foreground" />
            </div>

            <div id="confirm-password-error" aria-live="polite">
              {state.errors?.confirmPassword?.map((error: string) => (
                <p className="text-base text-error-red" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
        {state.message && (
          <div
            className="flex items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-base text-error-red" key={state.message}>
              {state.message}
            </p>
          </div>
        )}
        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>
    </form>
  );
}
