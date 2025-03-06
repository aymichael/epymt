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
        <header className="flex select-none shadow-md w-full flex-col fixed md:items-center z-10 md:bg-blue-200 md:dark:bg-blue-800">
            <div className="md:w-[48rem] lg:w-[64rem] md:h-20 h-16 py-1 flex flex-row justify-between items-center w-full bg-blue-200 dark:bg-blue-800">
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
                <nav className="px-4 py-1 flex-row md:gap-4 gap-2 items-center md:flex hidden text-nowrap">
                    {pages.map((page, index) => (
                        currentPath === pagaPath[index] ?
                            <span key={index} className="font-bold text-center text-md underline select-none">{page}</span> :
                            <Link
                                key={index}
                                href={pagaPath[index]}
                                className="text-center text-md transition-all duration-200 ease-in-out hover:translate-y-[-3px]"
                            >
                                {page}
                            </Link>
                    ))}
                </nav>
            </div>
            <nav className={`flex md:hidden bg-blue-200/95 dark:bg-blue-800/95 flex-col items-start transition-all duration-500 ease-in-out ${isOpen ? "px-4 pb-4" : ""}`}>
                {isOpen && pages.map((page, index) => (
                    currentPath === pagaPath[index] ?
                        <span key={index} className="font-bold text-center text-lg underline select-none py-1">{page}</span> :
                        <Link
                            key={index}
                            href={pagaPath[index]}
                            className="text-center text-md hover:underline py-1"
                        >
                            {page}
                        </Link>
                ))}
            </nav>
        </header>
    );

};
