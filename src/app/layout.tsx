import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import SessionProvider from '@/components/session-provider';
import { EdgeStoreProvider } from '@/lib/edgestore';
import { getAuthSession } from './api/auth/[...nextauth]/route';

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
      <body className={GeistSans.className}>
        {/* //FIXME: session type  */}
        <SessionProvider session={session}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
