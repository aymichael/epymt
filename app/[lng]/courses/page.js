import { year } from "@/app/data";
import { translation } from "@/app/i18n-index";
import Link from "next/link";

export default async function CourseList({ params }) {
    const { lng } = await params;
    const years = Array.from({ length: year - 2013 + 1 }, (_, i) => year - i);
    // create url eg. 2024->2425
    const URLs = years.map((year) => year.toString().slice(2) + (year + 1).toString().slice(2));
    const oldYears = [2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003];
    const specialOldYears = [2009, 2008, 2007];
    const { t } = await translation(lng, "courseList");
    const oldURLPrefix = oldYears.map((year) => year.toString().slice(2) + (year + 1).toString().slice(2));
    const oldURLs = [["summer", "sayt1054", "sayt1154", "cusa0104", "cusa0114"], ["summer", "sayt1154", "cusa0104", "cusa0114"], ["summer", "sayt0104"], ["summer"], ["summer"], ["summer"], ["summer", "spring"], ["summer", "autumn", "spring"], ["summer", "autumn", "spring"], ["summer", "autumn", "spring"]];
    const oldPeriods = [[t("period.1"), "SAYT1054", "SAYT1154", "CUSA0104", "CUSA0114"], [t("period.1"), "SAYT1154", "CUSA0104", "CUSA0114"], [t("period.1"), "SAYT0104"], [t("period.1"),], [t("period.1"),], [t("period.1"),], [t("period.1"), t("period.2")], [t("period.1"), t("period.3"), t("period.2")], [t("period.1"), t("period.3"), t("period.2")], [t("period.1"), t("period.3"), t("period.2")]];

    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <table className="w-full">
                <thead className=" text-gray-700 uppercase text-xl/8 border-b-4 border-gray-200 dark:text-white dark:border-gray-500">
                    <tr>
                        <th className="py-1 w-1/3">{t("header1")}</th>
                        <th className="py-1 w-2/3">{t("header2")}</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {years.map((year, idx) => (
                        <tr key={idx} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-700">
                            <td className="py-2">{year + " - " + (year + 1)}</td>
                            <td className="py-2"><Link className="text-indigo-500" href={`/${lng}/courses/${URLs[idx]}`}>{t("period.1")}</Link></td>
                        </tr>
                    ))}
                    {oldYears.map((year, idx) => (
                        <tr key={idx} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-700">
                            <td className="py-2">{year + " - " + (year + 1)}</td>
                            <td className="flex gap-2 justify-center flex-wrap">
                                {specialOldYears.includes(year) ? oldPeriods[idx].map((period, idx2) => (
                                    <Link key={idx2} className="text-indigo-500 py-2" href={`/${lng}/courses/${oldURLPrefix[idx]}`}>{period}</Link>
                                )) :
                                oldPeriods[idx].map((period, idx2) => (
                                    <Link key={idx2} className="text-indigo-500 py-2" href={`/${lng}/courses/${oldURLPrefix[idx]}/${oldURLs[idx][idx2]}`}>{period}</Link>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}; 