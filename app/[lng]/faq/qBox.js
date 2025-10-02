"use client";

import { useState } from "react";

export default function QuestionBox({ question, answer,lang }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const langFlag = lang === "en" ? 0 : 1;

    return (
        <div className="p-4 rounded-2xl flex flex-col shadow-md ring-1 ring-gray-200 dark:ring-gray-600/40">
            <div className={`font-bold cursor-pointer select-none md:text-xl/8 text-lg/8 flex justify-between items-center gap-4 ${showAnswer ? "text-black dark:text-white" : "text-indigo-600 dark:text-indigo-400"} `} onClick={() => setShowAnswer(!showAnswer)}>
                {question[langFlag]}
                <span>
                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 ease-in-out ${showAnswer ? "rotate-180" : ""}`}>
                        <path d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" fill="#000000" />
                    </svg>
                </span>
            </div>
            <div className={`whitespace-pre-line md:text-lg/8 text-base/8 duration-200 transition-all ease-in-out overflow-hidden ${showAnswer ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} `}>{answer[langFlag]}</div>
        </div>
    );
}