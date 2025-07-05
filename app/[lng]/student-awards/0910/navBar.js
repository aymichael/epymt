"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const year = "0910";

function NavButton({ text, link, selected }) {
    return (
        <Link href={link}
            className={`flex justify-center items-center shadow-md ${selected ? "text-gray-50" :"before:-left-full hover:text-gray-50"} border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 
            overflow-hidden border-2 rounded-full px-4 py-2 relative before:absolute before:w-full before:transition-all before:rounded-full before:duration-500 before:-z-10 z-0 before:aspect-square  before:hover:left-0 before:bg-blue-400 dark:before:bg-blue-800`}
        >
            {text}
        </Link>
    );
}

export default function NavBar({ lang }) {
    const targetName = lang === "en" ? ["summer", "fellowships"] : ["暑期", "榮譽生"];
    const targetURL = [`/${year}/summer`, `/${year}/fellowships`].map((url) => `/${lang}/student-awards/${url}`);
    const targetShortForm = ["summer", "fellowships"];
    const currentPath = usePathname().split("/")[4];
    console.log(currentPath);
    return (
        <div className="flex justify-center gap-4 w-full flex-wrap">
            {targetName.map((name, index) => <NavButton key={index} text={name} link={targetURL[index]} selected={currentPath === targetShortForm[index]} />)}
        </div>
    );
}