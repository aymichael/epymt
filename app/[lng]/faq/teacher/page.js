import QuestionBox from "../qBox";
import Link from "next/link";
import { translation } from '@/app/i18n-index.js';

export default async function Student({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl/8 my-4">{t("header_1")}</h2>
            <QuestionBox
                lang={lng}
                question={["My school can pay the tuition fees for students participate in EPYMT. May I obtain a receipt as proof?", "校方可以為報讀課程的學生代為繳交學費，我可否獲得收據作為證明？"]}
                answer={[<span  key="0">Yes, please contact us by <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a>.</span>
                    , <span  key="1">可以，請通過 <a href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</a> 與我們聯繫。</span>
                ]}
            />
        </div>
    );
};