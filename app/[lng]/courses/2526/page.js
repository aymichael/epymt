import Link from "next/link";
import Image from "next/image";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";
import DateBox from "../component";

const prefix = "2526";
const courses = ["tma", "cnag", "idm", "ntc", "tdg"];
const date =
    ["14/7, 15/7, 17/7, 18/7, 21/7, 22/7, 24/7, 25/7, 28/7",
        "14/7, 15/7, 17/7, 18/7, 21/7, 22/7, 24/7, 25/7, 28/7",
        "14/7, 15/7, 17/7, 18/7, 21/7, 22/7, 24/7, 25/7, 28/7",
        "8/8, 11/8, 13/8, 15/8, 18/8, 20/8, 22/8, 25/8, 27/8",
        "8/8, 11/8, 13/8, 15/8, 18/8, 20/8, 22/8, 25/8, 27/8"
    ];
const examDate = ["31/7", "31/7", "31/7", "29/8", "29/8"];
const reservedDate =
    ["23/7, 29/7, 1/8",
        "23/7, 29/7, 1/8",
        "23/7, 29/7, 1/8",
        "19/8, 28/8, 30/8",
        "19/8, 28/8, 30/8"
    ];
const lecturerCHI = ["李俊捷博士(香港中文大學)", "陳曉寧博士(香港中文大學)", "吳銘豪博士(香港中文大學)", "廖振隆博士(香港中文大學)", "鄭文銓博士(香港中文大學)"];
const lecturerENG = ["Dr. LI Chun Che (CUHK)", "Dr. CHAN Hiu Ning (CUHK)", "Dr. NG Ming Ho (CUHK)", "Dr. LIU Chun Lung Kelvin (CUHK)", "Dr. CHENG Man Chuen (CUHK)"];

export default async function Course({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "course");
    const lecturer = lng === "en" ? lecturerENG : lecturerCHI;
    const colon = lng === "en" ? ": " : "：";
    const tuitionFee = lng === "en" ? "Tuition fee is HK$3,350 (included application fee $50)." : "根據大學規定，學費為每科港幣3,350元 (已包括報名費50元)。";
    const courseName = courses.map((course) => t(course));
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">{t("title_1")}</span>
            <div className="flex flex-col gap-1 my-4">
                <Trans
                    i18nKey="introduction_1"
                    t={t}
                    components={[<span key="0" />]}
                />

                <span className="text-sm text-red-500">
                    {t("remark_1")}
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{t("title_2")}</span>
            <table className="my-4 table-fixed w-full">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_1")}
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            {courses.map((course, index) => (
                                <Link key={index} href={`/${lng}/course-information/${course}`} className="text-indigo-500 dark:text-indigo-300">
                                    {t(course)}
                                </Link>
                            ))}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_2")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.applicationMethod"
                                t={t}
                                components={[<Link key="0" href={`/${lng}/application`} className="text-indigo-500 dark:text-indigo-300" />]}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_3")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700  md:bg-gray-50 md:pb-4 pb-6">
                            <DateBox
                                lang={lng}
                                courseName={courseName}
                                date={date}
                                examDate={examDate}
                                reservedDate={reservedDate}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_4")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            10:30am - 5:15pm
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_5")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            {t("table.venue")}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_11")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            {t("table.mediumOfInstruction")}
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_6")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6 flex flex-col gap-1">
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
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_7")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.learningActivities"
                                t={t}
                                components={[<span key="0" />]}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_8")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.targetStudents"
                                t={t}
                                components={[<span key="0" />]}
                            />
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-600 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_9")}
                        </td>
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            {tuitionFee}
                        </td>
                    </tr>
                    <tr className="md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_10")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-700 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.creditRecognition_2"
                                t={t}
                                components={{ span: <span key="0" />, Link: <Link href="https://yashk.org.hk/yau-award" key="1" className="text-indigo-500 dark:text-indigo-300" /> }}
                            />
                            <Trans
                                i18nKey="table.remark_2"
                                t={t}
                                components={[<span key="0" className="text-sm text-red-500" />]}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl/8 underline underline-offset-8" name="leaflet">{t("title_4")}</span>
            {/* <Image src={`/leaflet&poster/${prefix}_poster.jpg`} alt="課程海報" width={2475} height={3499} />
            <Image src={`/leaflet&poster/${prefix}_leaflet_1.jpg`} alt="課程單張" width={1754} height={1240} />
            <Image src={`/leaflet&poster/${prefix}_leaflet_2.jpg`} alt="課程單張" width={3500} height={2475} /> */}
            <span>To be updated</span>
        </div>
    );
};