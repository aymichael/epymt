import "./globals.css";
import Navbar from "@/app/navbar";
import { nunito } from "./fonts";
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
      <body className={`${nunito.variable} font-nunito min-h-screen w-full flex justify-center leading-8`}>
        <div className="flex flex-col w-full items-center">
          <Navbar pages={pages} />
          <main className="md:w-[48rem] lg:w-[64rem] w-full h-full dark:bg-gray-700">
            <div className="sm:p-10 p-6 md:mt-20 mt-16">
              {children}
            </div>
          </main>
          <footer className="w-full bg-gray-100 dark:bg-gray-800 p-8  text-left flex justify-center">
            <div className="flex w-full justify-between items-center md:w-[48rem] lg:w-[64rem]">
              <span className="text-xs">
                ©&nbsp;EPYMT
                <br />
                EPYMT, Department of Mathematics, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
                <br />
                Phone: (852) 3943 1984 / 3943 5295
                <br />
                Fax: (852) 2603 5154
                <br />
                Email: <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</Link>
              </span>
              <div className="flex gap-2 md:flex-row flex-col items-center">
                <a href="https://www.math.cuhk.edu.hk" >
                  <Image
                    src="/epymt/culogo.gif"
                    alt="CUHK Logo"
                    width={75}
                    height={50}
                  />
                </a>
                <a href="http://www.ims.cuhk.edu.hk/">
                  <Image
                    src="/epymt/imslogo.gif"
                    alt="IMS Logo"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
