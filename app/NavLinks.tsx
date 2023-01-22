"use client";

import Link from "next/link";
import { FC, useEffect } from "react";
import { useStore } from "zustand";
import supabase from "../config/supabase";

interface NavLinksProps {}

const links = [
  {
    name: "About",
    url: "about",
    id: 1,
  },
  {
    name: "Services",
    url: "services",
    id: 2,
  },
  {
    name: "Contact",
    url: "contact",
    id: 3,
  },
  {
    name: "Our Community",
    url: "community",
    id: 4,
  },
];

const NavLinks: FC<NavLinksProps> = ({}) => {
  return (
    <div className="items-center 2xl:gap-12 lg:gap-20 gap-12 justify-between w-fit hidden xl:flex flex-1">
      <div className="flex items-center 2xl:gap-16 lg:gap-12 gap-2 flex-1">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`/${link.url}`}
            className="focus:outline-0 group relative"
          >
            <span className="xl:text-xl md:text-lg text-sm w-fit text-black group-hover:text-[#fb3706cd] transition-colors duration-200">
              {link.name}
            </span>
            <span className="w-1/3 mt-2 h-[.2rem] absolute -bottom-2 bg-[#fb370687] hidden group-hover:block transition duration-1000 ease-in-out"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center 2xl:gap-6 gap-4">
        <div className="bg-[#f4f4f5] w-fit rounded-full p-2 2xl:px-6 px-4 shadow-sm hover:bg-[#fb3706cd] group transition-all duration-500">
          <Link href="signup">
            <span className="text-black font-medium xl:text-lg text-sm group-hover:text-white">
              SignUp
            </span>
          </Link>
        </div>
        <div className="bg-custom-orange w-fit rounded-full p-2 2xl:px-6 px-4 shadow-sm group hover:bg-white transition-all duration-500">
          <Link href="login">
            <span className="text-white font-medium xl:text-lg text-sm group-hover:text-[#fb3706cd]">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavLinks;
