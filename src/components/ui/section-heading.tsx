import React from 'react';

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className="mb-12 
        py-10 text-center text-4xl font-bold capitalize tracking-tight text-gray-900 sm:text-5xl"
    >
      {children}
    </p>
  );
};

export default SectionHeading;
