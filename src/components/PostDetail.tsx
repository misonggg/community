import { SimplePost, FullPost } from '@/model/post'
import { parseDate } from '@/utill/date';
import Image from 'next/image';
import React from 'react'
import useSWR from 'swr';
import Avatar from './Avatar';
import UpIcon from './ui/icons/UpIcon'
import DownIcon from './ui/icons/DownIcon'
import DetailCommentForm from './DetailCommentForm';


type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostDetail({post}: Props) {
  const {id, userImage, username, image, createdAt, likes, text, title} = post;
  const {data} = useSWR<FullPost>(`/api/posts/${id}`)
  const comments = data?.comments;
  console.log(comments)

  return (
    <div className='flex flex-col relative bg-white p-6 w-full'>
      {/* 상단 영역 */}
      <div className='flex flex-row mb-2'>
        <div className='flex flex-col w-full'>
            {/* 유저 */}
            <div className='flex flex-row items-center'>
              <Avatar image={userImage}/>
              <span className='font-semibold text-md mr-10 sm:mr-6 ml-1'>{username}</span>
              <p className='text-gray-600 text-sm'>∙ {parseDate(createdAt)}</p>
            </div>
            {/* 타이틀 */}
            <div>
              <p className='md:text-lg text-md p-2 ml-2'>
                {title}
              </p>
            </div>
          </div>
          {/* 업 다운 */}
          <div className='flex flex-col text-2xl items-center justify-center text-top self-start'>
            <UpIcon />
            <p className='font-bold text-sm md:text-xl'>{`${likes?.length ?? 0}`}</p>
            <DownIcon />
          </div> 
      </div>
      {/* 상단 이미지 */}
      <div className='w-full'>
        <Image
          className='w-full object-cover aspect-square rounded-lg mb-2 md:md-3'
          src={image} 
          alt={`photo by ${username}`} 
          width={500} 
          height={500} 
          priority
          // fill
          // sizes='650px'
          />
      </div>
      {/* 하단 컨텐츠 */}
      <div className='flex flex-col'>
        <DetailCommentForm post={post} />
        <ul className='border-t fu-full overflow-y-auto my-2'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li
                  key={index} 
                  className='flex items-center mb-2 pt-2'
                >
                  <Avatar
                    image={image}
                    highlight = {commentUsername === username}
                  />
                  <div className='ml-1'>
                    <span className='font-bold mr-1'>{commentUsername}</span>
                    <span className='text-md'>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  )
}
