'use client';

import React from 'react';
import Image from 'next/image';
import exploreSvg from '@/assets/svg/explore.svg';
import createSvg from '@/assets/svg/create.svg';
import enjoySvg from '@/assets/svg/enjoy.svg';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const usecases = [
  {
    title: 'Explore',
    image: exploreSvg,
    alt: 'explore recipe',
    description:
      'Discover a wide array of recipes from various cuisines and categories. Find new inspiration for your next meal!',
  },
  {
    title: 'Create & Share',
    image: createSvg,
    alt: 'create recipe',
    description:
      'Craft your own unique recipes, share your culinary creations, and contribute to the community with your cooking expertise.',
  },
  {
    title: 'Cook & Enjoy',
    image: enjoySvg,
    alt: 'enjoy',
    description:
      'Follow step-by-step guides, prepare delightful dishes, and savor the joy of cooking and relishing delicious homemade meals.',
  },
] as const;

const animation = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.65 * index,
      duration: 0.95,
    },
  }),
} as const;

const UseCaseCard = () => {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center gap-x-4 gap-y-4 xl:grid-cols-3">
      {usecases.map((value, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={'initial'}
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={index}
            variants={animation}
          >
            <Card className="relative grid min-h-[25rem] w-full grid-cols-1 items-center justify-items-center">
              <CardHeader>
                <Image
                  className="mx-auto pb-8"
                  src={value.image}
                  width={200}
                  height={200}
                  alt={value.alt}
                />
              </CardHeader>
              <CardContent>
                <CardTitle
                  className="bg-gradient-to-r 
            from-core-text-400 to-core-accent-400 bg-clip-text text-transparent"
                >
                  {value.title}
                </CardTitle>
                <p className="mt-4">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default UseCaseCard;
