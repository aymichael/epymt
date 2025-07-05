import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2012-2013";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="fellowships" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <FellowshipsBox
                lang={lng}
                nameList={[
                    "WONG Sze Nga 王詩雅",
                    "WONG Gabriel Chun Hei 黃俊希",
                    "YUEN Wai Kiu 袁蔚翹",
                    "LI Christopher 李彥衡"
                ]}
                schoolList={[
                    "F4, Diocesan Girls' School",
                    "F2, La Salle College",
                    "F5, St. Francis' Canossian College",
                    "F3, La Salle College"
                ]}
            />

        </div>
    );
}