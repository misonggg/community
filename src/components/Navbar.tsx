'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import AngleDownIcon from './ui/icons/AngleDownIcon'
import HomeFillIcon from './ui/icons/HomeFillIcon'
import AngleUpIcon from './ui/icons/AngleUpIcon'
import SearchIcon from './ui/icons/SearchIcon'
import PlusIcon from './ui/icons/PlusIcon'
import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from './Avatar'
import ClipIcon from './ui/icons/ClipIcon'

const li_class = 'py-2 px-3 bg-white hover:bg-gray-200 cursor-pointer text-sm'
const hover = 'hover:opacity-60 transition-all duration-150'
const transition = 'transition-all duration-150'
const signIn_btn = 'bg-blue-500 text-white text-xs md:text-sm p-2 md:py-2 md:px-3 md:px-6 rounded-full hover:opacity-60 text-sm md:text-base shrink-0 mr-1'
const signOut_btn = 'bg-red-300 text-white text-xs md:text-sm p-2 md:py-2 md:px-3 md:px-6 rounded-full hover:opacity-60 text-sm md:text-base shrink-0 mr-1'

export default function Navbar() {
  const { data: session } = useSession()
  const user = session?.user;
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  
  const handleHomeClick = () => {
    setIsHomeClicked(!isHomeClicked);
  }

  // 메뉴 토글 (다른 곳을 클릭해도 창이 닫히게 함)
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsHomeClicked(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef.current]); // menuRef.current를 의존성 배열에 추가

  return (
    <div className='flex flex-row py-1 items-center z-10'>
      <Link href="/" className='flex items-center shrink-0 mr-6 md:mr-10'>
        <h1 className={`font-bold text-lg md:text-2xl p-2`}>BLUE CLIP</h1>
        <ClipIcon />
      </Link>
      <nav className='flex flex-row w-full justify-between items-center'>
        <div className='flex relative w-32 md:w-40' ref={menuRef}
          onClick={handleHomeClick}>
          <div className={`${hover} flex w-44 items-center cursor-pointer`}>
            <HomeFillIcon/>
              <p className='mx-2 mr-10 hidden md:block'>Home</p>
            {isHomeClicked ? <AngleUpIcon /> : <AngleDownIcon />}
          </div>
          <ul
          className='flex flex-col absolute bg-white z-20 w-44 top-6 md:top-12 drop-shadow-lg '
          >
          {isHomeClicked && (
              <>
                <li className={`${li_class} ${transition} mt-2`}>Popular</li>
                <li className={`${li_class} ${transition}`}>All</li>
                <li className={`${li_class} ${transition}`}>Create Post</li>
                <li className={`${li_class} ${transition}`}>Notifications</li>
              </>
            )}
          </ul>
        </div>
        <div className='hidden lg:block'>
          <div className='border-2 hover:border-blue-500 w-80 flex flex-row items-center px-3 py-2 rounded-full'>
            <SearchIcon />
            <input
              className='px-2 text-sm w-full focus:outline-none'
              type='text'
            />
          </div>
        </div>
        <div className='flex items-center shrink-0'>
          {user && 
            <>
              <Link href={'/new'}>
                <PlusIcon />
              </Link>
              <Link href={`/user/${user.username}`} className='hidden md:block mr-2'>
                <Avatar image={user.image}/>
              </Link>
            </>
          }
          {
            session?
              (<button className={`${signOut_btn}`} onClick={() => signOut()}>Sign Out</button>)
            :
              (<button className={`${signIn_btn}`} onClick={() => signIn()}>Sign In</button>)
          }
        </div>
      </nav>
    </div>
  )
}
