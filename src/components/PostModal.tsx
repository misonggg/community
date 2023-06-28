import React from 'react'
import CloseIcon from './ui/icons/CloseIcon';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
}

export default function PostModal({onClose, children}: Props) {
  return (
    <section
      className='fixed top-0 left-0 w-full h-full z-50 flex flex-col bg-neutral-900/70 items-center justify-center'
      onClick={(event)=> {
        if(event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button 
        className='fixed top-0 right-0 p-5 md:p-8'
        onClick={() => onClose()}
      >
          <CloseIcon />
      </button>
      <div className=''>
        {children}
      </div>
    </section>
  )
}
