'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import exploreSvg from '@/assets/svg/explore.svg'
import createSvg from '@/assets/svg/create.svg'
import enjoySvg from '@/assets/svg/enjoy.svg'

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 min-h-screen overflow-hidden pt-[6rem] md:pb-32 w-full px-[2rem]">
      {/* Hero section */}
      <section className='flex sm:flex-row flex-col gap-x-8'>
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
          <Link href={'/recipes'}>
            <Button
              className="
            mt-16 bg-core-accent-400 
            transition-all 
            hover:bg-core-accent-500
            "
            >
              Get Started 🍽️
            </Button>
          </Link>
        </motion.section>
        <div className="mx-auto hidden scale-x-[-1] sm:block">
          <motion.div
            style={{
              'transitionProperty': 'all;',
              'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1);',
              'transitionDuration': '150ms;'
            }}
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity
            }}
            className='w-[30rem] h-[30rem]'>
            <Image
              className='object-contain'
              fill
              alt='hero food image'
              src={'https://freepngimg.com/thumb/food/139197-food-plate-top-fish-view.png'} />
          </motion.div>
        </div>
      </section>
      {/* How it works section */}
      <section className='container grid grid-cols-1 text-center'>
        <p
          className='py-10 
        font-bold
        text-2xl
        '>
          Watch it works!
        </p>
        {/* steps */}
        <article className='grid grid-cols-1 justify-items-center gap-x-4 sm:grid-cols-3'>
  {/* card 1 */}
  <div>
    <Card className='min-h-[25rem] relative grid grid-cols-1 justify-items-center items-center'>
      <CardHeader>
        <Image src={exploreSvg} width={300} height={300} alt='explore recipe' />
        <div className='flex flex-col justify-center items-center'>
          <CardTitle>Explore recipes</CardTitle>
          <CardContent>
            <p>Discover a wide array of recipes from various cuisines and categories. Find new inspiration for your next meal!</p>
          </CardContent>
        </div>
      </CardHeader>
    </Card>
  </div>
  {/* card 2 */}
  <div>
    <Card className='min-h-[25rem] relative grid grid-cols-1 justify-items-center items-center'>
      <CardHeader>
        <Image src={createSvg} width={200} height={200} alt='explore recipe' />
        <div className='flex flex-col justify-center items-center'>
          <CardTitle>Create Recipe</CardTitle>
          <CardContent>
            <p>Craft your own unique recipes, share your culinary creations, and contribute to the community with your cooking expertise.</p>
          </CardContent>
        </div>
      </CardHeader>
    </Card>
  </div>
  {/* card 3 */}
  <div>
    <Card className='min-h-[25rem] relative grid grid-cols-1 justify-items-center items-center'>
      <CardHeader>
        <Image src={enjoySvg} width={200} height={200} alt='explore recipe' />
        <div className='flex flex-col justify-center items-center'>
          <CardTitle>Cook & Enjoy</CardTitle>
          <CardContent>
            <p>Follow step-by-step guides, prepare delightful dishes, and savor the joy of cooking and relishing delicious homemade meals.</p>
          </CardContent>
        </div>
      </CardHeader>
    </Card>
  </div>
</article>

      </section>
    </main >
  );
}
