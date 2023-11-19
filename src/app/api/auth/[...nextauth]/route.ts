import { options } from '@/lib/auth-options';
import { SessionWithToken } from '@/lib/types';
import { getErrorMessage } from '@/utils';
import { Session } from 'inspector';
import NextAuth, { getServerSession } from 'next-auth';

export const handler = NextAuth(options);

export { handler as GET, handler as POST };

export const getAuthSession = (): Promise<Session | null | SessionWithToken> =>
  getServerSession(options);

export async function getUser(): Promise<
  [Session | null | SessionWithToken, string | null]
> {
  try {
    const session = await getAuthSession();
    return [session, null];
  } catch (error) {
    const message = getErrorMessage(error);
    return [null, message];
  }
}
