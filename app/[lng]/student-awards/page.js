import Link from "next/link";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
import { year } from "@/app/data";

export default async function Page({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    // generate years list by 2002-current year with last 2 digits
    const years = Array.from({ length: year - 2002 }, (_, i) => (i + 3).toString().padStart(2, '0'));
    console.log(year);
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center w-full flex-col gap-4 text-gray-900 dark:text-white">
                <h1 className="font-bold text-3xl text-center">
                    {t("header")}
                </h1>
                <p>
                    {t("introduction")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {years.reverse().slice(0, -1).map((year, idx) => (
                        <Link
                            key={idx}
                            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-transform duration-200 hover:scale-105 flex flex-col items-center justify-center gap-2"
                            href={`/student-awards/${years[idx + 1]}${years[idx]}`}
                        >
                            <Trans t={t} i18nKey="period" values={{ period: `20${years[idx + 1]}-20${years[idx]}` }} components={[<span key="0" className="text-lg/8 font-bold" />]}>
                            </Trans>
                            <span>{t("list")}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};