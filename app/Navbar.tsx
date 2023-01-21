"use client";

import { FC } from "react";
import NavLinks from "./NavLinks";
import Logo from "./signup/Logo";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="w-full flex items-center py-10 px-72 gap-40">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
