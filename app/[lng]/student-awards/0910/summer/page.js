import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2009-2010";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("cnneg")} // CSS1606 Complex Numbers and Non-Euclidean Geometry
                outstandingNameList={["Lo On Hei Solomon 盧安晞"]}
                outstandingSchoolList={["F7, Queen Elizabeth School Old Students' Association Secondary School"]}
                excellentNameList={[
                    "Choi Johnson 蔡昌興",
                    "Choi Pui Tung 蔡沛彤"
                ]}
                excellentSchoolList={[
                    "F5, Pui Kiu Middle School",
                    "F5, Baptist Lui Ming Choi Secondary School"
                ]}
                hardwork={undefined}
            />
            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // CSS1609 → Number Theory and Cryptography
                outstandingNameList={["Tsoi Kwok Wing 蔡國榮"]}
                outstandingSchoolList={["F6, Po Leung Kuk Centenary Li Shiu Chung Memorial College"]}
                excellentNameList={[
                    "Chan Oiloom Vernon 陳靄麟",
                    "Lau Chun Pong 劉振邦",
                    "Wong Sze Nga 王詩雅"
                ]}
                excellentSchoolList={[
                    "F5, St. Francis Xavier's College",
                    "F3, Carmel Secondary School",
                    "F1, Diocesan Girls' School"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // CSS1613A + CSS1613B → Towards Differential Geometry
                outstandingNameList={[
                    "Siu Kam Hei 蕭金喜",
                    "Mak Ngar Ting 麥雅婷"
                ]}
                outstandingSchoolList={[
                    "F5, Tuen Mun Catholic Secondary School",
                    "F6, St Paul's Convent School"
                ]}
                excellentNameList={[
                    "Choi Pui Tung 蔡沛彤",
                    "Hung Man Wai Catherine 孔敏惠",
                    "Siu Kam Yuen 蕭金源",
                    "Wong Ching Yu 王証輿",
                    "Yeung Yuk Sing 楊毓昇",
                    "Lau Chun Sing 劉俊聲",
                    "Mak Tin Chak 麥天澤"
                ]}
                excellentSchoolList={[
                    "F5, Baptist Lui Ming Choi Secondary School",
                    "F5, St. Mary's Canossian College",
                    "F5, Tuen Mun Catholic Secondary School",
                    "F6, Kiangsu-Chekiang College (Shatin)",
                    "F7, Queen Elizabeth School Old Student's Association Secondary School",
                    "F6, St. Francis Xavier's College",
                    "F4, Shatin Pui Ying College"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}