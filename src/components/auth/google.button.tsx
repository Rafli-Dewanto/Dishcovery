'use client';

import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import GoogleIcon from '../icons/google';

const GoogleButton = () => {
  return (
    <Button
      onClick={() => signIn('google')}
      className="
            gap-x-2 border
            border-pueblo-400 bg-white
            px-10
            py-8
            text-gray-950
            hover:bg-pueblo-50
            sm:py-6"
    >
      <span>
        <GoogleIcon />
      </span>
      Continue With Google
    </Button>
  );
};

export default GoogleButton;
