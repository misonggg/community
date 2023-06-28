'use client'

import { parseDate } from '@/utill/date'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from './Avatar'
import CommentForm from './CommentForm'
import BookmarkIcon from './ui/icons/BookmarkIcon'
import CommentIcon from './ui/icons/CommentIcon'
import UpIcon from './ui/icons/UpIcon'
import DownIcon from './ui/icons/DownIcon'
import ModalPortal from './ui/ModalPortal'
import { SimplePost } from '@/model/post'
import PostModal from './PostModal'
import PostDetail from './PostDetail'

const flex_center_class = 'flex flex-row items-center'
const p_class = 'text-sm md:text-md ml-1'

type Props = {
  post: SimplePost;
  // 이미지의 옵션 -> 사용자가 먼저 보는 이미지이기 때문에 먼저 받아줘~ 가튼 거
  priority?: boolean;
}

export default function ActionBar({ post, priority = false }: Props) {
  const { username, userImage, image, createdAt, text, likes, comments, title } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='flex flex-row justify-center bg-white pt-3 ml-1 md:ml-0'>
      <div className='flex p-1 md:px-3 mr-2 md:mr-8'>
        <div className='felx w-full text-md md:text-2xl'>
          <UpIcon />
          <p className='font-bold text-sm md:text-xl my-2 p-1 md:p-2'>{`${likes?.length ?? 0}`}</p>
          <DownIcon />
        </div>
      </div>
      <div>
        {/* 유저 + 코멘트 */}
        <div className={`${flex_center_class}`}>
          <Avatar image={userImage}/>
          <span className='font-semibold text-md ml-2 mr-6'>{username}</span>
          <p className='text-gray-600 text-sm'>∙ {parseDate(createdAt)}</p>
        </div>
        <div>
          <p className='font-semibold text-md md:text-lg py-2 mt-1'>{title}</p>
          <Image 
            className='w-full object-cover aspect-square md:rounded-lg'
            src={image} 
            alt={`photo by ${username}`} 
            width={500} 
            height={500} 
            priority={priority}
            onClick={()=> setOpenModal(true)}
            />
          { text && (
            <p className='md:text-md text-sm mt-2'>
              {text}
            </p>
            )
          }
        </div>
        <div className={`${flex_center_class} text-gray-500 py-3 px-2 justify-between`}>
          <div className='flex items-center'>
            <CommentIcon />
            <p className={`${p_class}`}>{comments} Comments</p>
          </div>
          <div className='flex'>
            <BookmarkIcon />
            <p className={`${p_class}`}>Save</p>
          </div>
        </div>
        <div className='flex flex-row w-full'>
          <CommentForm />
        </div>
      </div>
      {
        openModal && 
          <ModalPortal>
            <PostModal
              onClose={() => setOpenModal(false)}
            >
              <PostDetail post={post} />
            </PostModal>
          </ModalPortal>
      }
    </div>
  )
}
