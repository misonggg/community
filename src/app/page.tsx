import FollowingBar from '@/components/FollowingBar'
import PostList from '@/components/PostList'
import SideBar from '@/components/SideBar'
import React from 'react'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section className='w-full md:p-4 flex flex-col md:flex-row jusity-center mx-auto'>
      <div className='w-full lg:basis-3/4 max-w-[900px] jusity-center'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4 hidden lg:block ml-8 min-w-0'>
        <SideBar user={user} />
      </div>
    </section>
  )
}

