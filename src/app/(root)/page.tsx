"use client";

import Lottie from "lottie-react";
import pan from "@/assets/pan_animation.json";
import personalize from "@/assets/personalize.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
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

      <section className="relative flex min-h-screen flex-col gap-x-8 px-4 pb-32 pt-6">
        {/* Section 2: Featured Recipes */}
        <section className="container mb-10 flex flex-col items-center justify-center px-[4.675rem]">
          <h1
            className="
              mb-10 
              bg-gradient-to-r from-core-text-400 
            to-core-accent-400 bg-clip-text 
              py-2 
              text-5xl font-bold
              text-transparent
            "
          >
            Featured Recipes
          </h1>
          <section className="container flex justify-between gap-28 px-[4.675rem]">
            <Image
              quality={10}
              width={396}
              height={396}
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="salad"
              className="rounded-xl"
            />
            <div className="container flex flex-col">
              <h2 className="mb-8 text-3xl font-bold text-core-text-400">
                Savor the Freshness: Exploring the World of Exquisite Salads
              </h2>
              <p>
                In the realm of culinary delights, few dishes match the
                refreshing and healthful appeal of a well-crafted salad.
                Bursting with vibrant colors, diverse textures, and a symphony
                of flavors, the best salads are a celebration of fresh,
                wholesome ingredients. Join us on a journey through the enticing
                world of salads, where each bite is a revelation in taste and a
                nourishing experience for the body.
              </p>
              <Button
                className="
            mt-20 bg-core-accent-400 
            pb-8 
            pt-8
            text-xl
            font-bold
            transition-all
            hover:bg-core-accent-500
            "
              >
                See the Recipe
              </Button>
            </div>
          </section>
          {/* Add your featured recipe cards here */}
        </section>

        {/* Section 3: How It Works */}
        <section className="container mb-36 mt-16 flex flex-col items-center justify-center px-[4.675rem]">
          <h1
            className="        
            mb-10 
          bg-gradient-to-r from-core-text-400 
            to-core-accent-400 bg-clip-text 
            py-2 
            text-5xl font-bold
            text-transparent
            "
          >
            How It Works
          </h1>
          <section className="item-center flex flex-row justify-center">
            <section className="flex flex-col items-center gap-20 px-5">
              <h2 className="text-xl font-bold text-core-text-400">
                Explore the Culinary Wonderland
              </h2>
              <div className="scale-150">
                <Lottie animationData={personalize} />
              </div>
            </section>
            <section className="flex flex-col items-center gap-20 px-5">
              <h2 className="text-xl font-bold text-core-text-400">
                Personalize Your Experience
              </h2>
              <div className="scale-150">
                <Lottie animationData={personalize} />
              </div>
            </section>
            <section className="flex flex-col items-center gap-20 px-5">
              <h2 className="text-xl font-bold text-core-text-400">
                Follow Easy Step-by-Step Guides
              </h2>
              <div className="scale-150">
                <Lottie animationData={personalize} />
              </div>
            </section>
            <section className="flex flex-col items-center gap-20 px-5">
              <h2 className="text-xl font-bold text-core-text-400">
                Connect With Other Foodies
              </h2>
              <div className="scale-150">
                <Lottie animationData={personalize} />
              </div>
            </section>
          </section>
        </section>

        {/* Section 4: Join Our Community */}
        <section className="container mt-16 flex flex-col items-center justify-center px-[4.675rem]">
          <h2 className="mb-8 text-3xl font-bold text-core-text-400">
            Become a Culinary Explorer with Us!
          </h2>
          <p className="text-center">
            Embark on a flavorful journey by joining our vibrant community of
            food enthusiasts. Share your passion for cooking, discover
            mouthwatering recipes, and connect with fellow culinary explorers.
            Together, let's savor the joy of creating and sharing delicious
            moments. Join us in the kitchen, where every recipe tells a story
            and every meal becomes a masterpiece. Let's cook up memories
            together!
          </p>
          <Button
            className="
            mt-20 bg-core-accent-400 
            pb-8 
            pt-8
            text-xl
            font-bold
            transition-all
            hover:bg-core-accent-500
            "
          >
            Join Our Community
          </Button>
        </section>
      </section>
    </>
  );
}
