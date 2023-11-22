'use client'

// components/Rating.js
import { useState } from 'react';

const Star = ({ selected = false, onSelect = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 cursor-pointer ${selected ? 'text-yellow-500' : 'text-gray-300'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onSelect}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16l-4-4 1.41-1.41L12 14.17l6.59-6.59L18 8z"
      />
    </svg>
  );
};

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => setRating(index + 1)}
        />
      ))}
      <p className="ml-2 text-gray-600">{rating}/{totalStars}</p>
    </div>
  );
};

export default Rating;
