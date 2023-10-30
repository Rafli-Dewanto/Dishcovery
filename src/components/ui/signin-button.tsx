'use client';

import { signIn } from 'next-auth/react';
import { Button } from './button';

const SignInButton = () => {
  return (
    <Button
      className="
            border border-pueblo-500
            bg-pueblo-50 px-3 py-2
            text-base
            font-medium
            capitalize
            text-pueblo-600
            transition-all
            hover:scale-105
            hover:bg-pueblo-50
            hover:text-pueblo-500
            active:scale-100
            active:text-pueblo-600
            "
      onClick={() => signIn()}
    >
      sign in
    </Button>
  );
};

export default SignInButton;
