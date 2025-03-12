import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "admin@admin.com";
        const password = "parola12";

        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          return null;
        }
      },
    }),
  ],
});
