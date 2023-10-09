'use client'

import Lottie from 'lottie-react'
import pan from '@/assets/pan_animation.json'

export default function Home() {
  return (
    <main className="flex px-4 justify-center items-center">
      <section className=''>
        <h1>Dishcovery</h1>
        <h3>Where every bites tells a story!</h3>
        <button className='my-8'>Get Started - it&apos;s free</button>
      </section>
      <div className='scale-x-[-1]'>
        <Lottie animationData={pan} />
      </div>
    </main>
  )
}
