import { options } from "@/app/api/auth/[...nextauth]/options";
import RecipeCard from "@/components/ui/recipe-card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/recipes");
  }

  return (
    <main
      className="
    container grid 
    min-h-screen grid-cols-1 
    gap-x-4
    gap-y-4 py-8 
    sm:grid-cols-3 
    md:grid-cols-2 
    lg:grid-cols-4
    "
    >
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
    </main>
  );
}
