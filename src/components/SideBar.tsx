import { User } from '@/model/user';
import React from 'react'
import Avatar from './Avatar';
import GotoTop from './GotoTop';

const hover_class = 'hover:opacity-60 transition-all duration-50'

type Props = {
  user: User;
}

export default function SideBar({user: {name, username, email, image}}: Props) {

  return (
    <>
      <div className='flex border-2 p-3 py-4 flex-col my-4'>
        <div className='flex items-center'>
          {image && <Avatar image={image}/>}
          <div className='ml-3'>
            <p className='font-bold'>{username}</p>
            <p className='text-lg text-gray-600 leading-5'>{name}</p>
          </div>
        </div>
        <button className={`${hover_class} p-2 bg-blue-400 text-white mt-10 rounded-full`}>Create Post</button>
        <button className={`${hover_class} p-2 text-blue-400 border-blue-400 border-2 mt-3 rounded-full`}>Create Community</button>
      </div>
      <div className='flex border-2 p-3 py-4 flex-col'>
        <p className='text-sm text-gray-600'>
          About ∙ Help ∙ Press ∙ API ∙ Jobs ∙ Privacy ∙ Terms ∙ Language
        </p>
        <p className='font-bold text-sm mt-8 text-gray-600'>
          @Copyright BLUECLIP from BLUECLIPCOMPANY
        </p>
        </div>
      <GotoTop />
    </>
  )
}
