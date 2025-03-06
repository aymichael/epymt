import "./globals.css";
import Navbar from "@/app/navbar";
import { cactus, noto } from "./fonts";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "EPYMT",
  description: "Enrichment Programme for Young Mathematics Talents",
};

const pages = ["Introduction", "Courses", "Application", "Alumni Sharing", "FAQ"];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cactus.variable} ${noto.variable} font-noto min-h-screen w-full flex justify-center bg-blue-50`}>
        <div className="flex flex-col w-full items-center">
          <Navbar pages={pages} />
          <main className="md:w-[48rem] lg:w-[64rem] w-full  h-full bg-white">
            <div className="sm:p-6 p-4 lg:mt-24 md:mt-32">
              {children}
            </div>
          </main>
          <footer className="w-full bg-blue-100 text-left py-2 flex justify-center">
            <div className="flex w-full justify-between items-end md:w-[48rem] lg:w-[64rem] p-2">
              <span className="text-xs">
                ©&nbsp;EPYMT
                <br />
                The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
                <br />
                Phone: (852) 3943 1984 / 3943 5295
                <br />
                Fax: (852) 2603 5154
                <br />
                Email: <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-[#993300]">epymt@math.cuhk.edu.hk</Link>
              </span>
              <div className="flex gap-2">
                <Link href="https://www.math.cuhk.edu.hk">
                  <Image
                    src="/epymt/culogo.gif"
                    alt="CUHK Logo"
                    width={75}
                    height={50}
                  />
                </Link>
                <Link href="http://www.ims.cuhk.edu.hk/">
                  <Image
                    src="/epymt/imslogo.gif"
                    alt="IMS Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
