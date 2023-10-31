import { prisma } from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      const getToken = await prisma.account.findFirst({
        where: {
          userId: user.id,
        },
      });
      let accessToken: string | null = null;
      if (getToken) {
        accessToken = getToken.access_token!;
      }
      session.user.token = accessToken;
      return session;
    },
  },
};
