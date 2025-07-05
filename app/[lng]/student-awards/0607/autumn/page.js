import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2006-2007";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="autumn" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <h1 className="font-bold text-2xl/8">
                The award for this period is missing.
            </h1>
        </div>
    );
}