import "./globals.css";
import Navbar from "./navbar";
import { nunito, lato } from "./fonts";
import Link from "next/link";
import Image from "next/image";
import { languages } from "../i18n-settings";
import { basePath } from "@/next.config.mjs";

export const metadata = {
  title: "EPYMT",
  description: "Enrichment Programme for Young Mathematics Talents",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params }) {
  const { lng } = await params;
  return (
    <html lang={lng}>
      <body className={`${nunito.variable} ${lato.variable} font-nunito min-h-screen w-full flex justify-center leading-8`}>
        <div className="flex flex-col w-full items-center">
          <Navbar lang={lng} />
          <main className=" md:bg-[url(/epymt/background.png)] md:dark:bg-[url(/epymt/background_dark.png)] bg-center bg-contain bg-no-repeat  mt-16 w-full h-full dark:bg-gray-700 flex items-center flex-col">
            <div className="sm:p-10 p-6 md:w-[48rem] lg:w-[64rem] bg-white/90 dark:bg-gray-700/90 shadow-white dark:shadow-gray-700 shadow-2xl h-full text-lg/8">
              {children}
            </div>
          </main>
          <footer className="w-full bg-gray-100 dark:bg-gray-600 p-8 text-left flex justify-center">
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
                    src={basePath+"/culogo.gif"}
                    alt="CUHK Logo"
                    width={75}
                    height={50}
                  />
                </a>
                <a href="http://www.ims.cuhk.edu.hk/">
                  <Image
                    src={basePath+"/imslogo.gif"}
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
