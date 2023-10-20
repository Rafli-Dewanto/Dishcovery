"use client";

import Lottie from "lottie-react";
import pan from "@/assets/pan_animation.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex gap-x-8 pt-6 pb-32 container min-h-screen">
      <section className="w-1/2 mx-auto flex flex-col justify-center items-start">
        <h1 className="
        bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 
        bg-clip-text py-2 
        text-start text-5xl 
        font-bold text-transparent
        ">
          Dishcovery - Where every bite tells a story!
        </h1>
        <h3 className="text-lg font-normal text-slate-600">
          share your culinary secrets, and explore a world of flavors with Dishcovery. The simplest way to create and share your favorite recipes.
        </h3>
        <Link href={'/recipes'}>
          <Button
            className="
            mt-16 bg-core-accent-400 
            transition-all 
            hover:bg-core-accent-500
            ">
            Dishcover Recipes 🍽️
          </Button>
        </Link>
      </section>
      <div className="scale-x-[-1] mx-auto">
        <Lottie animationData={pan} />
      </div>
    </main>
  );
}
