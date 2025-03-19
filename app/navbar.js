"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const pages = ["Introduction", "Courses", "Application", "Alumni Sharing", "FAQ"];
    const subpages = [["About", "Advisors", "Courses Introduction"], ["Current Courses", "Past Courses", "Guest Lectures", "Student Awards"]];
    const subpageURL = [["introduction", "advisors","course-introduction"],["courses","past-courses","guest-lectures", "student-awards"]];
    const currentPath = '/' + usePathname().split("/")[1];
    const pagaPath = pages.map((page) => `/${page.toLowerCase().replace(" ", "-")}`);
    const [isOpen, setIsOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState(-1);

    return (
        <header className="flex select-none w-full flex-col text-lg/8 md:shadow-md fixed md:items-center" >
            <div className={` dark:bg-gray-700 md:shadow-none ${isOpen ? "" : "shadow-md"} flex flex-col w-full md:px-0 px-2 items-center`}>
                <div className="bg-white md:w-[48rem] lg:w-[64rem] flex flex-row items-center w-full justify-between h-16">
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
                <nav className="flex-row items-center md:flex hidden text-nowrap h-full">
                    {pages.map((page, index) => (
                        <Link
                            key={index}
                            href={pagaPath[index]}
                            className={`h-full flex items-center group px-2 ${currentNav === index ? "bg-blue-300" : ""}`}
                            onMouseEnter={() => setCurrentNav(index)}
                        >
                            <span className="group-hover:translate-y-[-3px] transition-all duration-200 ease-in-out">{page}</span>
                        </Link>
                    ))}
                </nav>
                </div>
                {currentNav === -1 || currentNav > 1 ? null : <div className={`bg-blue-300 w-full shadow-md h-16 flex justify-center`} onMouseLeave={() => setCurrentNav(-1)}>
                    <nav className="flex flex-row md:w-[48rem] lg:w-[64rem] items-center">
                        {subpages[currentNav].map((subpage, index) => (
                            <Link
                                key={index}
                                href={`/${subpageURL[currentNav][index]}`}
                                className="h-full flex items-center group px-2"
                            >
                                <span className="group-hover:translate-y-[-3px] transition-all duration-200 ease-in-out">{subpage}</span>
                            </Link>
                        ))}
                    </nav>
                </div>}
            </div>
            <div className={`w-full md:hidden h-screen ${isOpen ? " bg-black/40" : ""}`}>
                <nav className={`flex bg-white/95 flex-col items-start transition-all duration-500 ease-in-out px-4 ${isOpen ? "shadow-md scale-y-100" : " scale-y-0"} py-2 origin-top`}>
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
            </div>
            <div className={`w-full h-screen ${currentNav === -1 || currentNav > 1 ? "hidden" : ""} bg-black/40`}></div>
        </header>
    );

};
