"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar({ pages }) {
    const currentPath = usePathname();
    const pagaPath = ['/', ...pages.map((page) => `/${page.toLowerCase().replace(" ", "-")}`)];
    return (
        <nav className="bg-[#440000] px-4 py-1 flex flex-wrap md:gap-4 gap-2 items-center justify-evenly">
            {["Home",...pages].map((page, index) => (
                currentPath === pagaPath[index] ?
                <span key={index} className="text-white font-serif text-center text-sm select-none">{page}</span>:
                <Link
                    key={index}
                    href={pagaPath[index]}
                    className="font-serif text-center text-sm hover:brightness-95 text-[#ffaa77]"
                >
                    {page}
                </Link>
            ))}
        </nav>);

};
