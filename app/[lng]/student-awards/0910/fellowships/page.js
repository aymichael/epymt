import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2009-2010";

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
                    "Chan Yiu Lai 陳耀禮",
                    "Lee Ching Yu Amanda 李澄茹",
                    "Lee Ho Cheung 李浩翔",
                    "Leung Kara 梁嘉穎",
                    "Leung Kinman 梁健文",
                    "Li Pak Hin 李柏軒",
                    "Suen Yat Hin 孫逸軒",
                    "Wan Chung Hang 溫頌恆"
                ]}
                schoolList={[
                    "F5, St. Paul's College",
                    "F6, Harrogate Ladies' College",
                    "F5, Shun Lee Catholic Secondary School",
                    "F6, Hang Seng School of Commerce",
                    "S6, ELCHK Lutheran Secondary School",
                    "F5, Pui Kiu Middle School",
                    "F7, St. Paul's College",
                    "F5, Beacon College"
                ]}
            />
        </div>
    );
}