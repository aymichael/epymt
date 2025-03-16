"use client";

import { useState } from "react";

export default function QuestionBox({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="border-2 border-black p-2 px-4 rounded-2xl flex flex-col gap-2">
            <div className={`font-sans font-bold cursor-pointer select-none md:text-lg/8 sm:text-base/8 flex justify-between items-center gap-4 text-sm/8 ${showAnswer ?  "text-black" : "text-indigo-500 dark:text-indigo-300"} `} onClick={() => setShowAnswer(!showAnswer)}>
                {question}
                <span>{showAnswer ? "⮝" : "⮟"}</span>
            </div>
            {showAnswer && <div className="md:text-base/8 sm:text-sm/8 text-xs">{answer}</div>}
        </div>
    );
}