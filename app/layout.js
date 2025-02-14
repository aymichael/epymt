import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EPYMT",
  description: "Enrichment Programme for Young Mathematics Talents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-[#eddbc9] justify-items-center">
        <div className="md:w-[48rem] flex flex-col w-full h-full">
          <header className="bg-[#770000] px-4 py-1 flex md:justify-between justify-center items-center">
            <Image
              src="/culogo.gif"
              alt="CUHK Logo"
              width={75}
              height={50}
              className="hidden md:block"
            />
            <div className="flex flex-col items-center">
              <div className="text-[#ccaa00] font-serif text-center text-base">
                The Chinese University of Hong Kong
                <br />
                Department of Mathematics & The Institute of Mathematical Sciences
              </div>
              <div className="text-[#ffaa77] font-serif text-center font-bold text-xl">
                Enrichment Programme for Young Mathematics Talents
                <br />
                <div className="font-[標楷體]">
                數學英才精進課程
                  </div>
              </div>
            </div>
            <Image
              src="/imslogo.gif"
              alt="IMS Logo"
              width={50}
              height={50}
              className="hidden md:block"
            />
          </header>
          <nav className="bg-[#440000] px-4 py-1 flex md:justify-between justify-center items-center">
            <Link href="/">
            <p>Home</p>
            </Link>
          </nav>
          <main className="bg-[#fdebd9] grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
