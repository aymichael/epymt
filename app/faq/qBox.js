"use client";

import { useState } from "react";

export default function QuestionBox({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="border-2 border-black p-2 px-4 rounded-2xl flex flex-col gap-2">
            <div className={`font-sans font-bold cursor-pointer select-none md:text-lg/8 sm:text-base/8 flex justify-between items-center gap-4 text-sm/8 ${showAnswer ? "text-black" : "text-indigo-500 dark:text-indigo-300"} `} onClick={() => setShowAnswer(!showAnswer)}>
                {question}
                <span>
                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 ease-in-out ${showAnswer ? "rotate-180" : ""}`}>
                        <path d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" fill="#000000" />
                    </svg>
                </span>
            </div>
            {showAnswer && <div className="md:text-base/8 sm:text-sm/8 text-xs">{answer}</div>}
        </div>
    );
}