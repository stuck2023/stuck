"use client";

import Link from "next/link";
import { FC, useEffect } from "react";
import { useStore } from "zustand";
import supabase from "../public/config/supabase";

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
    <div className="flex items-center gap-32 flex-1 justify-between">
      <div className="flex items-center gap-16">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`/${link.url}`}
            className="focus:outline-0 group relative"
          >
            <span className="text-xl text-black group-hover:text-[#fb3706cd] transition-colors duration-200">
              {link.name}
            </span>
            <span className="w-1/3 mt-2 h-[.2rem] absolute -bottom-2 bg-[#fb370687] hidden group-hover:block transition duration-1000 ease-in-out"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-[#f4f4f5] w-fit rounded-full p-2 px-6 shadow-sm hover:bg-[#fb3706cd] group transition-all duration-500">
          {/* {!user && <Link href="login">Login</Link>}
        {user && <Link href="login">Something</Link>} */}
          <Link href="signup">
            <span className="text-black font-medium text-lg group-hover:text-white">
              SignUp
            </span>
          </Link>
        </div>
        <div className="bg-custom-orange w-fit rounded-full p-2 px-6 shadow-sm group hover:bg-white transition-all duration-500">
          {/* {!user && <Link href="login">Login</Link>}
        {user && <Link href="login">Something</Link>} */}
          <Link href="login">
            <span className="text-white font-medium text-lg group-hover:text-[#fb3706cd]">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavLinks;
