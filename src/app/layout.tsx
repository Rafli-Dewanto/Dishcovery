import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionProvider from '@/components/session-provider';
import { EdgeStoreProvider } from '@/lib/edgestore';
import { getAuthSession } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dishcovery',
  description: 'Dishcovery: Where Every Bite Tells a Story!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
