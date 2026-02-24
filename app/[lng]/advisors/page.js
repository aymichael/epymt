import { translation } from "@/app/i18n-index";

export default async function Advisors({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "advisors");
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <span className="font-bold text-2xl/8">{t("title")}</span>
            <span>
                {t("introduction")}
            </span>
            <div className="flex justify-center">
                <table className="w-full table-auto ">
                    <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="text-left px-2 py-1">{t("table.name")}</th>
                            <th className="text-left px-2 py-1">{t("table.organization")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Philip Candelas</td>
                            <td className="px-2 py-1">Oxford University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Tony Chan 陳繁昌教授</td>
                            <td className="px-2 py-1">University of California, Los Angeles</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Man-Duen Choi 蔡文端教授</td>
                            <td className="px-2 py-1">University of Toronto</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Cho-Ho Chu 朱礎豪教授</td>
                            <td className="px-2 py-1">London University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. John Chu 朱嘉鯤教授</td>
                            <td className="px-2 py-1">Columbia University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. J. H. Coates*</td>
                            <td className="px-2 py-1">Cambridge University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Benedict Gross</td>
                            <td className="px-2 py-1">Harvard University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Chaohao Gu 谷超豪教授</td>
                            <td className="px-2 py-1">Wenzhou University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Jean Pierre Kahane</td>
                            <td className="px-2 py-1">Paris University, Orsay</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Hsiang-Tsung Kung</td>
                            <td className="px-2 py-1">Harvard University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Tsz-Leung Lai 黎子良教授</td>
                            <td className="px-2 py-1">Stanford University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Rafe R. Mazzeo</td>
                            <td className="px-2 py-1">Stanford University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Duong H. Phong</td>
                            <td className="px-2 py-1">Columbia University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Wilfried Schmid</td>
                            <td className="px-2 py-1">Harvard University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. R. Sommer</td>
                            <td className="px-2 py-1">Stanford University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Daniel Stroock</td>
                            <td className="px-2 py-1">Massachusetts Institute of Technology</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Neil S. Trudinger</td>
                            <td className="px-2 py-1">Australian National University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Wing-Hung Wong 王永雄教授</td>
                            <td className="px-2 py-1">Harvard University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Andrew C. C. Yao</td>
                            <td className="px-2 py-1">Princeton University</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-1">Prof. Gregg J. Zuckerman</td>
                            <td className="px-2 py-1">Yale University</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}