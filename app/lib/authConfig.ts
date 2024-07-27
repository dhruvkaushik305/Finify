import CredentialsProvider from "next-auth/providers/credentials";
export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials: any) {
        return { id: "1", email: credentials!.email };
      },
    }),
  ],
  callbacks: {
    redirect: async (data: any) => {
      return "/dashboard";
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
