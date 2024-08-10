import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/db";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },

  callbacks: {
    redirect: async ({ url, baseUrl }: any) => {
      if (url.startsWith(baseUrl)) {
        return Promise.resolve("/dashboard");
      }
      return Promise.resolve(url);
    },
  },

  secret: process.env.JWT_SECRET!,
};
