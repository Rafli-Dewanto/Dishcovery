import { options } from "@/lib/auth-options";
import NextAuth, { getServerSession } from "next-auth";

export const handler = NextAuth(options);

export { handler as GET, handler as POST };

export const getAuthSession = () => getServerSession(options);
