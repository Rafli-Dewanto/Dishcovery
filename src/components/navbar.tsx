"use client"

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import logo from '@/assets/svg/dishcovery.svg'
import { signIn, useSession } from 'next-auth/react'
import UserButton from './ui/user-button'
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()
  const ref = useRef(null)
  const [isActive, setIsactive] = useState(false);
  useOnClickOutside(ref, () => setIsactive(false))

  return (
    <header
      id='#home'
      className='
      px-4 py-6 
      flex justify-between 
      bg-white sticky 
      top-0 backdrop-blur-2xl 
      bg-opacity-70 z-50
      '>
      {/* logo */}
      <Link href={'/'}>
        <Image src={logo} alt='logo' width={250} height={250} />
      </Link>
      {/* menu */}
      <ul className='flex px-2 space-x-6 justify-center items-center'>
        <li><Link className='font-medium hover:text-core-accent-400 transition-all' href={'/'}>Home</Link></li>
        <li><Link className='font-medium hover:text-core-accent-400 transition-all' href={'/'}>Explore</Link></li>
        <li><Link className='font-medium hover:text-core-accent-400 transition-all' href={'/'}>About</Link></li>
        {session && session.user ? (
          <li ref={ref} className='transition-all'>
            <UserButton
              image={session.user.image as string}
              setIsActive={setIsactive}
              isActive={isActive}
              profilePic={session.user.image as string}
              username={session.user.name as string} />
          </li>
        ) : <button onClick={() => signIn()}>sign in</button>}
      </ul>
    </header>
  )
}
