"use client";

import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/ui/components/button";
import { useActionState } from "react";
import { registerUser } from "@/lib/actions/users";
import { State } from "@/lib/types";

const inputs = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    icon: UserIcon,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
    icon: AtSymbolIcon,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    icon: KeyIcon,
  },
  {
    label: "Confirm password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
    icon: KeyIcon,
  },
];

export default function RegisterForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(registerUser, initialState);
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex flex-col gap-2">
        {inputs.map((data) => {
          const InputIcon = data.icon;
          return (
            <div key={data.name} className="flex flex-col gap-1">
              <label
                className="block text-sm font-inter font-medium text-foreground"
                htmlFor={data.name}
              >
                {data.label}
              </label>
              <div className="flex flex-col gap-[2px]">
                <div className="relative">
                  <input
                    className="peer bg-white block w-full rounded-sm text-sm font-inter text-foreground 
                 py-2 pl-10 border-1 border-border glow-shadow outline-primary-400 focus:outline-1
                  focus:border-primary placeholder:text-placeholder placeholder:font-light "
                    id={data.name}
                    type={data.type}
                    name={data.name}
                    placeholder={data.placeholder}
                    aria-describedby={`${data.name}-error`}
                  />
                  <InputIcon className="pointer-events-none absolute left-3  top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-primary" />
                </div>

                {state.errors?.[data.name] && (
                  <div
                    className="flex flex-col w-full break-words p-0 box-border"
                    id={`${data.name}-error`}
                    aria-live="polite"
                  >
                    {state.errors?.[data.name]?.map((error: string) => (
                      <p
                        className="text-xs font-inter font-light text-error-red m-0 p-0"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {state.message && (
          <div
            className="flex items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p
              className="text-sm font-inter font-light text-error-red"
              key={state.message}
            >
              {state.message}
            </p>
          </div>
        )}

        <Button type="submit" className="mt-4">
          Register
        </Button>
      </div>
    </form>
  );
}
