"use client";

import { redirect } from "next/navigation";
import InstructionsEditor from "@/components/wysiwyg/instructions-editor";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ProtectedPage() {
  const session = useSession();
  const [instructions, setInstructions] = useState("");

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected"); // redirect to this page after sign in
  }

  return (
    <>
      <section>hello {session?.data?.user?.name}</section>
      <InstructionsEditor
        instructions={instructions}
        setInstructions={setInstructions}
      />

      <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
    </>
  );
}
