"use server";

import prismaDb from "@/db/prismaDb";
import { State } from "@/lib/types";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const RegisterSchema = z
  .object({
    name: z
      .string({ invalid_type_error: "Please enter a username." })
      .min(1, "Username cannot be empty."), // Validare pentru string gol
    email: z
      .string({ invalid_type_error: "Please enter an email." })
      .min(1, "Email cannot be empty.")
      .email("Please enter a valid email."),
    // Validare pentru string gol
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.") // Lungime minimă
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.") // Cel puțin o literă mare
      .regex(/[0-9]/, "Password must contain at least one number.") // Cel puțin o cifră
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character."
      ), // Cel puțin un simbol special
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export async function registerUser(prevState: State, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }
  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await prismaDb.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existingUser) {
      return {
        message: "Registration failed",
        errors: {
          email: ["User with this email already exists"],
        },
      };
    }
    const hashedPassword = await hash(password, 10);
    await prismaDb.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to register user.",
      errors: {
        db: ["An unexpected error occurred. Please try again."],
      },
    };
  }
  revalidatePath("/admin/users");
  redirect("/login");
}
