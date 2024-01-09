"use client";

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const session = useSession();
  const searchParams = useSearchParams();

  if (session.status === "authenticated") {
    const callback = searchParams.get("callbackUrl") ?? "/";
    redirect(callback);
  }

  const handleSignIn = async () => {
    // Logic to handle email/phone and password sign-in
    try {
      await signIn('credentials', {
        emailOrPhone,
        password,
        callbackUrl: '/',
      });
    } catch (error) {
      // Handle sign-in error
      console.error('Sign-in error:', error);
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in to Your Account</h2>
        <div className="mb-4">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-black">
            Email or Phone
          </label>
          <input
            type="text"
            id="emailOrPhone"
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSignIn}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 mx-auto"
        >
          Sign In
        </button>
        <div className="mt-4 text-blue-400 hover:underline cursor-pointer" onClick={handleGoogleSignIn}>
          Sign In with Google
        </div>
      </div>
    </div>
  );
}
