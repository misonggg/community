import { FullPost, SimplePost } from '@/model/post';
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import BookmarkIcon from './ui/icons/BookmarkIcon'
import CommentIcon from './ui/icons/CommentIcon'
import useSWR from 'swr';

type Props = {
  post: SimplePost;
}

export default function DetailCommentForm({post}: Props) {
  const {id, userImage, username, image, createdAt, likes, text, title} = post;
  const {data} = useSWR<FullPost>(`/api/posts/${id}`)
  const comments = data?.comments;

  return (
    <form className='w-full md:py-4 flex-col rounded-md'>
      <TextareaAutosize
        className='px-3 py-2 w-full text-sm md:text-md border rounded-md'
        cacheMeasurements
        maxRows={10}
        minRows={2}
        placeholder='Add a comment ... '
        // onChange={}
      >
      </TextareaAutosize>
      <div className='flex flex-row justify-between items-center px-2 my-1'>
        {/* 코멘트, 북마크 아이콘 */}
        <div className='flex flex-row items-center text-gray-500 self-end'>
          <CommentIcon />
          <p className='text-sm md:text-md mr-6 ml-1'>{post.comments}</p>
          <BookmarkIcon />
          <p className='text-sm md:text-md ml-1'>Save</p>
        </div>
        <button className='bg-blue-400 text-sm md:text-md p-2 rounded-full md:w-20 text-white'>Post</button>
      </div>
    </form>
  )
}
