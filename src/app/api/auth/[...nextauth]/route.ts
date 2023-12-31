import { options } from '@/lib/auth-options';
import { getErrorMessage } from '@/utils';
import NextAuth, { getServerSession } from 'next-auth';

export const handler = NextAuth(options);

export { handler as GET, handler as POST };

export const getAuthSession = () => getServerSession(options);

export async function getUser() {
  try {
    const session = await getAuthSession();
    return { session, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { session: null, error: message };
  }
}
