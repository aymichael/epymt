import Link from "next/link";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";
import { VeryOldDateBox } from "../component";

const courses = ["tdg", "cnneg"];
const lecturerCHI = ["劉智軒博士(香港中文大學)", "方穎聰博士(香港中文大學)", "溫有恒教授(香港中文大學)", "張亮夫博士(香港中文大學)"];
const lecturerENG = ["Dr. Liu Zhi Xuan (CUHK)", "Dr. Fong Wing Chung (CUHK)", "Prof. WAN Yau Heng Tom (CUHK)", "Dr. CHEUNG Leung Fu (CUHK)"];
const tuitionFee = "2,000";

export default async function Course({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "course");
    const lecturer = lng === "en" ? lecturerENG : lecturerCHI;
    const colon = lng === "en" ? ": " : "：";
    const courseName = courses.map((course) => t(course));
    const date = lng === "en" ? [
        "(preparatory)10th-13th July, 2008; 16th July-6th August, 2007, every Mon, Wed and Fri",
        "16th July-6th August, 2007, every Mon, Wed and Fri",
    ] : [
        "(先修課)2008年7月10至13日；2008年7月16日至8月6日逢星期一、三、五",
        "2008年7月16日至8月6日逢星期一、三、五",
    ];
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">{t("title_1")}</span>
            <div className="flex flex-col gap-1 my-4">
                <Trans
                    i18nKey="introduction_6"
                    t={t}
                    components={[<span key="0" />]}
                />

                <span className="text-sm text-red-500">
                    {t("remark_2")}
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{t("title_2")}</span>
            <table className="my-4 table-fixed w-full">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_1")}
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            {courses.map((course, index) => (
                                <Link key={index} href={`/${lng}/course-information/${course}`} className="text-indigo-500 dark:text-indigo-300">
                                    {t(course)}
                                </Link>
                            ))}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_2")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.applicationMethod"
                                t={t}
                                components={[<Link key="0" href={`/${lng}/application`} className="text-indigo-500 dark:text-indigo-300" />]}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_3")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600  md:bg-gray-50 md:pb-4 pb-6">
                            <VeryOldDateBox
                                lang={lng}
                                courseName={courseName}
                                date={date}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_5")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            {t("table.venue")}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_11")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            {t("table.mediumOfInstruction")}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_6")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6 flex flex-col gap-1">
                            {lecturer.map((lecturer, index) => (
                                <span key={index}>
                                    {lecturer}
                                </span>
                            ))}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_7")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.learningActivities"
                                t={t}
                                components={[<span key="0" />]}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_8")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.targetStudents_2"
                                t={t}
                                components={[<span key="0" />]}
                                values={{ year: "2006-07" }}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_9")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.tuition_2"
                                t={t}
                                values={{ amount: tuitionFee }}
                            />
                        </td>
                    </tr>
                    <tr className="md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_10")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.creditRecognition_4"
                                t={t}
                                components={{ span: <span key="0" /> }}
                            />
                            <span>{lng === "en" ? "- All students who pass a second or additional course will receive a scholarship of HK$1,200 per course" : "- 所有同學在合格完成第二個或以上科目時，每科均可得獎學金1200元"}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};