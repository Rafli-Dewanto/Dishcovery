'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import nestle from '@/assets/svg/nestle.svg';
import kraft from '@/assets/svg/kraft.svg';
import sasa from '@/assets/svg/sasa.svg';
import unilever from '@/assets/svg/unilever.svg';
import indofood from '@/assets/svg/indofood.svg';
import abc from '@/assets/svg/abc.svg';
import wings from '@/assets/svg/wings.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useEffect, useRef } from 'react';
import SectionHeading from '../ui/section-heading';

const animationVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '30px 100px -50px 0px',
    amount: 0.7,
  });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.section
      variants={animationVariant}
      ref={ref}
      animate={control}
      initial={'hidden'}
      className="my-44"
    >
      <SectionHeading>Top brands who trusts us</SectionHeading>
      <Marquee>
        <Image
          className="mx-12"
          src={nestle}
          width={100}
          height={100}
          alt="nestle"
        />
        <Image
          className="mx-12"
          src={kraft}
          width={100}
          height={100}
          alt="kraft"
        />
        <Image
          className="mx-12"
          src={sasa}
          width={100}
          height={100}
          alt="sasa"
        />
        <Image
          className="mx-12"
          src={unilever}
          width={100}
          height={100}
          alt="unilever"
        />
        <Image
          className="mx-12"
          src={wings}
          width={100}
          height={100}
          alt="wings"
        />
        <Image
          className="mx-12"
          src={indofood}
          width={100}
          height={100}
          alt="indofood"
        />
        <Image className="mx-12" src={abc} width={100} height={100} alt="abc" />
      </Marquee>
    </motion.section>
  );
}

export default TrustedBy;
