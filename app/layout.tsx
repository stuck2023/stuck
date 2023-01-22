import Image from "next/image";
import "./globals.css";
import orangeBg from "public/orange-bg.png";
import star from "public/star.png";
import Navbar from "./Navbar";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="overflow-hidden h-screen">
      <Head />
      <Image
        src={orangeBg}
        alt="background-image"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 w-full h-full"
      />
      <Image
        src={star}
        alt="background-image"
        className="absolute -bottom-1/3 -z-50 w-[40%] right-0"
      />
      <Navbar />
      <main>{children}</main>
    </body>
  );
}
