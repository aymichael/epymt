import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2015-2016";

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
                outstandingNameList={["Chan Ho Russell 陳昊"]}
                outstandingSchoolList={["S6, Lam Tai Fai College"]}
                excellentNameList={["Chan Ho 陳昊", "Wong Ka Kit 黃嘉杰"]}
                excellentSchoolList={[
                    "S3, TWGHs S C Gaw Memorial College",
                    "S4, Shun Lee Catholic Secondary School"
                ]}
                hardwork={30}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={["Lee Shun Ming Samuel 李信明", "Tai Wai Ting 戴煒庭"]}
                outstandingSchoolList={[
                    "S4, CNEC Christian College",
                    "S4, Queen Elizabeth School"
                ]}
                excellentNameList={[
                    "Lam Tsz Hin Brian 藍子軒",
                    "Mok Hoi Yiu Caius 莫凱堯",
                    "Pong Zhi Kai 龐智楷",
                    "Suen Hin Nok Oscar 孫憲諾"
                ]}
                excellentSchoolList={[
                    "S4, Buddhist Sin Tak College",
                    "S5, St. Joseph’s College",
                    "S5, St. Paul's Co-educational College",
                    "S5, Phillips Exeter Academy"
                ]}
                hardwork={39}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={[
                    "Li Hoi Kit 李愷傑",
                    "Man Ryuichi 文龍一",
                    "Wong Sing Lam 黃星霖"
                ]}
                outstandingSchoolList={[
                    "S4, Cheung Chuk Shan College",
                    "S3, Ying Wa College",
                    "S5, Po Leung Kuk Tang Yuk Tien College"
                ]}
                excellentNameList={[
                    "Lau Tin Wai 劉天瑋",
                    "Lee Hung San 李鴻新",
                    "Lin Hao 林浩"
                ]}
                excellentSchoolList={[
                    "S2, Pui Ching Middle School",
                    "S6, Yuen Long Merchants Association Secondary School",
                    "S5, St. Joseph's College"
                ]}
                hardwork={39}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["Yiu Chi Nok Enoch 姚子諾"]}
                outstandingSchoolList={["S6, St. Paul's Co-educational College"]}
                excellentNameList={["Iu Liu Yin 姚了然", "Tsui Ho Lung 徐浩龍"]}
                excellentSchoolList={[
                    "S6, Po Leung Kuk Choi Kai Yau School",
                    "S6, St. Joseph's College"
                ]}
                hardwork={7}
            />
        </div>
    );
}