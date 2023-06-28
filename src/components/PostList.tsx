'use client'
import { SimplePost } from '@/model/post'
import React from 'react'
import useSWR from 'swr'
import {BounceLoader} from 'react-spinners'
import PostCard from './PostCard'

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('api/posts')
  // console.log('팔로잉목록', posts)

  return (
    <section className='w-full py-6'>
      { loading && 
        <div className='text-center mt-32 flex justify-center'>
          <BounceLoader
            color="#4ab8ff"
            size={80}
          />
        </div>
      }
      { posts &&
        <ul>
          {posts.map((post, index) => (
            <li 
              key={post.id}
              className='mb-7 border-b hover:border-none'
            >
              <PostCard post={post} priority={ index < 2 }/>
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
