import prisma from "@/prisma/client";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import PrismaAdapters from "@prisma/client"

export const authOptions = {
  providers : [
    CredentialsProvider({
      name: 'Credentials',
      credentials : {
        studentId: {label : 'studentId',type : 'string' , placeholder: '学籍番号'},
        password: {label:'PassWord',type: 'password',placeholder: 'Password'}
      },
      async authorize(credentials, req) {
        if (!credentials?.studentId || !credentials.password) return null

        const user = await prisma.user.findUnique({ where:{ studentId : credentials.studentId}})

        if (!user) return null
        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

        return passwordsMatch? user : null;
      },
    })
  ],
  // session : {
  //   strategy : 'jwt',
  // }
}

const handler =  NextAuth(authOptions);

export { handler as GET , handler as POST}