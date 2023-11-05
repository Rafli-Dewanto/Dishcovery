'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import logo from '@/assets/svg/dishcovery.svg';
import logoMobile from '@/assets/svg/logo.svg';
import { signOut, useSession } from 'next-auth/react';
import UserButton from './ui/user-button';
import { useOnClickOutside } from 'usehooks-ts';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LogOut, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { default as SignInButton } from './ui/signin-button';
import useScroll from '@/hooks/use-scrolling';

export default function Navbar() {
  const { data: session } = useSession();
  const { scrolling } = useScroll();
  const ref = useRef(null);
  const [isActive, setIsactive] = useState(false);
  useOnClickOutside(ref, () => setIsactive(false));

  return (
    <header
      id="#home"
      className={`
      sticky top-0 
      z-50 flex 
      justify-between 
      px-4 
      py-6
      ${
        scrolling
          ? 'bg-white bg-opacity-70 backdrop-blur-2xl'
          : 'bg-transparent'
      }
      `}
    >
      {/* logo */}
      <Link href={'/'}>
        <Image className="h-auto w-[15.625rem]" src={logo} alt="logo" />
      </Link>
      {/* menu */}
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-center space-x-6 px-2">
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={'/'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={'/recipes'}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={'/'}
            >
              About
            </Link>
          </li>
          {session && session.user ? (
            <li ref={ref} className="transition-all">
              <UserButton
                image={session.user.image as string}
                setIsActive={setIsactive}
                isActive={isActive}
                profilePic={session.user.image as string}
                username={session.user.name as string}
              />
            </li>
          ) : (
            <SignInButton />
          )}
        </ul>
      </nav>
      {/* responsive nav */}
      <nav className="relative sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center justify-center">
                <Image src={logoMobile} width={50} height={50} alt="logo" />
              </SheetTitle>
              {/* menu */}
              <section className="my-20 grid grid-cols-1 space-y-4">
                <div className="mt-5 flex items-center justify-center">
                  {session && session.user ? (
                    <section
                      className="
                    cursor-pointe flex 
                    flex-col 
                    items-center 
                    space-y-4
                    rounded-xl
                    px-6
                    py-2"
                    >
                      <Image
                        width={40}
                        height={40}
                        src={session.user.image as string}
                        alt="avatar"
                        className="rounded-full"
                      />
                      <p>{session.user.name}</p>
                    </section>
                  ) : (
                    <SignInButton />
                  )}
                </div>
                <Separator />
                <SheetTrigger asChild>
                  <Link href={'/'}>Home</Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href={'/recipes'}>Explore</Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href={'/about'}>About</Link>
                </SheetTrigger>
                <Button
                  onClick={() => signOut()}
                  className={`
                ${session?.user ? '' : 'hidden'} 
                absolute bottom-5 
                right-4 
                border
                border-pueblo-500 bg-white text-slate-950
                hover:bg-pueblo-50`}
                >
                  Sign Out
                  <span>
                    <LogOut className="ml-2 text-pueblo-600" />
                  </span>
                </Button>
              </section>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
