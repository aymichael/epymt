import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2014-2015";

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
                    "Chiu Long Hin Vincent 招朗軒",
                    "Choi Wang Hei 蔡宏禧",
                    "Lam Tsz Hin Brian 藍子軒"
                ]}
                outstandingSchoolList={[
                    "S2, La Salle College",
                    "S4, Ying Wa College",
                    "S3, Buddhist Sin Tak College"
                ]}
                excellentNameList={[
                    "Chu Ka Hei Michael 朱家曦",
                    "Ho Siu Sum 何兆森",
                    "Ng Ka Ming 吳嘉明",
                    "Sou Pui Yan 蘇培焮",
                    "Tin Tsz Yau 田子由"
                ]}
                excellentSchoolList={[
                    "S4, Tak Sun Secondary School",
                    "S4, Po Leung Kuk Ma Kam Ming-Cheung Fook Sien College",
                    "S5, S.T.F.A. Lee Shau Kee College",
                    "S4, S. K. H. Tsang Shiu Tim Secondary School",
                    "S3, Sheng Kung Hui Lam Kau Mow Secondary School"
                ]}
                hardwork={38}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={[
                    "Lam Chin Hang 林展行",
                    "Yung Kin Yeung Nicholas 容健揚"
                ]}
                outstandingSchoolList={[
                    "S4, The Church of Christ in China Ming Yin College",
                    "S6, Brighton College"
                ]}
                excellentNameList={[
                    "Chan Ho Russell 陳昊",
                    "Cheung Chin Ho 張展豪",
                    "Cheung Kam Kiu 張錦翹",
                    "Lau Chak Yin 劉澤賢",
                    "Yiu Chi Nok Enoch 姚子諾"
                ]}
                excellentSchoolList={[
                    "S5, Lam Tai Fai College",
                    "S4, Queen Elizabeth School",
                    "S5, STFA Lee Shau Kee College",
                    "S4, Po Leung Kuk Mrs. Ma Kam Ming-Cheung Fook Sien College",
                    "S5, St. Paul's Co-educational College"
                ]}
                hardwork={40}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={[
                    "Chiu Long Hin Vincent 招朗軒",
                    "Lee Shun Ming Samuel 李信明"
                ]}
                outstandingSchoolList={[
                    "S2, La Salle College",
                    "S3, CNEC Christian College"
                ]}
                excellentNameList={[
                    "Chan Parky 陳栢麒",
                    "Suen Hin Nok Oscar 孫憲諾"
                ]}
                excellentSchoolList={[
                    "S4, Ho Fung College (Sponsored by Sik Sik Yuen)",
                    "S4, Phillips Exeter Academy"
                ]}
                hardwork={25}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={[]} // No Outstanding Award listed
                outstandingSchoolList={[]}
                excellentNameList={[
                    "Chan Yu Hin 陳宇軒",
                    "Wong Chun Fung 黃進鋒"
                ]}
                excellentSchoolList={[
                    "S6, Chiu Lut Sau Memorial Secondary School",
                    "S6, C.C.C. Heep Woh College"
                ]}
                hardwork={9}
            />
        </div>
    );
}