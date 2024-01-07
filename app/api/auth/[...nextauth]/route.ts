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

        return { id: user.studentId, name: user.name };
      },
    }),
  ],
  // session : {
  //   strategy : 'jwt',
  // }
});

export { handler as GET, handler as POST };
