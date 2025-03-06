"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FAQLayout({children}) {
    const currPage = usePathname().split("/")[2];
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <span className="font-bold text-lg">Frequently Asked Questions (FAQ)</span>
            <div className="flex justify-evenly items-center flex-wrap gap-4">
                {currPage === "student" ? <span className="text-black select-none text-lg font-bold">I am a student...</span> : <Link href="/faq/student" className="text-indigo-500 dark:text-indigo-300 underline">I am a student...</Link>}
                {currPage === "teacher" ? <span className="text-black select-none text-lg font-bold">I am a teacher...</span> : <Link href="/faq/teacher" className="text-indigo-500 dark:text-indigo-300 underline">I am a teacher...</Link>}
                {currPage === "parent" ? <span className="text-black select-none text-lg font-bold">I am a parent...</span> : <Link href="/faq/parent" className="text-indigo-500 dark:text-indigo-300 underline">I am a parent...</Link>}
            </div>
            {children}
            </div>
    );
}