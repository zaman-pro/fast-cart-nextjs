import dbConnect, { collectionNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("CREDENTIALS FROM AUTH", credentials);
        // Add logic here to look up the user from the credentials supplied

        const { username, password } = credentials;
        const user = await dbConnect(collectionNames.USERS).findOne({
          username,
        });
        console.log(user);
        const isPasswordOK = password == user.password;

        console.log(isPasswordOK);
        // return { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (isPasswordOK) {
          return {
            id: user._id.toString(),
            username: user.username,
            role: user.role || "user",
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, session, trigger }) => {
      let updatedData = {};

      if (trigger === "update" && session) {
        updatedData = { ...session };
      }

      return { ...token, ...user, ...updatedData };
    },
    session: async ({ session, token }) => {
      const { sub, iat, exp, jti, ...rest } = token;
      session.user = rest;
      return session;
    },
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if (account) {
  //       try {
  //         //console.log("FROM SIGNIN CALLBACK", { user, account, profile, email, credentials })
  //         const { providerAccountId, provider } = account;
  //         const { email: user_email, image, name } = user;
  //         const payload = {
  //           role: "user",
  //           providerAccountId,
  //           provider,
  //           user_email,
  //           image,
  //           name,
  //         };
  //         console.log("FROM SIGNIN CALLBACK", payload);

  //         const userCollection = dbConnect(collectionNames.USERS);
  //         const isUserExist = await userCollection.findOne({
  //           providerAccountId,
  //         });

  //         if (!isUserExist) {
  //           await userCollection.insertOne(payload);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         return false;
  //       }
  //     }

  //     return true;
  //   },
  //   async session({ session, token, user }) {
  //     if (token) {
  //       session.user.username = token.username;
  //       session.user.role = token.role;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     if (user) {
  //       token.username = user.username;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  // },
};
