'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import sushi from '@/assets/sushi-lottie.json';

export default function SignIn() {
  const session = useSession();
  const searchParams = useSearchParams();

  if (session.status === 'authenticated') {
    const callback = searchParams.get('callbackUrl') ?? '/';
    redirect(callback);
  }

  return (
    <>
      <Card className="-mt-[20rem] w-[90%] max-w-[30rem] py-6 sm:px-10">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle className="text-lg">
            Log in or sign up in seconds
          </CardTitle>
          <CardDescription>
            Use your email to continue with Dishcovery
          </CardDescription>
        </CardHeader>
        <CardContent className="flex w-full items-center justify-center">
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
        </CardContent>
      </Card>
      <Lottie
        animationData={sushi}
        className="absolute bottom-20 right-2 h-[20rem] w-[20rem]"
      />
    </>
  );
}

function GoogleIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FFC107"
      />
      <path
        d="M3.153 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.159 2 4.828 4.1685 3.153 7.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.399 18 7.1905 16.3415 6.3585 14.027L3.0975 16.5395C4.7525 19.778 8.1135 22 12 22Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#1976D2"
      />
    </svg>
  );
}
