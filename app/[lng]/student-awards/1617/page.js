import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2016-2017";

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
                    "CHEUNG Christopher Tat Shun 張達舜",
                    "LAI Chun Yin 賴俊延"
                ]}
                outstandingSchoolList={[
                    "S4, St. Paul's Co-educational College",
                    "S3, St. Bonaventure College and High School"
                ]}
                excellentNameList={["TAM Joe 譚早言"]}
                excellentSchoolList={["S3, Shatin Tsung Tsin Secondary School"]}
                hardwork={28}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={["XU Junheng Marcus 許君恆"]}
                outstandingSchoolList={["S4, La Salle College"]}
                excellentNameList={[
                    "CHAK Tsz Fung 翟梓峯",
                    "NG Tsz Wing 吳子永",
                    "TSANG Hing Lee Henry 曾慶利"
                ]}
                excellentSchoolList={[
                    "S6, CATS College",
                    "S5, HHCKLA Buddhist Ma Kam Chan Memorial English Secondary School",
                    "S4, TWGHs Lui Yun Choy Memorial College"
                ]}
                hardwork={30}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={[
                    "MOK Hoi Yiu Caius 莫凱堯",
                    "POON Ho Kiu Allie 潘灝蕎"
                ]}
                outstandingSchoolList={[
                    "S6, St. Joseph's College",
                    "S4, Diocesan Girls' School"
                ]}
                excellentNameList={[
                    "CHOY Hong 蔡康",
                    "MOK Chun Yin 莫俊賢",
                    "TSE Shun Chi 謝信知"
                ]}
                excellentSchoolList={[
                    "S5, Po Leung Kuk Mrs Ma Kam Ming-Cheung Fook Sien College",
                    "S5, Chinese YMCA College",
                    "S4, Ying Wa Girls' School"
                ]}
                hardwork={21}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={[
                    "LAM Chin Hang 林展行"
                ]}
                outstandingSchoolList={[
                    "S6, CCC Ming Yin College"
                ]}
                excellentNameList={[
                    "LAU Tin Wai Mark 劉天瑋",
                    "WONG Sing Lam 黃星霖"
                ]}
                excellentSchoolList={[
                    "S3, Pui Ching Middle School",
                    "S6, Po Leung Kuk Tang Yuk Tien College"
                ]}
                hardwork={8}
            />
        </div>
    );
}