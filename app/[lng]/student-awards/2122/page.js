import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2021-2022";

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
                outstandingNameList={["LIU Yi Qun 劉逸群", "TSE Ching Lam 謝青霖"]}
                outstandingSchoolList={["S5, La Salle College", "S4, G. T. (Ellen Yeung) College"]}
                excellentNameList={["CHEUNG Ka Hin Kyan 張嘉軒"]}
                excellentSchoolList={["S4, Victoria Shanghai Academy"]}
                hardwork={46}
            />

            <AwardBox
                lang={lng}
                topic={courseT("cnag")}
                outstandingNameList={["LAI Hing Kwan 黎慶均"]}
                outstandingSchoolList={["S4, TWGHs Mrs Fung Wong Fung Ting College"]}
                excellentNameList={["TSOI Man Ham 蔡文涵"]}
                excellentSchoolList={["S4, PLK Celine Ho Yam Tong College"]}
                hardwork={11}
            />

            <AwardBox
                lang={lng}
                topic={courseT("idm")}
                outstandingNameList={["MA YiXuan 馬逸軒"]}
                outstandingSchoolList={["S6, NTHYK Yuen Long District Secondary School"]}
                excellentNameList={["FU Jia Cheng Charles 傅嘉誠", "MENG Zijun 孟子鈞"]}
                excellentSchoolList={["S6, NTHYK Yuen Long District Secondary School", "S5, CCC Ming Yin College"]}
                hardwork={19}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={["CHAN Chong Shing 陳昶誠"]}
                outstandingSchoolList={["S5, Po Leung Kok Celine Ho Yam Yong College"]}
                excellentNameList={["CHAN Hok Yin 陳學賢", "KWOK Tsz Yin 郭子賢"]}
                excellentSchoolList={["S5, Pui Ching Middle School", "S3, CNEC Christian College"]}
                hardwork={20}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")}
                outstandingNameList={["SHUNG Man Hin 宋文軒", "KWOK Ching Yeung 郭政陽"]}
                outstandingSchoolList={["S6, Po Leung Kuk Celine Ho Yam Tong College", "S5, SKH Tang Shiu Kin Secondary School"]}
                excellentNameList={["WONG Po Leung 黃步良", "LI Tsz Shing 李子誠"]}
                excellentSchoolList={["S5, St. Mark's School", "S6, Kwun Tong Maryknoll College"]}
                hardwork={25}
            />

        </div>
    );
}