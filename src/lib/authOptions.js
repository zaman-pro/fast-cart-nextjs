import dbConnect, { collectionNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const user = await dbConnect(collectionNames.USERS).findOne({
          username,
        });
        if (!user) return null;

        const isPasswordOK = password === user.password;
        if (!isPasswordOK) return null;

        return {
          id: user._id.toString(),
          username: user.username,
          role: user.role || "user",
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, session, trigger }) {
      let updatedData = {};

      if (trigger === "update" && session) {
        updatedData = { ...session };
      }

      return { ...token, ...user, ...updatedData };
    },
    async session({ session, token }) {
      const { sub, iat, exp, jti, ...rest } = token;
      session.user = rest;
      return session;
    },
  },
};
