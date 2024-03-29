import { User } from '@/model/user';
import { PageProps } from './../../.next/types/app/popular/page';
import NextAuth, { DefaultSession } from "next-auth/next";

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}