'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from 'framer-motion';
import { Content } from './content';
import { Recipe } from '@prisma/client';

export const TracingBeam = ({ recipe }: { recipe: Recipe }) => {
  // track scroll progress across page
  const { scrollYProgress } = useScroll({});

  // track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = React.useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  // Create a state for the SVG height
  const [svgHeight, setSvgHeight] = useState(0);

  // Measure the content container's height when the component mounts
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
  useEffect(() => {
    return scrollYProgressVelocity.onChange((latestVelocity) => {
      // set velocity which then will be used to calculate y1 and y2
      setVelocity(latestVelocity);
    });
  }, [scrollYProgressVelocity]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 500]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 2000]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div className="relative mx-auto h-full w-full max-w-4xl">
      <div className="absolute -left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#f87117',
              borderColor: scrollYProgress.get() > 0 ? 'white' : '#f87117',
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-4 hidden lg:block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#f87117" stopOpacity="0"></stop>
              <stop stopColor="#f87117"></stop>
              <stop offset="0.325" stopColor="#f56742"></stop>
              <stop offset="1" stopColor="#f6b1ab" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <Content ref={contentRef} recipe={recipe} />
    </motion.div>
  );
};
