import { signIn } from 'next-auth/react';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { addUser } from '@/service/user';
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    // 로그인이 될 때
    async signIn({user: {id, name, image, email }}) {
      if(!email) {
        return false;
      }
      addUser({
        id, name: name || '', image, email, username: email.split('@')[0]
      });
      return true;
    },

    // 세션이 만들어질 때
    async session({ session }) {
      const user = session?.user;
      if(user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);
