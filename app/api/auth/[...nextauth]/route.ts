import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        studentId: {
          label: "studentId",
          type: "string",
          placeholder: "studentId",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.studentId || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { studentId: credentials.studentId },
        });

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password!
        );

        if (!passwordsMatch) return null;

        // Ensure that studentId is returned properly
        return { id: user.studentId, studentId: user.studentId, name: user.name };
      },
    }),
  ],
  callbacks: {
    // JWT callback to add studentId to the token
    async jwt({ token, user }) {
      if (user) {
        token.studentId = user.studentId; // Ensure studentId is assigned to token
        token.name = user.name;
      }
      return token;
    },

    // Session callback to include studentId in the session
    async session({ session, token }) {
      if (token?.studentId) {
        session.user.studentId = token.studentId; // Set studentId in session
        session.user.name = token.name;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
