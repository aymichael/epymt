"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar({ pages }) {
    const currentPath = '/' + usePathname().split("/")[1];
    const pagaPath = pages.map((page) => `/${page.toLowerCase().replace(" ", "-")}`);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex select-none w-full flex-col text-lg/8 md:shadow-md fixed md:items-center z-10">
            <div className={`md:w-[48rem] bg-white dark:bg-gray-700 lg:w-[64rem] md:shadow-none ${isOpen ? "" : "shadow-md"} md:h-20 h-16 py-1 flex flex-row justify-between items-center w-full z-10 gap-4 md:px-0 px-2`}>
                <div>
                    <Link href="/">
                        <Image
                            src="/epymt/epymt.png"
                            alt="CUHK Logo"
                            width={350}
                            height={75}
                            className="md:block dark:hidden hidden"
                        />
                        <Image
                            src="/epymt/epymt_dark.png"
                            alt="CUHK Logo"
                            width={350}
                            height={75}
                            className="md:dark:block hidden"
                        />
                        <Image
                            src="/epymt/epymt_logo.png"
                            alt="CUHK Logo"
                            width={120}
                            height={50}
                            className="md:hidden block"
                        />
                    </Link>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-2 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={clsx("w-full border border-black dark:border-white transition-all duration-300 ease-in-out", 
                        isOpen ? "transform rotate-45" : "-translate-y-2")}></div>
                    <div className={clsx("w-full border border-black dark:border-white transition-all duration-300 ease-in-out",
                        isOpen ? "hidden" : "")}></div>
                    <div className={clsx("w-full border border-black dark:border-white transition-all duration-300 ease-in-out",
                        isOpen ? "transform -rotate-45" : "translate-y-2")}></div>
                </button>
                <nav className="py-1 flex-row md:gap-4 gap-2 items-center md:flex hidden text-nowrap">
                    {pages.map((page, index) => (
                        currentPath === pagaPath[index] ?
                            <span key={index} className="font-bold text-center underline">{page}</span> :
                            <Link
                                key={index}
                                href={pagaPath[index]}
                                className="text-center transition-all duration-200 ease-in-out hover:translate-y-[-3px]"
                            >
                                {page}
                            </Link>
                    ))}
                </nav>
            </div>
            <nav className={`flex md:hidden bg-white/95 flex-col items-start transition-all duration-500 ease-in-out px-4 z-0 ${isOpen ? "shadow-md scale-y-100" : " scale-y-0"} py-2 origin-top`}>
                {isOpen && pages.map((page, index) => (
                    currentPath === pagaPath[index] ?
                        <span key={index} className="font-bold py-2 w-full bg-blue-100/95 rounded-md px-2 dark:bg-blue-700/95">{page}</span> :
                        <Link
                            key={index}
                            href={pagaPath[index]}
                            className="py-2 w-full px-2"
                        >
                            {page}
                        </Link>
                ))}
            </nav>
        </header>
    );

};
