import Link from "next/link";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";

export default async function TMA({params}) {
    const { lng } = await params;
    const { t } = await translation(lng, "tma");
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("courseCode")}</span>
                        </td>
                        <td className="p-2">SAYT1014</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("universityRecognition.header")}</span>
                        </td>
                        <td className="p-2">
                        <span>{t("universityRecognition.content")}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("mediumOfInstruction.header")}</span>
                        </td>
                        <td className="p-2">
                        <span>{t("mediumOfInstruction.content")}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("expectedApplicants.header")}</span>
                        </td>
                        <td className="p-2">
                        <span>{t("expectedApplicants.content")}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("introduction.header")}</span>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <Trans 
                                    i18nKey="introduction.content"
                                    t={t}
                                    components={[<span key="0"/>]}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top text-nowrap">
                        <span>{t("tuitionFee.header")}</span>
                        </td>
                        <td className="p-2 text-red-500">
                        <span>{t("tuitionFee.content")}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="text-sm/8 text-red-500">{t("remark")}</span>
            <Link href={`/${lng}/application`} className="text-indigo-500 text-center my-2 dark:text-indigo-300 font-bold underline text-2xl/8">{t("application")}</Link>
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