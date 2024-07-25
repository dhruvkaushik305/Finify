import { authConfig } from "@/app/lib/authConfig";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
