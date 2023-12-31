import Image from 'next/image';
import RatingIcons from '../icons/rating-icons';
import SectionHeading from '../ui/section-heading';
import React from 'react';
import UserReview from './user-review';

function Testimonial() {
  return (
    <section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading>
            Read trusted reviews from our customers
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <UserReview />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Testimonial;
