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
import sushi from '@/assets/lottie/sushi-lottie.json';
import GoogleIcon from '@/components/icons/google';

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
