"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
  const session = useSession();
  const searchParams = useSearchParams();

  if (session.status === "authenticated") {
    const callback = searchParams.get("callbackUrl") ?? "/";
    redirect(callback);
  }

  return (
    <>
      <button onClick={() => signIn("google")}>Sign in with google</button>
    </>
  );
}
