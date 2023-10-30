import Image from 'next/image';
import logo from '@/assets/svg/dishcovery.svg';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-gradient-to-r from-orange-100 to-pueblo-100">
        <nav className="px-6 py-8">
          <Image src={logo} alt="logo" width={250} height={250} />
        </nav>
        <section className="relative flex min-h-screen items-center justify-center">
          {children}
        </section>
      </main>
    </>
  );
}
