import Image from "next/image";
import "./globals.css";
import orangeBg from "public/orange-bg.png";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Image
          src={orangeBg}
          alt="background-image"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50"
        />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
