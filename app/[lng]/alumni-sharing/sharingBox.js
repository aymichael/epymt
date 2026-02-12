"use client";
import { useEffect, useState } from "react";

function Sharing({ content, author }) {
    return (
        <div className="border-2 border-l-8 border-l-blue-200 dark:border-l-blue-800 border-gray-300 dark:border-gray-600 rounded-xl p-4 sm:p-6 flex flex-col gap-3 my-4 bg-white dark:bg-gray-800 shadow-sm ">
            <span className="italic text-gray-700 dark:text-gray-300 text-lg/8 sm:text-xl/8 whitespace-pre-line">
                &quot;{content}&quot;
            </span>
            <span className="font-bold self-end">
                —— {author}
            </span>
        </div>
    );
}

export default function SharingBox({ data }) {
    const [shuffledData, setShuffledData] = useState([]);
    useEffect(() => {
        setShuffledData(data.sort(() => 0.5 - Math.random()));
    }, []);
    return (
        <div className="flex flex-col">
            {shuffledData.slice(0, 3).map((item, index) => (
                <Sharing key={index} content={item.content} author={item.authors} />
            ))}
        </div>
    );
}
