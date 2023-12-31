import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      authorized: ({ req, token }) => {
        // verify token and return a boolean
        console.log(token);

        if (token) {
          return true;
        } else {
          return false;
        }
        //   const sessionToken = req.cookies.get('next-auth.session-token');
        //   if (sessionToken) return true;
        //   else return false;
      },
    },
    pages: {
      signIn: '/auth/signin',
    },
  },
);

export const config = { matcher: ['/protected-route'] };
