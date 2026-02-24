import Link from "next/link";
import { translation } from "@/app/i18n-index";
import { Trans } from "react-i18next/TransWithoutContext";
import { year, applicationPeriodCHI, applicationPeriodENG, admissionTestDateCHI, admissionTestDateENG } from "@/app/data";

export default async function Application({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "application");
    const applicationPeriod = lng === "en" ? applicationPeriodENG : applicationPeriodCHI;
    const admissionTestDate = lng === "en" ? admissionTestDateENG : admissionTestDateCHI;
    return (
        <div className="flex justify-center w-full flex-col">
            <span className="font-bold text-center text-2xl/8">{t("title", { year: year })}</span>
            <span className="text-center">
                <Trans
                    i18nKey="applicationPeriod"
                    t={t}
                    values={{ time: applicationPeriod }}
                    components={[<span key="0" className="text-red-500" />]}
                />
            </span>
            <br />
            <span className="font-bold text-xl/8">{t("step_1.title")}</span>
            <span>{t("step_1.description")}</span>
            <span className="my-1">
                <Trans
                    i18nKey="step_1.login"
                    t={t}
                    components={[<Link key="0" href="https://cloud.itsc.cuhk.edu.hk/SAYT/Login.aspx" className="text-indigo-500 dark:text-indigo-300" />]}
                />
            </span>
            <span className="my-1">{t("step_1.completeForm")}</span>
            <span>{t("step_1.reminder")}</span>
            <span>{t("step_1.reminder_1")}</span>
            <span>{t("step_1.reminder_2")}</span>
            <span>{t("step_1.reminder_3")}</span>
            <span className="my-1">{t("step_1.checkStatus")}</span>
            <span className="my-1">
                <Trans
                    i18nKey="step_1.checkEmail" // The key from your JSON
                    t={t}
                    components={[ <strong /> ]} // The tag to replace <0> with
                />
            </span>
            <br />
            <span className="font-bold text-xl/8">{t("step_2.title")}</span>
            <span className="font-bold mt-2">{t("step_2.formerStudents.title")}</span>
            <span>{t("step_2.formerStudents.description")}</span>
            <span className="font-bold mt-2">{t("step_2.localAndOverseasStudents.title")}</span>
            <span>
                <Trans
                    i18nKey="step_2.localAndOverseasStudents.description"
                    t={t}
                    components={[<span className="text-red-500" key="0" />]}
                    values={{ admissionDate: admissionTestDate }}
                />
            </span>
            <span>
                <Trans
                    i18nKey="step_2.details"
                    t={t}
                    components={[<span className="text-red-500" key="0" />]}
                />
            </span>
        </div>
    )
};