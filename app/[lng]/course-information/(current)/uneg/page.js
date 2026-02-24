import Link from "next/link";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";

export default async function UNEG({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "uneg");
    return (
        <div className="flex justify-center w-full flex-col gamd:p-2">
            <div className="flex flex-col gap-2">
                <span className="font-bold">{t("courseCode")}</span>
                <span>SAYT1214</span>
                <span className="font-bold">{t("universityRecognition.header")}</span>
                <span>{t("universityRecognition.content")}</span>
                <span className="font-bold">{t("mediumOfInstruction.header")}</span>
                <span>{t("mediumOfInstruction.content")}</span>
                <span className="font-bold">{t("expectedApplicants.header")}</span>
                <span>{t("expectedApplicants.content")}</span>
                <span className="font-bold">{t("introduction.header")}</span>
                <div className="flex flex-col">
                    <Trans
                        i18nKey="introduction.content"
                        t={t}
                        components={[<span key="0" />]}
                    />
                </div>

            </div>
            <Link href={`/${lng}/application`} className="text-indigo-500 text-center my-4 dark:text-indigo-300 font-bold underline text-2xl/8">{t("application")}</Link>
            <div className="flex flex-col gamd:p-2 p-4 border-gray-300 rounded-2xl border-2">
                <span className="font-bold text-xl/8 text-center">{t("conditions.title")}</span>
                <span>{t("conditions.point_3")}</span>
            </div>
        </div>
    );
};