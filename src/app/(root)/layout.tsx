import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
