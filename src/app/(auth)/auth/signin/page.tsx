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
import Lottie from 'lottie-react';
import sushi from '@/assets/lottie/sushi-lottie.json';
import GoogleIcon from '@/components/icons/google';
import GoogleButton from '@/components/auth/google.button';
import { getUser } from '@/app/api/auth/[...nextauth]/route';

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
          <GoogleButton />
        </CardContent>
      </Card>
    </>
  );
}
