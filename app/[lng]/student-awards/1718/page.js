import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2017-2018";

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
                outstandingNameList={["CHAN Tsun Kit 陳浚傑"]}
                outstandingSchoolList={["S5, TWGHs Chen Zao Men College"]}
                excellentNameList={["WONG Hei Lung 王禧龍"]}
                excellentSchoolList={["S5, TWGHs Chen Zao Men College"]}
                hardwork={27}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={[
                    "LAW Man Hei 羅文禧",
                    "LEUNG Joshua 梁捷",
                    "MA Chun Hin 馬浚軒"
                ]}
                outstandingSchoolList={[
                    "S5, Wah Yan College Hong Kong",
                    "S4, La Salle College",
                    "S5, S.K.H. Tsang Shiu Tim Secondary School"
                ]}
                excellentNameList={["CHENG Yui To 鄭睿陶", "WONG Po Chai 王報齎"]}
                excellentSchoolList={[
                    "S2, Fukien Secondary School",
                    "S5, CUHK FAA Thomas Cheung Secondary School"
                ]}
                hardwork={26}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={["LAI Chun Yin 賴俊延", "TAM Joe 譚早言"]}
                outstandingSchoolList={[
                    "S3, St. Bonaventure College and High School",
                    "S4, Shatin Tsung Tsin Secondary School"
                ]}
                excellentNameList={[
                    "LAM Emmett Michael",
                    "LEE Kai Fung Kevin 李啟峰"
                ]}
                excellentSchoolList={[
                    "S3, Meltza Academy",
                    "S4, Tonbridge School, UK"
                ]}
                hardwork={28}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["LAU Kam Ming 劉錦明", "TIN Tsz Yau 田子由"]}
                outstandingSchoolList={[
                    "S5, St. Louis School",
                    "S6, Sheng Kung Hui Lam Kau Mow Secondary School"
                ]}
                excellentNameList={["HUI Ying Kit 許英傑"]}
                excellentSchoolList={["S6, Wong Shiu Chi Secondary School"]}
                hardwork={11}
            />




        </div>
    );
}