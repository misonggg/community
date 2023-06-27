import React from 'react'

type Props = {
  image?: string | null
}

const border_class = 'bg-gradient-to-bl from-blue-800 via-blue-500 to-blue-50 p-[0.15rem] md:p-[0.2rem]'

export default function FollowingCard({image}: Props) {
  return (
    <div className='shrink-0'>
      <img
        className={`${border_class} w-14 h-14 md:w-20 md:h-20 object-cover rounded-full hover:scale-110 hover:drop-shadow-xl transition-all duration-100`}
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  )
}
