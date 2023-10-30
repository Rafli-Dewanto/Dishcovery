'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { Separator } from '@/components/ui/separator';

type UserButtonProps = {
  profilePic: string;
  username: string;
  image: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserButton({
  profilePic,
  username,
  isActive,
  setIsActive,
  image,
}: UserButtonProps) {
  return (
    <div className="relative">
      <Image
        onClick={() => setIsActive(!isActive)}
        className="
                cursor-pointer rounded-full
                transition-all
                hover:border-2
                hover:border-blue-100
                "
        src={profilePic}
        width={40}
        height={40}
        alt="avatar"
      />
      {isActive ? (
        // user card
        <div
          className="
                absolute right-1 top-14 
                w-[20rem] rounded-xl 
                bg-white px-8 
                py-4 
                drop-shadow-lg
                "
        >
          <section
            className="
                    flex flex-col items-center 
                    justify-center space-y-3
                    "
          >
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={image}
              alt={'avatar'}
            />
            <p className="font-semibold">{username}</p>
            {/* user menu */}
            <div className="my-4 flex w-full justify-start">
              <p>My Profile</p>
            </div>
            <Separator />
          </section>
          <p
            onClick={() => signOut()}
            className="
                        my-4
                        cursor-pointer text-start 
                        font-light text-slate-950 
                        transition-all 
                        hover:text-slate-600"
          >
            Sign Out
          </p>
        </div>
      ) : null}
    </div>
  );
}
