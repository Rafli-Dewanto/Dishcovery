"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/assets/svg/dishcovery.svg";
import { signIn, useSession } from "next-auth/react";
import UserButton from "./ui/user-button";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";

const styles = {
  navLinks: "ml-10 border-b border-white hover:border-core-accent-400",
};

export default function Navbar() {
  const { data: session } = useSession();
  const ref = useRef(null);
  const [isActive, setIsactive] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  useOnClickOutside(ref, () => setIsactive(false));
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      id="#home"
      className="
      sticky top-0 
      z-50 flex 
      justify-between border-b 
      bg-white bg-opacity-70 
      px-4 py-6
      backdrop-blur-2xl
      "
    >
      {/* menu */}
      <nav className="shadow-l h-10 w-full">
        <div className="flex h-full w-full items-center justify-between px-4">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={250} height={250} />
          </Link>
          <div className="hidden text-black sm:flex">
            <ul className="hidden items-center justify-center space-x-8 px-2 sm:flex">
              <li className={styles.navLinks}>
                <Link
                  className="font-light transition-all hover:text-core-accent-400"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  className="font-light transition-all hover:text-core-accent-400"
                  href={"/recipes"}
                >
                  Explore
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  className="font-light transition-all hover:text-core-accent-400"
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
              px-4 py-2
              font-semibold capitalize
              text-white
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
          </div>
          {/*Mobile Menu*/}
          <div className="cursor-pointer pl-24 sm:hidden">
            <BsList
              onClick={toggleMenu}
              className="h-8 w-8 text-core-accent-400"
            />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-8 duration-500 ease-in-out sm:hidden"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in-out"
          }
        >
          <div className="flex w-full items-center justify-between border-b-2 border-zinc-300">
            <Link href={"/"}>
              <Image
                className="h-16 w-48 object-left-top"
                src={logo}
                alt="logo"
                width={250}
                height={250}
              />
            </Link>

            <div onClick={toggleMenu} className="cursor-pointer">
              <BsX className="h-6 w-6 text-core-accent-400" />
            </div>
          </div>

          {/*Mobile Menu Links*/}
          <div className="flex-col py-2">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#eb4747]"
              >
                <Link href="/home">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#eb4747]"
              >
                <Link href="/explore">Explore</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 pb-12 hover:underline hover:decoration-[#eb4747]"
              >
                <Link href="/about">About</Link>
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
                  cursor-pointer
                  rounded-xl bg-core-accent-400 
                  px-5 py-2 font-medium
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
          </div>
        </div>
      </nav>
    </header>
  );
}
