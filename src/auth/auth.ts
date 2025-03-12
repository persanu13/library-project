import prismaDb from "@/db/prismaDb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { z } from "zod";
import { v4 as uuid } from "uuid";
import { encode as defaultEncode } from "next-auth/jwt";
import bcrypt from "bcryptjs";

const adapter = PrismaAdapter(prismaDb);

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: adapter,
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;

        const user = await prismaDb.user.findFirst({
          where: { email: email },
        });

        if (!user || !user.email || !user.password) return null;
        console.log(password);
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
});
