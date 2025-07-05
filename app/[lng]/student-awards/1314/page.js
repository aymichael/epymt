import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2013-2014";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("gpcn")} // CUSA1014 Geometric Perspectives of Complex Numbers
                outstandingNameList={[
                    "Fok Hong Kei Christopher 霍康淇",
                    "Yung Chak Lam 翁澤霖"
                ]}
                outstandingSchoolList={[
                    "S3, Cheung Chuk Shan College",
                    "S2, La Salle College"
                ]}
                excellentNameList={["Ma Cho Kit 馬祖傑"]}
                excellentSchoolList={["S3, Yuen Long Merchants Association Secondary School"]}
                hardwork={29}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={["Yeung Lok Tin 楊樂天"]}
                outstandingSchoolList={["S5, St. Paul's Co-educational College"]}
                excellentNameList={[
                    "Wong Chun Fung 黃進鋒",
                    "Wong Tsz Yeung 黃梓揚",
                    "Wong Wai Lun 王偉倫",
                    "Yau Chun Yin 邱駿然"
                ]}
                excellentSchoolList={[
                    "S5, The Church of Christ in China Heep Woh College",
                    "S5, C.C.C. Heep Woh College",
                    "S5, Po Leung Kuk Mrs Ma Kam Ming-Cheung Fook Sien College",
                    "S4, Po Leung Kuk Tang Yuk Tien College"
                ]}
                hardwork={33}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={["Tsang Chi Cheuk 曾之卓"]}
                outstandingSchoolList={["S5, St. Joseph's College"]}
                excellentNameList={["Cheung Andy 張文康"]}
                excellentSchoolList={["S4, St. Joseph's College"]}
                hardwork={21}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["Kwan Chung Hang 關仲衡"]}
                outstandingSchoolList={["S6, Sir Ellis Kadoorie Secondary School (West Kowloon)"]}
                excellentNameList={["Chan Lok Hang 陳樂行", "Man Hiu Ying 文曉盈"]}
                excellentSchoolList={[
                    "S6, Ho Fung College (Sponsored By Sik Sik Yuen)",
                    "S6, Baptist Lui Ming Choi Secondary School"
                ]}
                hardwork={7}
            />
        </div>
    );
}