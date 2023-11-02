'use client';

import Lottie from 'lottie-react';
import notFound from '@/assets/lottie/not-found.json';

const NotFound = () => {
  return (
    <main
      className="
        relative
        grid 
        min-h-screen 
        items-center 
        justify-items-center 
        overflow-x-hidden bg-gradient-to-r
        from-orange-100 
        to-pueblo-100"
    >
      <div className="sm:mt-36 md:h-[50rem] md:w-[50rem]">
        <Lottie animationData={notFound} />
      </div>
    </main>
  );
};

export default NotFound;
