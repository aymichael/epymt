import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar";

export const metadata = {
  title: "EPYMT",
  description: "Enrichment Programme for Young Mathematics Talents",
};

const pages = ["Introduction", "Advisors", "Courses", "Application", "Guest Lectures", "Alumni Sharing", "Contact Us", "FAQ"];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-[#eddbc9] justify-items-center">
        <div className="md:w-[48rem] flex flex-col h-full w-full">
          <header className="bg-[#770000] px-4 py-1 flex md:justify-between justify-center items-center select-none">
            <Link href="https://www.math.cuhk.edu.hk">
              <Image
                src="/epymt/culogo.gif"
                alt="CUHK Logo"
                width={75}
                height={50}
                className="hidden md:block"
              />
            </Link>
            <div className="flex flex-col items-center">
              <div className="text-[#ccaa00] font-serif text-center md:text-base sm:text-sm text-xs">
                The Chinese University of Hong Kong
                <br />
                Department of Mathematics & The Institute of Mathematical Sciences
              </div>
              <div className="text-[#ffaa77] font-serif text-center font-bold md:text-xl sm:text-lg text-base">
                Enrichment Programme for Young Mathematics Talents
                <br />
                <div className="font-[標楷體]">
                  數學英才精進課程
                </div>
              </div>
            </div>
            <Link href="http://www.ims.cuhk.edu.hk/">
              <Image
                src="/epymt/imslogo.gif"
                alt="IMS Logo"
                width={50}
                height={50}
                className="hidden md:block"
              />
            </Link>
          </header>
          <Navbar pages={pages} />
          <main className="bg-[#ffeed8] h-full sm:p-6 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
