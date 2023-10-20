import Image from 'next/image';
import React from 'react';

type RecipeCardProps = {
    title: string;
    description: string;
    image: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image }) => {
    return (
        <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition-all duration-200">
            <Image width={400} height={600} src={image} alt={title} className="object-cover brightness-75" />
            <div className='hidden group-hover:block absolute bottom-4 left-4 transition-all'>
                <h1 className='text-2xl font-semibold text-core-text-50'>Salad</h1>
            </div>
        </div>
    );
};

export default RecipeCard;
