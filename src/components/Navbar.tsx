import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <div className="flex container max-w-7xl h-full mx-auto items-center justify-between gap-2">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="hidden text-zinc-700 text-lg font-bold md:block">
            ConvoBlend
          </p>
        </Link>
        <div className="justify-between items-center flex">
          <div className="mr-2 sm:flex hidden justify-center">
            <input
              type="text"
              className="w-52 py-2 px-3 outline-none rounded-l-2xl"
              placeholder="Search Blend..."
            />
            <Search className="bg-white h-full py-2 w-full pr-3 pl-1 rounded-r-2xl text-orange-500 hover:bg-gray-100 cursor-pointer" />
          </div>
          <Link href={"/sign-in"} className="btn-orange">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
