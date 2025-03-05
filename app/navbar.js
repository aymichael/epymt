"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ pages }) {
    const currentPath = '/' + usePathname().split("/")[1];
    const pagaPath = ['/', ...pages.map((page) => `/${page.toLowerCase().replace(" ", "-")}`)];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex select-none border bo w-full bg-white flex-col md:fixed">
            <div className="p-4 flex flex-row justify-between items-center w-full">
                {/* Icon box */}
                <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="/epymt/epymt.png"
                            alt="CUHK Logo"
                            width={100}
                            height={100}
                        />
                    <span className="font-bold md:text-lg text-sm text-left font-cactus md:block hidden">Enrichment Programme for Young Mathematics Talents</span>
                </div>
                <button
                    className="md:hidden ml-8"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
                <nav className="px-4 py-1 flex-row xl:flex-nowrap justify-end flex-wrap md:gap-4 gap-2 items-center md:flex hidden text-nowrap">
                    {["Home", ...pages].map((page, index) => (
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
            <nav className={`flex md:hidden flex-col items-start transition-all duration-500 ease-in-out ${isOpen ? "px-4 pb-4" : ""}`}>
                {isOpen && ["Home", ...pages].map((page, index) => (
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
