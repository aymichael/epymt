import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2008-2009";

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
                outstandingNameList={["Mak Cheuk Yu 麥焯如"]}
                outstandingSchoolList={["F6, SKH Bishop Baker Secondary School"]}
                excellentNameList={[
                    "Hung Ka Kin Kenneth 熊家健",
                    "Lau Chung Keung John 劉仲強",
                    "Wong Ming Cheung 王銘祥"
                ]}
                excellentSchoolList={[
                    "F4, Diocesan Boys' School",
                    "F6, Henrietta Secondary School",
                    "F5, Kwun Tong Maryknoll College"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // CSS1613A + CSS1613B Towards Differential Geometry
                outstandingNameList={[
                    "Leung Wai Ming 梁偉明",
                    "Monzon Abel 文裕",
                    "Lo On Hei Solomon 盧安晞"
                ]}
                outstandingSchoolList={[
                    "F6, Cheung Sah Wan Catholic Secondary School",
                    "F6, Chiu Lut Sau Memorial Secondary School",
                    "F6, Queen Elizabeth School Old Students' Association Secondary School"
                ]}
                excellentNameList={[
                    "Chan Pak Wah 陳伯樺",
                    "Choi Johnson 蔡昌興",
                    "Leung Ka Nam 梁嘉男",
                    "Leung Kim Sang 梁儉生",
                    "Li Pak Hin 李柏軒"
                ]}
                excellentSchoolList={[
                    "F3, Pui Kiu Middle School",
                    "F4, Pui Kiu Middle School",
                    "F4, C&MA Sun Kei Secondary School",
                    "F6, Wong Shiu Chi Secondary School",
                    "F4, Pui Kiu Middle School"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}