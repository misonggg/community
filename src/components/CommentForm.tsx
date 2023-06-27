import React from 'react'

export default function CommentForm() {
  return (
    <form className='w-full border-gray-200 md:py-4'>
      <input
        className='px-3 py-2 w-4/5 md:w-4/5 rounded-xl text-sm md:text-md bg-slate-100 overflow-x-auto'
        type='text'
        placeholder='Add a Comment...'
      />
      <button className='bg-blue-400 text-sm md:text-md p-2 mx-2 rounded-xl md:w-20 text-white'>Post</button>
    </form>
  )
}
