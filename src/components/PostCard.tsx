import { SimplePost } from '@/model/post'
import React from 'react'
import UpIcon from './ui/icons/UpIcon';
import DownIcon from './ui/icons/DownIcon';
import ActionBar from './ActionBar';

type Props = {
  post: SimplePost
}

export default function PostCard({post}: Props) {
  const { likes } = post;

  return (
    <article className='flex flex-row items-center py-4 border-1 rounded-lg hover:shadow-xl'>
      <div className='felx w-full text-2xl basis-1/12 bg-slate-100'>
        <UpIcon />
        <p className='font-bold text-sm'>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <DownIcon />
      </div>
      <div className='basis-11/12 md:px-16'>
        <ActionBar post={post}/>
      </div>
    </article>
  )
}
