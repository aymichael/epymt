import Link from "next/link";
import { translation } from "@/app/i18n-index";

export default async function CNAG({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "cnag");
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <div className="flex flex-col gap-2">
                <span className="font-bold">{t("courseCode")}</span>
                <span>SAYT1034</span>
                <span className="font-bold">{t("universityRecognition.header")}</span>
                <span>{t("universityRecognition.content")}</span>
                <span className="font-bold">{t("mediumOfInstruction.header")}</span>
                <span>{t("mediumOfInstruction.content")}</span>
                <span className="font-bold">{t("expectedApplicants.header")}</span>
                <span>{t("expectedApplicants.content")}</span>
                <span className="font-bold">{t("introduction.header")}</span>
                <div className="flex flex-col">{t("introduction.content")}</div>
                <span className="font-bold">{t("tuitionFee.header")}</span>
                <span className="text-red-500">{t("tuitionFee.content")}</span>
            </div>
            <Link href={`/${lng}/application`} className="text-indigo-500 text-center my-4 dark:text-indigo-300 font-bold underline text-2xl/8">{t("application")}</Link>
            <div className="flex flex-col gap-2 p-4 border-gray-300 rounded-2xl border-2">
                <span className="font-bold text-xl/8 text-center">{t("conditions.title")}</span>
                <span>{t("conditions.description")}</span>
                <span className="text-sm">{t("conditions.note")}</span>
                <span>{t("conditions.point_1")}</span>
                <span>{t("conditions.point_2")}</span>
            </div>
        </div>
    );
};