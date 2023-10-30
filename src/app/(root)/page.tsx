'use client';

import Lottie from 'lottie-react';
import pan from '@/assets/pan_animation.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="container relative flex min-h-screen flex-col gap-x-8 overflow-hidden pt-6 sm:flex-row md:pb-32">
      <div className="absolute right-[-30.5rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-core-primary-500 blur-[40rem] sm:-right-10 sm:blur-[10rem] md:right-20 md:top-20"></div>
      <div className="absolute left-[30rem] top-20 -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-core-primary-100 blur-[10rem]"></div>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="
        mx-auto 
        mt-20 flex 
        flex-col 
        items-start
        justify-center
        sm:mt-0 
        sm:w-1/2"
      >
        <h1
          className="
        bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 
        bg-clip-text py-2 
        text-start
        text-3xl font-bold
        text-transparent 
        sm:text-4xl
        md:text-5xl
        "
        >
          Dishcovery - Where every bite tells a story!
        </h1>
        <h3 className="text-base font-normal text-slate-600 sm:text-lg">
          share your culinary secrets, and explore a world of flavors with
          Dishcovery. The simplest way to create and share your favorite
          recipes.
        </h3>
        <Link href={'/recipes'}>
          <Button
            className="
            mt-16 bg-core-accent-400 
            transition-all 
            hover:bg-core-accent-500
            "
          >
            Dishcover Recipes 🍽️
          </Button>
        </Link>
      </motion.section>
      <div className="mx-auto hidden scale-x-[-1] sm:block">
        <Lottie animationData={pan} />
      </div>
    </main>
  );
}
