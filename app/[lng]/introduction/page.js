import Link from "next/link"
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"

export default async function Introduction({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "introduction");
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className=" font-bold text-2xl/8 underline-offset-8 underline my-2">{t("section_1.title")}</span>
            <span>
                {t("section_1.content_1")}
            </span>
            <span>
                {t("section_1.content_2")}
            </span>
            <br />
            <span className=" font-bold text-2xl/8 underline-offset-8 underline my-2">{t("section_2.title")}</span>
            <span>
                <Trans
                    i18nKey="section_2.content_1"
                    t={t}
                    components={[<Link key="0" href="https://www.qef.org.hk/en/index.html" className="text-indigo-500 dark:text-indigo-300" />, <span key="1" className="font-bold" />]}
                />
            </span>
            <br />
            <span className=" font-bold text-2xl/8 underline-offset-8 underline my-2">{t("section_3.title")}</span>
            <span>
                {t("section_3.content_1")}
            </span>
        </div>
    )
}