"use client"

import { signOut } from 'next-auth/react';
import Image from 'next/image'
import React from 'react';
import { Separator } from '@/components/ui/separator';

type UserButtonProps = {
    profilePic: string;
    username: string;
    image: string;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserButton({
    profilePic,
    username,
    isActive,
    setIsActive,
    image
}: UserButtonProps
) {
    return (
        <div className='relative'>
            <Image
                onClick={() => setIsActive(!isActive)}
                className='
                rounded-full cursor-pointer
                transition-all
                hover:border-blue-100
                hover:border-2
                '
                src={profilePic}
                width={40}
                height={40}
                alt='avatar' />
            {isActive ? (
                // user card
                <div className='
                bg-white px-8 py-4 
                rounded-xl absolute 
                top-14 drop-shadow-lg 
                right-1 
                w-[20rem]
                '>
                    <section className='
                    flex flex-col justify-center 
                    items-center space-y-3
                    '>
                        <Image
                            className='rounded-full'
                            width={40}
                            height={40}
                            src={image}
                            alt={'avatar'}
                        />
                        <p className='font-semibold'>{username}</p>
                        <Separator />
                    </section>
                    <p
                        onClick={() => signOut()}
                        className='
                        text-slate-950
                        font-light text-start 
                        my-4 cursor-pointer 
                        transition-all 
                        hover:text-slate-600'>
                        Sign Out
                    </p>
                </div>
            ) : null}

        </div>
    )
}
