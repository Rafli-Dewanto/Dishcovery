"use client";

import Lottie from "lottie-react";
import pan from "@/assets/pan_animation.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container relative flex min-h-screen gap-x-8 pb-32 pt-6">
      <div className="absolute right-20 top-20 -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-core-primary-500 blur-[10rem]"></div>
      <div className="absolute left-[30rem] top-20 -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-core-primary-100 blur-[10rem]"></div>
      <section className="mx-auto flex w-1/2 flex-col items-start justify-center">
        <h1
          className="
        bg-gradient-to-r 
        from-core-text-400 to-core-accent-400 
        bg-clip-text py-2 
        text-start text-5xl 
        font-bold text-transparent
        "
        >
          Dishcovery - Where every bite tells a story!
        </h1>
        <h3 className="text-lg font-normal text-slate-600">
          share your culinary secrets, and explore a world of flavors with
          Dishcovery. The simplest way to create and share your favorite
          recipes.
        </h3>
        <Link href={"/recipes"}>
          <Button
            className="
            mt-16 bg-core-accent-400 
            transition-all 
            hover:bg-core-accent-500
            "
          >
            Dishcover Recipes 🍽️
          </Button>
        </Link>
      </section>
      <div className="mx-auto scale-x-[-1]">
        <Lottie animationData={pan} />
      </div>
    </main>
  );
}
