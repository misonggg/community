import Image from 'next/image'
import React from 'react'

type Props = {
  image?: string | null;
  highlight?: boolean;
}

export default function Avatar({image, highlight = false}: Props) {
  return (
    <div className={getContainerStyle(highlight)}>
      <img
        className={`rounded-full hover:scale-105 hover:opacity-70 w-9 h-9 object-cover shrink-0 ${getContainerStyle}`}
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  )
}

function getContainerStyle(highlight: boolean): string {
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-blue-800 via-blue-500 to-blue-50 p-[0.1rem] rounded-full '
    : '';

  return `${highlightStyle}`;
}

