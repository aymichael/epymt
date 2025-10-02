import { year } from "@/app/data";

function GuestLectureBox({ lang, Speaker, Topic, Date, Time, Venue, Abstract, Language }) {
    const langFlag = (lang === 'zh-Hant') ? 1 : 0;
    return (
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 sm:p-8 my-4">
            <div className="flex flex-col gap-2">
                <div>
                    <h3 className="font-bold text-xl/8 dark:text-gray-100">{Topic[langFlag]}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg/8">{Speaker[langFlag]}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-base text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {Date[langFlag]} {Time[langFlag]}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {Venue[langFlag]}
                    </span>
                    {Language && <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" fill="none" strokewidth={2} d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"/>
                        </svg>
                        {Language[langFlag]}
                    </span>}
                </div>
                {Abstract && <div className="dark:text-gray-300 text-lg/8 whitespace-pre-wrap">
                    {Abstract[langFlag]}
                </div>}
            </div>
        </div>
    );
}

export default async function GuestLectures({ params }) {
    const { lng } = await params;
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl/8 text-center mb-4">{(lng === "en") ? "Guest Lectures" : "嘉賓講座"}</h1>
            <p>{(lng === "en") ? "Besides lectures and tutorials, we also organize guest talks for EPYMT students." : "除了課堂講授和習題課，我們也會為學生安排嘉賓講座。"}</p>
            <p>{(lng === "en") ? `In ${year} summer, we organized the following talks:` : `在${year}年夏天，我們安排了以下講座：`}</p>
            <GuestLectureBox
                lang={lng}
                Speaker={["Mr. Ng Ka Chung, Chief Analytic Officer, Spire Investment Group", "Mr. Ng Ka Chung, Chief Analytic Officer, Spire Investment Group"]}
                Topic={["Mathematics in Fund Houses", "基金公司中的數學"]}
                Date={["11 August 2025 (Monday)", "2025年8月11日（星期一）"]}
                Time={["15:30 - 17:30", "15:30 - 17:30"]}
                Venue={["LT2, Esther Lee Building (ELB), CUHK", "香港中文大學利黃瑤璧樓LT2"]}
                Abstract={["In this talk, I will begin with an introduction to my background and the journey that led me into the finance industry, specifically within fund houses. I will then delve into the significance of Ito's lemma, exploring its foundational concepts and diverse applications in financial modeling and risk management. Finally, I will provide an overview of quantitative trading and what skills Mathematics/Statistics students should equip themselves in order to pursue their career in this industry in future.", "在這次講座中，我將首先介紹我的背景以及我進入金融行業，特別是基金公司的旅程。然後，我將深入探討Ito's lemma的重要性，探索其基本概念及其在金融建模和風險管理中的多種應用。最後，我將概述量化交易以及數學/統計學生應該具備哪些技能，以便將來在這個行業中追求自己的職業生涯。"]}
            />
        </div>
    );
};