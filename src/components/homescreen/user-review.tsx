import Image from 'next/image';
import React from 'react'
import RatingIcons from '../icons/rating-icons';

const usersReviews = [
  {
    name: 'Alice Johnson',
    review:
      "Absolutely love Dishcovery! The recipes are fantastic and easy to follow. I've discovered so many new dishes to try.",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Michael Smith',
    review:
      "Dishcovery has made cooking so much fun! The variety of recipes is amazing. I've tried several and they've all turned out delicious.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
  },
  {
    name: 'Sophia Williams',
    review:
      "I'm impressed with Dishcovery. It's a great app with a wide range of recipes. I especially love the step-by-step instructions.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
  },
] as const;

const UserReview = () => {
  return (
    <>
      {usersReviews.map((review, index) => (
        <React.Fragment key={index}>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                width={56}
                height={56}
                alt={review.name}
                src={review.avatar}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <RatingIcons count={5} />
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  {review.name}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              {review.review}
            </p>
          </blockquote>
        </React.Fragment>
      ))}
    </>
  )
}

export default UserReview