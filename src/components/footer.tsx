import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mx-auto grid min-h-max w-full content-center justify-between bg-[#ff7c2b] px-8 py-6 text-white lg:grid-cols-3">
      <div>
        <h1 className="mx-3px my-3px w-full font-mono text-4xl font-bold text-white">
          <Link href={"/"}>Dishcovery</Link>
        </h1>
        <p className="mt-2 py-4 font-sans text-lg text-white">
          "We help you find recipes for cook delicious meals or you can share
          your recipe secrets with others"
        </p>
      </div>
      <div className="mt-6 flex items-center justify-around lg:col-span-2">
        <div>
          <h6 className="py-3 font-semibold text-slate-100">
            Recipes Category
          </h6>
          <ul>
            <li className="pb-2 font-medium transition-all">
              <Link href={"/"}>Appetizer</Link>
            </li>
            <li className="pb-2 font-medium transition-all">
              <Link href={"/"}>Main Course</Link>
            </li>
            <li className="pb-2 font-medium transition-all">
              <Link href={"/"}>Dessert</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="py-3 font-semibold text-slate-100">Help</h6>
          <ul className="grid-rows-3">
            <li className="pb-2 font-medium transition-all">
              <Link href={"/"}>About us</Link>
            </li>
            <li className="pb-2 font-medium transition-all">
              <Link href={"/"}>Contact</Link>
            </li>
            <li className="pb-2 font-medium transition-all">
              <Link href={"privacypolicypage"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-3 flex justify-between md:w-[55%]">
        <p>Follow us :</p>
        <FaFacebookSquare size={30} />
        <FaInstagramSquare size={30} />
        <FaTwitterSquare size={30} />
        <FaYoutubeSquare size={30} />
      </div>
      <div className="mx-3px mb-0 mt-8 text-center font-light text-slate-300">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
}
