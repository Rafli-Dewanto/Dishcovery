import Image from "next/image";
import React from "react";

type RecipeCardProps = {
  title: string;
  description: string;
  image: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <article
      className="
        relative cursor-pointer 
        overflow-hidden rounded-lg 
        shadow 
        transition-all 
        hover:scale-105
        hover:shadow-lg
        "
    >
      <Image
        width={400}
        height={600}
        alt="Office"
        src={`${image}`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            10th Oct 2022
          </time>
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
