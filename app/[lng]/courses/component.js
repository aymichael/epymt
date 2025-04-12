"use client";
import { useState } from "react";

export default function DateBox({ lang, courseName, date, examDate, reservedDate }) {
    const [selected, setSelected] = useState(0);
    const dateText = lang === "en" ? "Date" : "上課日期";
    const examText = lang === "en" ? "Exam Date" : "考試日期";
    const reservedText = lang === "en" ? "Reserved Date" : "後備課堂日期";
    const colon = lang === "en" ? ": " : "：";
    return (
        <div className="w-full flex flex-col">
            <div className="flex overflow-x-auto gap-4 py-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-600 dark:[&::-webkit-scrollbar-thumb]:bg-blue-500">
                {courseName.map((name, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`whitespace-nowrap ${selected === index ? "text-blue-500" : "text-gray-400"} select-none`}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <span className="mt-2">{dateText}{colon}{date[selected]}</span>
            <span className="mt-2">{examText}{colon}{examDate[selected]}</span>
            <span className="mt-2">{reservedText}{colon}{reservedDate[selected]}</span>
        </div>

    )
}