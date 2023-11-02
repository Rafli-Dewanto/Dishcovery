'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="mx-[0.850rem] flex flex-col gap-x-8 sm:flex-row">
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
    py-2 
    text-start
    text-3xl font-bold 
    sm:text-4xl
    md:text-5xl
    "
        >
          <span className="text-pueblo-900">Dishcovery</span>{' '}
          <span
            className="bg-gradient-to-r 
    from-core-text-400 to-core-accent-400 bg-clip-text text-transparent"
          >
            Where every bite tells a story!
          </span>
        </h1>
        <h3 className="text-base font-normal text-slate-600 sm:text-lg">
          share your culinary secrets, and explore a world of flavors with
          Dishcovery. The simplest way to create and share your favorite
          recipes.
        </h3>
        {/* CTA Container */}
        <div className="flex flex-col-reverse gap-x-2 sm:flex-row">
          <Link href={'#usecase'}>
            <Button
              className="
        mt-6 bg-pueblo-200
        bg-opacity-70 
        text-pueblo-950 
        transition-all
        hover:-translate-y-1
        hover:bg-pueblo-200
        sm:mt-16
        "
            >
              How does it work?
            </Button>
          </Link>
          <Link href={'/recipes'}>
            <Button
              className="
        mt-16 bg-core-accent-400 
        py-5 
        transition-all
        hover:-translate-y-1
        hover:bg-core-accent-400
        "
            >
              Get Started 🍽️
            </Button>
          </Link>
        </div>
      </motion.section>
      <div className="mx-auto hidden scale-x-[-1] sm:block">
        <motion.div
          style={{
            transitionProperty: 'all;',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1);',
            transitionDuration: '150ms;',
          }}
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
          }}
          className="h-[30rem] w-[30rem]"
        >
          <Image
            className="object-contain"
            fill
            alt="hero food image"
            src={
              'https://freepngimg.com/thumb/food/139197-food-plate-top-fish-view.png'
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
