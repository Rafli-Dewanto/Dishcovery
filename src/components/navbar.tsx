"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/assets/svg/dishcovery.svg";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./ui/user-button";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const ref = useRef(null);
  const [isActive, setIsactive] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  useOnClickOutside(ref, () => setIsactive(false));

  return (
    <header
      id="#home"
      className="
      sticky top-0 
      z-50 flex 
      justify-between bg-white 
      bg-opacity-70 px-4 
      py-6 backdrop-blur-2xl
      "
    >
      {/* logo */}
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={250} height={250} />
      </Link>
      {/* menu */}
      <nav>
        <ul className="flex items-center justify-center space-x-6 px-2">
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={"/recipes"}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              className="font-medium transition-all hover:text-core-accent-400"
              href={"/"}
            >
              About
            </Link>
          </li>
          {session && session.user ? (
            <li ref={ref} className="transition-all">
              <UserButton
                image={session.user.image as string}
                setIsActive={setIsactive}
                isActive={isActive}
                profilePic={session.user.image as string}
                username={session.user.name as string}
              />
            </li>
          ) : (
            <button
              className="
            rounded-xl bg-core-accent-400 
            px-3 py-2 font-medium
            capitalize text-white
            transition-all
            hover:scale-105
            active:scale-100
            "
              onClick={() => signIn()}
            >
              sign in
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}
