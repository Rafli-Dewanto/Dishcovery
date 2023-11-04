'use client';

const ScrollToTopButton = () => {
  return (
    <button
      className="inline-block rounded-full bg-pueblo-400 p-2 text-white shadow transition hover:bg-pueblo-500 sm:p-3 lg:p-4"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="sr-only">Back to top</span>
      {/* Arrow up logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
