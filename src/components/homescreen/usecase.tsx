import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import exploreSvg from '@/assets/svg/explore.svg';
import createSvg from '@/assets/svg/create.svg';
import enjoySvg from '@/assets/svg/enjoy.svg';

const UseCase = () => {
  return (
    <section id="usecase" className="container grid grid-cols-1 text-center">
      <p
        className="
        py-10 
        text-2xl
        font-bold
        "
      >
        Use Cases
      </p>
      {/* steps */}
      <article className="grid grid-cols-1 items-center justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3">
        {/* card 1 */}
        <Card className="relative grid min-h-[25rem] grid-cols-1 items-center justify-items-center">
          <CardHeader>
            <Image
              className="mx-auto pb-8"
              src={exploreSvg}
              width={200}
              height={200}
              alt="explore recipe"
            />
          </CardHeader>
          <CardContent>
            <CardTitle
              className="bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 bg-clip-text text-transparent"
            >
              Explore
            </CardTitle>
            <p className="mt-4">
              Discover a wide array of recipes from various cuisines and
              categories. Find new inspiration for your next meal!
            </p>
          </CardContent>
        </Card>
        {/* card 2 */}
        <Card className="relative grid min-h-[25rem] grid-cols-1 items-center justify-items-center">
          <CardHeader>
            <Image
              className="mx-auto pb-8"
              src={createSvg}
              width={200}
              height={200}
              alt="explore recipe"
            />
          </CardHeader>
          <CardContent>
            <CardTitle
              className="bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 bg-clip-text text-transparent"
            >
              Create & Share
            </CardTitle>
            <p className="mt-4">
              Craft your own unique recipes, share your culinary creations, and
              contribute to the community with your cooking expertise.
            </p>
          </CardContent>
        </Card>
        {/* card 3 */}
        <Card className="relative grid min-h-[25rem] grid-cols-1 items-center justify-items-center">
          <CardHeader>
            <Image
              className="mx-auto pb-8"
              src={enjoySvg}
              width={200}
              height={200}
              alt="explore recipe"
            />
          </CardHeader>
          <CardContent>
            <CardTitle
              className="bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 bg-clip-text text-transparent"
            >
              Cook & Enjoy
            </CardTitle>
            <p className="mt-4">
              Follow step-by-step guides, prepare delightful dishes, and savor
              the joy of cooking and relishing delicious homemade meals.
            </p>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default UseCase;
