import QuestionBox from "../qBox";
import Link from "next/link";
import { translation } from '@/app/i18n-index.js';

export default async function Parent({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl/8 my-4">{t("header_1")}</h2>
            <QuestionBox
                lang={lng}
                question={["I believe my child is too young. Can I accompany them to the course activities?", "我認為我的孩子年齡太小，可以陪伴他參加課程活動嗎？"]}
                answer={["We kindly ask that students attend the course activities independently. Parents are requested to wait outside the venue during the sessions. This approach helps foster independence and allows students to fully engage in the learning experience. Thank you for your understanding.", "我們誠摯地要求學生獨立參加課程活動。家長請在活動場地外等候。這種方式有助於培養學生的獨立性，並使他們能充分投入學習體驗。感謝您的理解。"]}
            />
 
        </div>
    );
};