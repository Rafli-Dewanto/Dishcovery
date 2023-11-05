'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usecases } from '@/lib/data';

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
        <motion.div
          key={index}
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
      ))}
    </section>
  );
};

export default UseCaseCard;
