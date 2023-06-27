'use client';
import { DetailUser } from '@/model/user';
import useSWR from 'swr';
import {HashLoader} from 'react-spinners'
import Link from 'next/link';
import Avatar from './Avatar';
import FollowingCard from './FollowingCard';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  // 여기에서 useSWR의 타입을 지정해줌으로서 data.following과 같은 세부 접근이 가능해짐
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // const users = data?.following;
  // const users =undefined;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ]

  return (
    <section className='w-full justify-center items-center md:mt-4 mb-2 md:mb-4'>
      { loading ? 
        (<HashLoader
          className='text-center mt-2 flex justify-center'
          color="#86ccff"
          size={40}
        />) : 
        (!users || users?.length === 0) && 
        <p className='w-full font-bold justify-center items-center text-gray-600 text-center bg-white drop-shadow-lg py-4 rounded-lg'
        >{`아직 팔로잉하고 있는 사람이 없어요 🧐`}</p>
      }
      {
        users && users.length > 0 && 
          <ScrollableBar>
            {users.map(({image, username})=> 
              <Link key={username}
                className='flex flex-col items-center'
                href={`/user/${username}`}
              >
                <FollowingCard image={image} />
                <p className='w-full font-semibold text-center text-xs md:text-sm text-ellipsis overflow-hidden mt-2'>{username}</p>
              </Link>
            )}
          </ScrollableBar>
      }
    </section>
  )
}
