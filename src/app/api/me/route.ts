import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getUserByUsername } from '@/service/user';
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // request 안에 user 정보가 없다면 401 에러 보냄
  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  // user가 있다면 sanity에서 불러옴 -> service -> User 파일에 추가
  return getUserByUsername(user.username).then((data) =>
  NextResponse.json(data)
);
}