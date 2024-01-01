import Image from "next/image";
import React from "react";

type RecipeCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  time: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image, category, time }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:text-orange-500 hover:underline">
      <Image
        width={400}
        height={600}
        alt={title}
        src={image}
        className="object-cover w-full h-48 sm:h-60 lg:h-80"
      />
      <div className="p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>
        <a href="#" className="mt-2 text-2xl font-semibold text-gray-900">
          {title}
        </a>
        <p className="mt-2 text-base text-gray-700 line-clamp-3">
          {description}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {time}
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
