"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseLayout({children}) {
    const currPage = usePathname().split("/")[2];
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <div className="flex justify-evenly items-center flex-wrap gap-4">
                {!currPage ? <span className="text-black select-none text-lg font-bold">本年度課程</span> : <Link href="/courses" className="text-indigo-500 underline">本年度課程</Link>}
                {currPage === "introduction" ? <span className="text-black select-none text-lg font-bold">課程介紹</span> : <Link href="/courses/introduction" className="text-indigo-500 underline">課程介紹</Link>}
                {currPage === "past-courses" ? <span className="text-black select-none text-lg font-bold">往期課程</span> : <Link href="/courses/past-courses" className="text-indigo-500 underline">往期課程</Link>}
                {currPage === "student-awards" ? <span className="text-black select-none text-lg font-bold">學生獎項</span> : <Link href="/courses/student-awards" className="text-indigo-500 underline">學生獎項</Link>}
            </div>
            <hr className="border border-[#550000]" />
            {children}
            </div>
    );
}