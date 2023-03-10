import Image from "next/image";
import { FC } from "react";
import logo from "public/stucklogo.png";
import Link from "next/link";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className="focus:outline-0">
      <div className="flex items-center gap-2 w-fit">
        <Image src={logo} alt="logo" />
        <p className="text-3xl text-black font-semibold tracking-tight">
          Stuck!
        </p>
      </div>
    </Link>
  );
};

export default Logo;
