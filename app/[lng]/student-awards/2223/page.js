import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2022-2023";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("tma")}
                outstandingNameList={["Cheng Wing Yan 鄭泳昕"]}
                outstandingSchoolList={["S4, CCC Heep Woh College"]}
                excellentNameList={["Fu Ming Hon Harvey 傅明翰", "Ng Ka Tsun 吳嘉浚"]}
                excellentSchoolList={["S4, Munsang College", "S1, SKH Tsang Shiu Tim Secondary School"]}
                hardwork={44}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={["Meng Zijun 孟子鈞"]}
                outstandingSchoolList={["S7, CCC Ming Yin College"]}
                excellentNameList={["Ng Chun Hin Jamie 吳振軒", "Wong Chun Yuen 黃俊源"]}
                excellentSchoolList={["S4, St. Joseph's College", "S5, Munsang College (Hong Kong Island)"]}
                hardwork={30}
            />

        </div>
    );
}