import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Temporary in-memory user storage (replace with database later)
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@ytscope.com",
    password: "$2b$10$MTYWDB1L46osOhNuqsBj5.FQW8nSCnW/iWbeP0OjNKgGPwzGiU/wC", // password123
    image: null,
    onboardingCompleted: false,
  },
];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        // Find user by email
        const user = users.find((u) => u.email === credentials.email);

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Verify password
        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          onboardingCompleted: user.onboardingCompleted,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.onboardingCompleted = user.onboardingCompleted || false;
      }

      // Update session
      if (trigger === "update" && session) {
        token.onboardingCompleted = session.onboardingCompleted;
      }

      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.onboardingCompleted = token.onboardingCompleted;
      }
      return session;
    },
    async redirect({ url, baseUrl }: any) {
      // After sign in
      if (url === baseUrl || url === `${baseUrl}/`) {
        return `${baseUrl}/dashboard`;
      }
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
