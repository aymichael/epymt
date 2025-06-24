import Link from "next/link";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";
import { OldDateBox } from "../component";

const courses = ["gpcn", "ntc", "tdg", "uneg"];
const date =
    ["14/7, 16/7, 18/7, 21/7, 23/7, 25/7, 28/7, 30/7, 1/8",
        "5/8, 6/8, 8/8, 11/8, 13/8, 15/8, 18/8, 20/8, 22/8",
        "16/7, 18/7, 21/7, 23/7, 25/7, 28/7, 30/7, 1/8, 4/8",
        "28/5, 30/5, 4/6, 6/6, 9/6, 11/6, 13/6, 16/6, 18/6"
    ];
const examDate = ["7/8", "27/8", "6/8", "25/6"];
const lecturerCHI = ["陳啟良博士(香港中文大學)", "李俊捷博士(香港中文大學)", "劉智軒博士(香港中文大學)", "溫有恒教授(香港中文大學)"];
const lecturerENG = ["Dr. Chan Kai Leung (CUHK)", "Dr. Li Chun Che Charles (CUHK)", " Dr. Lau Chi Hin (CUHK)", "Prof. WAN Yau Heng Tom (CUHK)"];
const tuitionFee = "3,200";
const scholarshipAmount = "800";

export default async function Course({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "course");
    const lecturer = lng === "en" ? lecturerENG : lecturerCHI;
    const colon = lng === "en" ? ": " : "：";
    const courseName = courses.map((course) => t(course));
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">{t("title_1")}</span>
            <div className="flex flex-col gap-1 my-4">
                <Trans
                    i18nKey="introduction_3"
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
                            <OldDateBox
                                lang={lng}
                                courseName={courseName}
                                date={date}
                                examDate={examDate}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_4")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            10:30am - 5:15pm
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
                            {courses.map((course, index) => (
                                <div key={index} className="flex flex-wrap">
                                    <span className="font-bold mr-2">
                                        {t(course) + colon}
                                    </span>
                                    <span>
                                        {lecturer[index]}
                                    </span>
                                </div>
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
                                i18nKey="table.targetStudents"
                                t={t}
                                components={[<span key="0" />]}
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
                                values={{ amount: tuitionFee}}
                            />
                        </td>
                    </tr>
                    <tr className="md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_10")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.creditRecognition_3"
                                t={t}
                                components={{ span: <span key="0" /> }}
                                values={{ scholarship: scholarshipAmount }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};