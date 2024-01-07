import prisma from "@/prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import PrismaAdapters from "@prisma/client";

export const authOptions = {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
