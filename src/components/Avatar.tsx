import Image from 'next/image'
import React from 'react'

export default function Avatar({image}: {image?: string | null}) {
  return (
    <div>
      <img
        className='rounded-full mx-2 hover:scale-105 hover:opacity-70 w-8 h-8 hidden md:block'
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  )
}
