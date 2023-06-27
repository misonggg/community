import { SimplePost } from '@/model/post'
import { parseDate } from '@/utill/date'
import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar'
import CommentForm from './CommentForm'
import BookmarkIcon from './ui/icons/BookmarkIcon'
import CommentIcon from './ui/icons/CommentIcon'
import UpIcon from './ui/icons/UpIcon'
import DownIcon from './ui/icons/DownIcon'

type Props = {
  post: SimplePost;
  // 이미지의 옵션 -> 사용자가 먼저 보는 이미지이기 때문에 먼저 받아줘~ 가튼 거
  priority?: boolean;
}

export default function ActionBar({ post, priority = false }: Props) {
  const { username, userImage, image, createdAt, text, likes, comments } = post;

  return (
    <div className='flex flex-row items-start justify-center'>
      <div className='flex p-1 md:px-3 mr-2 md:mr-8'>
        <div className='felx w-full text-md md:text-2xl'>
          <UpIcon />
          <p className='font-bold text-sm md:text-xl my-2 p-1 md:p-2'>{`${likes?.length ?? 0}`}</p>
          <DownIcon />
        </div>
      </div>
      <div>
        <div className='flex flex-row items-center'>
          <Avatar image={userImage}/>
          <span className='font-semibold text-md ml-2 mr-6'>{username}</span>
          <p className='text-gray-600 text-sm'>∙ {parseDate(createdAt)}</p>
        </div>
        <div>
          <p className='font-semibold md:text-lg py-2 text-sm'>
            {text}
          </p>
          <Image 
            className='w-full object-cover aspect-square rounded-lg'
            src={image} 
            alt={`photo by ${username}`} 
            width={500} 
            height={500} 
            priority={priority}
            />
        </div>
        <div className='flex flex-row text-gray-500 py-3 px-2 items-center justify-between'>
          <div className='flex items-center'>
            <CommentIcon />
            <p className='text-sm md:text-md ml-1'>{comments} Comments</p>
          </div>
          <div className='flex'>
            <BookmarkIcon />
            <p className='text-sm md:text-md ml-1'>Save</p>
          </div>
        </div>
        <div className='flex flex-row w-full'>
          <CommentForm />
        </div>
      </div>
    </div>
  )
}
