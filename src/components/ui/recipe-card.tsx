import Image from "next/image";
import React from "react";

type RecipeCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  time: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  image,
  category,
  time,
}) => {
  return (
    <article className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1 hover:scale-105 hover:text-orange-500 hover:underline hover:shadow-2xl">
      <Image
        width={400}
        height={600}
        alt={title}
        src={image}
        className="h-48 w-full object-cover sm:h-60 lg:h-80"
      />
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>
        <a href="#" className="mt-2 text-2xl font-semibold text-gray-900">
          {title}
        </a>
        <p className="mt-2 line-clamp-3 text-base text-gray-700">
          {description}
        </p>
        <div className="mt-4">
          <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            {category}
          </span>
          <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            {time}
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
