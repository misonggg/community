'use client'
import React from 'react'

export default function GotoTop() {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className='fixed bottom-6 right-20 bg-slate-400 text-white p-2 px-3 rounded-full opacity-80 hover:opacity-60 transition-all duration-75'
      onClick={handleGoToTop}
    >Go to Top</button>
  )
}
