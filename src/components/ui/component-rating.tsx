import React, { useState } from 'react';

interface StarRatingProps {
  title: string;
}

const StarRatingCard: React.FC<StarRatingProps> = ({ title }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
  };

  const renderStars = () => {
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-6 h-6 cursor-pointer fill-current ${
            i <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => handleStarClick(i)}
        >
          <path d="M12 2l2.4 6.2H20l-5 4.8 1.7 6.3-5.7-4.3-5.7 4.3L7 13 2 7.8h7.6L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">Rating: {rating}/5</p>
      <div className="flex mb-4">{renderStars()}</div>
    </div>
  );
};

export default StarRatingCard;

/* Misal ingin memanggil StarRating pada file lain :

    <StarRatingCard title="Fried Chicken"/>

*/
