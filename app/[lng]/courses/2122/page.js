import Link from "next/link";
import Image from "next/image";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";
import { DateBox } from "../component";

const prefix = "2122";
const courses = ["tma", "cnag", "idm", "ntc", "tdg"];
const date =
    ["15/7, 16/7, 19/7, 20/7, 22/7, 23/7, 26/7, 27/7, 28/7",
        "15/7, 16/7, 19/7, 20/7, 22/7, 23/7, 26/7, 27/7, 28/7",
        "2/8, 3/8, 5/8, 6/8, 9/8, 10/8, 12/8, 13/8, 16/8",
        "2/8, 4/8, 6/8, 9/8, 11/8, 13/8, 16/8, 18/8, 20/8",
        "15/7, 16/7, 19/7, 20/7, 22/7, 23/7, 26/7, 27/7, 28/7"];
const examDate = ["30/7", "30/7", "24/8", "24/8", "30/7"];
const reservedDate =
    ["21/7, 29/7, 31/7",
        "21/7, 29/7, 31/7",
        "11/8, 17/8, 20/8",
        "12/8, 23/8, 25/8",
        "21/7, 29/7, 31/7"];
const lecturerCHI = ["李俊捷博士(香港中文大學)", "陳曉寧博士(香港中文大學)", "陳啟良博士(香港中文大學)", "廖振隆博士(香港中文大學)", "劉智軒博士(香港中文大學)"];
const lecturerENG = ["Dr. LI Chun Che (CUHK)", "Dr. CHAN Hiu Ning (CUHK)", "Dr. CHAN Kai Leung (CUHK)", "Dr. Liu Chun Lung Kelvin (CUHK)", "Dr. Lau Chi Hin (CUHK)"];

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
                            <DateBox
                                lang={lng}
                                courseName={courseName}
                                date={date}
                                examDate={examDate}
                                reservedDate={reservedDate}
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
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6 flex flex-col gap-1">
                            <span>{t("table.venue")}</span>
                            <span className="text-red-500">
                                {lng === "en" ? "This course offers face-to-face lessons on CUHK campus. It may switch to online teaching, subject to the actual situation." : "此課程暫定於中文大學內授課，或有可能轉為線上授課，視乎實際情況而定。"}
                            </span>
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
                        <td className="md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6 flex flex-col gap-1">
                            <span>{lng === "en" ? "HK$3,990 (with $40 application fee included)" : "港幣 3,990元正 (已包含港幣40元申請費用)"}</span>
                            <span className="text-red-500">{lng === "en" ? "The tuition fee will be adjusted to HK$3,040 (with $40 application fee included) if the course finally switches to online teaching." : "如課程最終轉為線上授課，學費將會調整為港幣 3,040元正 (已包含港幣40元申請費用)。"}</span>
                        </td>
                    </tr>
                    <tr className="md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            {t("table.header_10")}
                        </td>
                        <td className="md:px-4 md:py-4 flex flex-col gap-1 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <Trans
                                i18nKey="table.creditRecognition_1"
                                t={t}
                                components={{ span: <span key="0" />, Link: <Link href="https://yashk.org.hk/yau-award" key="1" className="text-indigo-500 dark:text-indigo-300" /> }}
                            />
                            <Trans
                                i18nKey="table.remark_1"
                                t={t}
                                components={[<span key="0" className="text-sm text-red-500" />]}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl/8 underline underline-offset-8" name="leaflet">{t("title_3")}</span>
            <Image src={`/leaflet&poster/${prefix}_poster.jpg`} alt="課程海報" width={2475} height={3499} />
            <Image src={`/leaflet&poster/${prefix}_leaflet_1.jpg`} alt="課程單張" width={1754} height={1240} />
            <Image src={`/leaflet&poster/${prefix}_leaflet_2.jpg`} alt="課程單張" width={3500} height={2475} />
        </div>
    );
};