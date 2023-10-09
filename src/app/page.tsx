"use client";

import Lottie from "lottie-react";
import pan from "@/assets/pan_animation.json";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-x-8 px-4 py-6">
      <section className="grid grid-cols-1 gap-x-8 gap-y-3">
        <h1 className="bg-gradient-to-r from-core-text-400 to-core-accent-400 bg-clip-text py-2 text-start text-5xl font-bold text-transparent">
          Dishcovery
        </h1>
        <h3 className="text-lg font-semibold">
          Where every bite tells a story!
        </h3>
        <Button className="mt-16 bg-core-accent-400 transition-all hover:bg-core-accent-500">
          Dishcover Recipes 🍽️
        </Button>
      </section>
      <div className="scale-x-[-1]">
        <Lottie animationData={pan} />
      </div>
    </main>
  );
}
