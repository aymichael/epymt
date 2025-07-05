import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2019-2020";

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
                outstandingNameList={["LUK Ka Chun 陸嘉俊"]}
                outstandingSchoolList={["S4, Tung Wah Group of Hospitals Wong Fut Nam College"]}
                excellentNameList={["HON Kwan Shun Quinson 韓君信"]}
                excellentSchoolList={["S4, SKH Bishop Mok Sau Tseng Secondary School"]}
                hardwork={19}
            />

            <AwardBox
                lang={lng}
                topic={courseT("cnag")} 
                outstandingNameList={["FONG Shi Yuk 方是昱", "LAM Chak Yu 林澤宇"]}
                outstandingSchoolList={[
                    "S4, Lok Sin Tong Ku Chiu Man Secondary School",
                    "S5, Sheng Kung Hui Kei Hau Secondary School"
                ]}
                excellentNameList={["CHAN Hok Yin 陳學賢", "CHAN Yin Ching 陳涎政"]}
                excellentSchoolList={[
                    "S3, Pui Ching Middle School",
                    "S5, Christian Alliance SW Chan Memorial College"
                ]}
                hardwork={33}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={["LEUNG Chun Fung 梁振鋒", "TONG Nok To Omega 湯諾陶"]}
                outstandingSchoolList={[
                    "S5, G.T. (Ellen Yeung) College",
                    "S7, Pui Ching Middle School"
                ]}
                excellentNameList={["LAM Emmett", "YEUNG Wai Ho 楊煒浩", "YUNG Yat Hei 翁溢熙"]}
                excellentSchoolList={[
                    "S6, Meltza Academy",
                    "S5, Sha Tin Government Secondary School",
                    "S5, Valtorta College"
                ]}
                hardwork={36}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={["CHUI Tsz Fung 徐子豐", "HSIEH Chong Ho 謝昶豪"]}
                outstandingSchoolList={[
                    "P6, Ma Tau Chung Government Primary School",
                    "S3, Tsuen Wan Government Secondary School"
                ]}
                excellentNameList={[
                    "CHANG JEFFREY SIN TO",
                    "LAM Ching Kiu Ryan 林正喬",
                    "SHUNG Man Hin 宋文軒"
                ]}
                excellentSchoolList={[
                    "S3, St. Paul's College",
                    "S6, St. Paul's Co-educational College",
                    "S4, Po Leung Kuk Celine Ho Yam Tong College"
                ]}
                hardwork={11}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["YEUNG Sin Hang Jason 楊善行"]}
                outstandingSchoolList={["S6, TWGHs Lui Yun Choy Memorial College"]}
                excellentNameList={["CHAN Tsz Hin 陳祉軒"]}
                excellentSchoolList={["S5, Pui Ching Middle School"]}
                hardwork={10}
            />


        </div>
    );
}