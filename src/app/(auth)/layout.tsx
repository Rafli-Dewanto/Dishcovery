import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex justify-center items-center min-h-screen bg-white'>
            {children}
        </main>
    )
}
