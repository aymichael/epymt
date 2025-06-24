import Link from "next/link";
import { translation } from "@/app/i18n-index";

export default async function CNAG({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "gpcn");
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <span className="text-2xl/8 font-bold text-center text-red-500">{t("outdated")}</span>
            <div className="flex flex-col gap-2">
                <span className="font-bold">{t("courseCode")}</span>
                <span>CUSA1014</span>
                <span className="font-bold">{t("universityRecognition.header")}</span>
                <span>{t("universityRecognition.content")}</span>
                <span className="font-bold">{t("mediumOfInstruction.header")}</span>
                <span>{t("mediumOfInstruction.content")}</span>
                <span className="font-bold">{t("expectedApplicants.header")}</span>
                <span>{t("expectedApplicants.content")}</span>
                <span className="font-bold">{t("introduction.header")}</span>
                <div className="flex flex-col">{t("introduction.content")}</div>
            </div>
            <div className="flex flex-col gap-2 p-4 border-gray-300 rounded-2xl border-2">
                <span className="font-bold text-xl/8 text-center">{t("conditions.title")}</span>
                <span>{t("conditions.description")}</span>
            </div>
        </div>
    );
};