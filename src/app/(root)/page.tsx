import UseCase from '@/components/homescreen/usecase';
import Hero from '@/components/homescreen/hero';
import TrustedBy from '@/components/homescreen/trusted-by';
import Testimonial from '@/components/homescreen/testimonial';

export default function Home() {
  return (
    <main className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden px-1 sm:px-[2rem] sm:pt-[6rem] md:pb-32">
      <Hero />
      <UseCase />
      <TrustedBy />
      <Testimonial />
    </main>
  );
}
