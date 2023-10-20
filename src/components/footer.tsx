import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-center items-center w-full px-6 py-4 min-h-max bg-white mt-auto'>
            <p className='
            text-center font-light 
            text-core-text-950
            '>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
        </footer>
    )
}
