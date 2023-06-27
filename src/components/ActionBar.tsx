import { SimplePost } from '@/model/post'
import { parseDate } from '@/utill/date'
import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar'
import CommentForm from './CommentForm'
import BookmarkIcon from './ui/icons/BookmarkIcon'
import CommentIcon from './ui/icons/CommentIcon'

type Props = {
  post: SimplePost
}

export default function ActionBar({post}: Props) {
  const { username, userImage, image, createdAt, text, comments } = post;

  return (
    <>
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
          />
      </div>
      <div className='flex flex-row text-gray-500 py-3 items-center'>
        <div className='mr-6 flex items-center'>
          <CommentIcon />
          <p className='text-sm md:text-md ml-1'>{comments} Comments</p>
        </div>
        <>
          <BookmarkIcon />
          <p className='text-sm md:text-md ml-1'>Save</p>
        </>
      </div>
      <div className='flex flex-row'>
        <CommentForm />
      </div>
    </>
  )
}
