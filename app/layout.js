import "./globals.css";
import Navbar from "@/app/navbar";
import { cactus, noto } from "./fonts";

export const metadata = {
  title: "EPYMT",
  description: "Enrichment Programme for Young Mathematics Talents",
};

const pages = ["Introduction", "Advisors", "Courses", "Application", "Guest Lectures", "Alumni Sharing", "Contact Us", "FAQ"];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cactus.variable} ${noto.variable} font-noto min-h-screen w-full flex justify-center`}>
        <div className="flex flex-col w-full items-center">
            <Navbar pages={pages} />
          <main className="md:w-[48rem] lg:w-[64rem] shadow-md h-full">
            <div className="sm:p-6 p-4 lg:mt-24 md:mt-32">
            {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
