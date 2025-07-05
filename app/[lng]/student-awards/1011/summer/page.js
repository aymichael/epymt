import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2010-2011";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry (A + B)
                outstandingNameList={[
                    "Kung Wing Kit 龔榮傑",
                    "Kwan Man Ho 關旻浩",
                    "Lee Cheuk Yin 李卓彥"
                ]}
                outstandingSchoolList={[
                    "F5, St. Francis Xavier's School, Tsuen Wan",
                    "F6, TWGHs Li Ka Shing College",
                    "F6, TWGHs Li Ka Shing College"
                ]}
                excellentNameList={[
                    "Chan Ho Wai 陳浩維",
                    "Ngan Chi Bun 顏智彬",
                    "Wong Nga Lai 黃雅麗",
                    "Chung Wing Shan 鍾榮山",
                    "Lau Chun Pong 劉振邦",
                    "Ng Wai Fung 吳偉峰"
                ]}
                excellentSchoolList={[
                    "F5, Shun Lee Catholic Secondary School",
                    "F5, Law Ting Pong Secondary School",
                    "F5, Madam Lau Kam Lung Secondary School of MFBM",
                    "F4, TWGHs S C Gaw Memorial College",
                    "F4, Carmel Secondary School",
                    "F6, St. Francis Xavier's School"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={[
                    "Choi Pui Tung 蔡沛彤",
                    "Ho Ching Hang 何靖衡",
                    "Lau Chun Ting 劉振庭"
                ]}
                outstandingSchoolList={[
                    "F6, Baptist Lui Ming Choi Secondary School",
                    "F6, Yuen Long Merchants Association Secondary School",
                    "F1, St. Paul's Co-educational College"
                ]}
                excellentNameList={[
                    "Chan Chu Kin 陳柱堅",
                    "Chan Yiu Lai 陳耀禮",
                    "Suen Shui Yan 孫彗甄"
                ]}
                excellentSchoolList={[
                    "F5, Sha Tin Government Secondary School",
                    "F6, Po Leung Kuk Vicwood KT Chong Sixth Form College",
                    "F4, Madam Lau Kam Lung Secondary School of MFBM"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["Cho Ki Kit Edward 曹祺傑"]}
                outstandingSchoolList={["F7, Rosaryhill School"]}
                excellentNameList={[
                    "Lam Yuk Shing 林煜城",
                    "Li Chui Chi Angie 李翠姿",
                    "Tsoi Kwok Wing 蔡國榮"
                ]}
                excellentSchoolList={[
                    "F5, Tang King Po School",
                    "F7, St. Paul's Secondary School",
                    "F7, Po Leung Kuk Centenary Li Shiu Chung Memorial College"
                ]}
                hardwork={undefined}
            />


        </div>
    );
}