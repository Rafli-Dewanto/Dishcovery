
import React, {
  HTMLAttributes,
  forwardRef,
  type ForwardedRef,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Recipe } from '@prisma/client';
import { handleFetch } from '@/utils';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  recipe: Recipe;
}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ recipe, ...props }, ref: ForwardedRef<HTMLDivElement>) => {

    return (
      <div ref={ref} className="mx-auto max-w-2xl  pt-4 ">
        <div key={recipe?.id} className="mb-10">
          <div className="flex justify-between">
            <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
              {recipe?.cuisineType}
            </h2>
            <h3>
              {recipe?.createdAt instanceof Date
                ? recipe.createdAt.toLocaleDateString()
                : ''}
            </h3>
          </div>

          <p className={twMerge('mb-4 text-xl')}>{recipe?.name}</p>

          <div className="prose prose-sm text-sm text-neutral-700">
            {recipe?.image && (
              <Image
                src={recipe?.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="mb-10 rounded-lg object-cover"
              />
            )}
            {recipe?.description}
            <br />
            <section dangerouslySetInnerHTML={{ __html: recipe?.instructions }}></section>
          </div>
        </div>
      </div>
    );
  },
);

Content.displayName = 'Content';
export default Content;
