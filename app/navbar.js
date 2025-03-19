"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const pages = ["About", "Courses", "Students Highlights", "Support"];
    const pagesCH = ["關於", "課程", "學生亮點", "支援"];
    const subpages = [["Introduction", "Advisors"], ["This Year's Courses", "Past Courses", "Course Infomation", "Guest Lectures"], ["Student Awards", "Alumni Sharing"], ["Application", "FAQ", "Contact Us"]];
    const subpageCH = [["簡介", "導師"], ["本年度課程", "過往課程", "課程資訊", "客席講座"], ["學生獎項", "校友分享"], ["申請", "常見問題", "聯絡我們"]];
    const subpageURL = [["introduction", "advisors"], ["courses", "past-courses", "course-information", "guest-lectures"], ["student-awards", "alumni-sharing"], ["application", "faq", "contact-us"]];
    const [isOpen, setIsOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState(-1);
    const [selectedNav, setSelectedNav] = useState(-1);

    return (
        <header className="flex select-none w-full flex-col text-lg/8 md:shadow-md fixed md:items-center" >
            <div className={` md:shadow-none ${isOpen ? "" : "shadow-md"} flex flex-col w-full md:px-0 px-2 items-center`} onMouseLeave={() => setCurrentNav(-1)}>
                <div className="bg-white dark:bg-gray-700 md:w-[48rem] lg:w-[64rem] flex flex-row items-center w-full justify-between h-16">
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
                    <nav className="flex-row items-center md:flex hidden text-nowrap h-full gap-2">
                        {pages.map((page, index) => (
                            <div
                                key={index}
                                className={`h-full flex items-center px-2 ${currentNav === index ? "bg-blue-100 dark:bg-sky-800" : ""}`}
                            >
                                <span className="hover:translate-y-[-3px] transition-all duration-200 ease-in-out"
                                    onMouseEnter={() => setCurrentNav(index)}>{page}</span>
                            </div>
                        ))}
                    </nav>
                </div>
                {currentNav >= 0 ? <div className={`dark:bg-sky-800 bg-blue-100 w-full shadow-md h-16 md:flex hidden justify-center`}>
                    <nav className="flex flex-row md:w-[48rem] lg:w-[64rem] items-center py-2 justify-end gap-2">
                        {subpages[currentNav].map((subpage, index) => (
                            <Link
                                key={index}
                                href={`/${subpageURL[currentNav][index]}`}
                                className="h-full flex items-center px-2"
                            >
                                <span className="hover:translate-y-[-3px] transition-all duration-200 ease-in-out">{subpage}</span>
                            </Link>
                        ))}
                    </nav>
                </div> : null}
            </div>
            <div className={`w-full md:hidden h-screen ${isOpen ? "bg-black/40" : ""}`}>
                <nav className={`flex bg-white/95 dark:bg-gray-700/95 flex-col items-start transition-all duration-500 ease-in-out ${isOpen ? "shadow-md scale-y-100" : "scale-y-0"} pt-2 origin-top`}>
                    {isOpen && pages.map((page, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col last:border-none border-b border-gray-300 cursor-pointer"

                        >
                            <div className="flex mx-4 my-2 flex-row justify-between items-center" onClick={() => setSelectedNav(index === selectedNav ? -1 : index)}>
                                {page}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className={`transition-all duration-300 ease-in-out  dark:fill-white ${selectedNav === index ? "rotate-180" : ""}`}
                                ><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                            </div>
                            <div className={`flex flex-col transition-all ease-in-out duration-300 origin-top gap-2 bg-blue-100 dark:bg-sky-800`}>
                                {selectedNav === index ? subpages[index].map((subpage, subindex) => (
                                    <Link
                                        key={subindex}
                                        href={`/${subpageURL[index][subindex]}`}
                                        className="w-full p-2 px-8 flex flex-row justify-between items-center last:border-none border-b border-gray-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {subpage}
                                    </Link>
                                )) : null}
                            </div>
                        </div>

                    ))}
                </nav>
                <div className="w-full h-full" onClick={() => setIsOpen(false)}></div>
            </div>
            <div className={`w-full h-screen ${currentNav === -1 ? "hidden" : ""} bg-black/40`}></div>
        </header>
    );

};
