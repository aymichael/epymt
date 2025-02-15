"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseLayout({children}) {
    const currPage = usePathname().split("/")[3];
    return (
        <div className="flex justify-center w-full flex-col font-serif gap-2">
            <div className="flex justify-evenly items-center flex-wrap gap-4">
                {currPage === "tma" ? <span className="text-black select-none text-lg font-bold">近世代數初探</span> : <Link href="/courses/introduction/tma" className="text-[#993300] underline">近世代數初探</Link>}
                {currPage === "cnag" ? <span className="text-black select-none text-lg font-bold">複數與解析幾何</span> : <Link href="/courses/introduction/cnag" className="text-[#993300] underline">複數與解析幾何</Link>}
                {currPage === "idm" ? <span className="text-black select-none text-lg font-bold">離散數學導論</span> : <Link href="/courses/introduction/idm" className="text-[#993300] underline">離散數學導論</Link>}
                {currPage === "ntc" ? <span className="text-black select-none text-lg font-bold">數論與密碼學</span> : <Link href="/courses/introduction/ntc" className="text-[#993300] underline">數論與密碼學</Link>}
                {currPage === "tdg" ? <span className="text-black select-none text-lg font-bold">微分幾何初探</span> : <Link href="/courses/introduction/tdg" className="text-[#993300] underline">微分幾何初探</Link>}
            </div>
            {children}
            </div>
    );
}