import React from 'react'

type Props = {
  text: string;
  onClick: () => void;
}

export default function LoginButton({text, onClick}: Props) {
  return (
    <button
      className='border-2 border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full hover:border-blue-800 hover:text-blue-800 hover:drop-shadow-lg transition-all duration-150'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
