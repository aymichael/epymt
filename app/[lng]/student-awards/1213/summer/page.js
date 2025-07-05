import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2012-2013";

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
                outstandingNameList={["YU Hoi Wai 于鎧瑋"]}
                outstandingSchoolList={["F1, La Salle College"]}
                excellentNameList={[
                    "CHAN Tsz Yu 陳梓瑜",
                    "CHENG Chun Hin 鄭俊軒",
                    "CHEUNG Andy 張文康",
                    "CHOW Cheuk Lam 周卓霖",
                    "LIAW Ming Wai 廖明慧",
                    "NGAI Chi Hin 倪智軒"
                ]}
                excellentSchoolList={[
                    "F1, La Salle College",
                    "F4, Carmel Bunnan Tong Memorial Secondary School",
                    "F3, St. Joseph's College",
                    "F5, Po Leung Kuk Mrs. Ma Kam Ming-Cheung Fook Sien College",
                    "F4, Sha Tin Methodist College",
                    "F5, CCC Chuen Yuen College"
                ]}
                hardwork={58}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={[
                    "CHAN Yu Hin 陳宇軒",
                    "TSANG Chi Cheuk 曾之卓"
                ]}
                outstandingSchoolList={[
                    "F4, Chiu Lut Sau Memorial Secondary School",
                    "F4, St. Joseph's College"
                ]}
                excellentNameList={[
                    "FAN Tsz Ho 范子皓",
                    "KWAN Chung Hang 關仲衡",
                    "LO Chun Hong 盧俊匡",
                    "TSUNG Navin 曾浚軒"
                ]}
                excellentSchoolList={[
                    "F4, St. Paul's College",
                    "F5, Sir Ellis Kadoorie Secondary School (West Kowloon)",
                    "G12, Yew Chung International School (Secondary Section)",
                    "F5, HKUGA College"
                ]}
                hardwork={43}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={[
                    "HUI Yuet, Reading 許閱",
                    "WONG Chun Shing 黃俊誠"
                ]}
                outstandingSchoolList={[
                    "F6, HKMA David Li Kwok Po College",
                    "F3, Baptist Lui Ming Choi Secondary School"
                ]}
                excellentNameList={[
                    "Lo Chun Hong 盧俊匡",
                    "TSUI Ho Lung 徐浩龍",
                    "YU Hoi Wai 于鎧瑋"
                ]}
                excellentSchoolList={[
                    "G12, Yew Chung International School (Secondary Section)",
                    "F3, St. Joseph's College",
                    "F1, La Salle College"
                ]}
                hardwork={33}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={[
                    "HUI Yuet, Reading 許閱",
                    "WONG Sze Nga 王詩雅"
                ]}
                outstandingSchoolList={[
                    "F6, HKMA David Li Kwok Po College",
                    "F4, Diocesan Girls' School"
                ]}
                excellentNameList={[
                    "WONG Lung Fai 黃龍輝",
                    "YUEN Wai Kiu 袁蔚翹"
                ]}
                excellentSchoolList={[
                    "Year 2, HKUSPACE",
                    "F5, St. Francis' Canossian College"
                ]}
                hardwork={22}
            />

        </div>
    );
}