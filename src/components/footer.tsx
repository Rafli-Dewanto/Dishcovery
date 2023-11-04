import Image from 'next/image';
import logo from '@/assets/svg/dishcovery.svg';
import Link from 'next/link';
import ScrollToTopButton from './ui/scroll-to-top';

export default function Footer() {
  return (
    <footer className="bg-white drop-shadow-2xl">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <ScrollToTopButton />
        </div>
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Image
                src={logo}
                width={300}
                height={300}
                alt="dishcovery logo"
              />
            </div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              share your culinary secrets, and explore a world of flavors with
              Dishcovery. The simplest way to create and share your favorite
              recipes.
            </p>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
