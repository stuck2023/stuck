"use client";

import { FC } from "react";
import MenuIcon from "./MenuIcon";
import NavLinks from "./NavLinks";
import Logo from "./signup/Logo";
import { HiMenuAlt3 } from "react-icons/hi";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="w-full flex items-center justify-between py-10 lg:px-28 px-12 2xl:px-52 2xl:gap-32 gap-20">
      <Logo />
      <NavLinks />
      <HiMenuAlt3 className="cursor-pointer text-3xl xl:hidden" />
    </div>
  );
};

export default Navbar;
