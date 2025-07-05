import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2011-2012";

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
    "Hui Yuet 許閱",
    "Tse Yau Ngai 謝有毅"
  ]}
  outstandingSchoolList={[
    "F5, HKMA David Li Kwok Po College",
    "F4, Methodist College"
  ]}
  excellentNameList={[
    "Kwong Ho Yin 江浩然",
    "Leung Kwan Ho 梁君浩",
    "Pong Ka Ho 龐嘉浩",
    "Tsang Kwok Cheong 曾國昌"
  ]}
  excellentSchoolList={[
    "F4, Kiangsu-Chekiang College (Shatin)",
    "F5, PLK Mrs Ma Kam Ming-Cheung Fook Sien College",
    "F5, Wa Ying College",
    "F4, G.T. (Ellen Yeung) College"
  ]}
  hardwork={61}
/>

<AwardBox
  lang={lng}
  topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
  outstandingNameList={[
    "Chan Man Lok 陳文諾",
    "Chan Wai Ming 陳偉明",
    "Lam Suk Hang 伍祺昇"
  ]}
  outstandingSchoolList={[
    "F5, PLK Mrs Ma Kam Ming-Cheung Fook Sien College",
    "F7, Chinese YMCA Secondary School",
    "F6, St. Francis Xavier's College"
  ]}
  excellentNameList={[
    "Chan Lok Hang 陳樂行",
    "Chan Ting Him 陳霆謙",
    "Kwong Sze Hong 鄺思康",
    "Lau Chun Yip 劉振業"
  ]}
  excellentSchoolList={[
    "F4, Ho Fung College (Sponsored By Sik Sik Yuen)",
    "F5, Yuen Long Merchants Association Secondary School",
    "F5, St. Joseph's College",
    "F5, St. Paul's Co-Educational College"
  ]}
  hardwork={35}
/>

<AwardBox
  lang={lng}
  topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
  outstandingNameList={[
    "Chan Pak Wah 陳柏樺",
    "Li Pak Hin 李柏軒"
  ]}
  outstandingSchoolList={[
    "F6, Clementi Secondary School",
    "F7, Po Leung Kuk Vicwood K.T. Chong Sixth Form College"
  ]}
  excellentNameList={[
    "Ahn Yong Jin",
    "Chan Ho Wai 陳浩維",
    "Kwan Chung Hang 關仲衡",
    "Man Hiu Ying 文曉盈"
  ]}
  excellentSchoolList={[
    "Year 12, Chinese International School",
    "F4, Baptist Lui Ming Choi Secondary School",
    "F4, Sir Ellis Kadoorie Secondary School (West Kowloon)",
    "F4, Baptist Lui Ming Choi Secondary School"
  ]}
  hardwork={43}
/>

<AwardBox
  lang={lng}
  topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
  outstandingNameList={[
    "Chan Chu Kin 陳柱堅",
    "Fung Dalton Yin-Nam 馮彥楠"
  ]}
  outstandingSchoolList={[
    "F6, Sha Tin Government Secondary School",
    "Year 12, Shatin College"
  ]}
  excellentNameList={[
    "Lau Chun Pong 劉振邦",
    "Law Yuk Ting 羅育庭"
  ]}
  excellentSchoolList={[
    "F5, Carmel Secondary School",
    "F7, Chinese YMCA Secondary School"
  ]}
  hardwork={12}
/>

        </div>
    );
}