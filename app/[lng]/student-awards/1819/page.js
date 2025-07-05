import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2018-2019";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("tma")} // SAYT1014 Towards Modern Algebra
                outstandingNameList={["YEUNG Sin Hang Jason 楊善行"]}
                outstandingSchoolList={["S4, Christian Alliance S C Chan Memorial College"]}
                excellentNameList={["LAI Chun Yin 賴俊延", "LAM Emmett"]}
                excellentSchoolList={[
                    "S5, St. Bonaventure College and High School",
                    "S4, Meltza Academy"
                ]}
                hardwork={29}
            />

            <AwardBox
                lang={lng}
                topic={courseT("cnag")} // SAYT1034 Complex Numbers and Analytic Geometry
                outstandingNameList={["YUEN Chi Ching 袁志澄"]}
                outstandingSchoolList={["S4, Elegantia College (Sponsored by Education Convergence)"]}
                excellentNameList={["CHOI Yu Wang 蔡宇泓", "SHUNG Man Hin 宋文軒"]}
                excellentSchoolList={[
                    "S3, Baptist Lui Ming Choi Secondary School",
                    "S3, Po Leung Kuk Celine Ho Yam Tong College"
                ]}
                hardwork={30}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // SAYT1134 Towards Differential Geometry
                outstandingNameList={["CHEUNG Ho Kan Howard 張可勤"]}
                outstandingSchoolList={["S6, Ling Liang Church M H Lau Secondary School"]}
                excellentNameList={[
                    "BAI Zhiyuan 白致遠",
                    "CHAN Chun Pang 陳駿鵬",
                    "LAM Yee Ching 林以正"
                ]}
                excellentSchoolList={[
                    "S5, La Salle College",
                    "S5, Po Leung Kuk Centenary Li Shiu Chung Memorial College",
                    "S5, CCC Kei Yuen College"
                ]}
                hardwork={24}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")} // SAYT1114 Number Theory and Cryptography
                outstandingNameList={["LU Jianchen 魯健辰"]}
                outstandingSchoolList={["S4, Kwun Tong Maryknoll College"]}
                excellentNameList={["YEUNG Sin Hang Jason 楊善行"]}
                excellentSchoolList={["S4, Christian Alliance S C Chan Memorial College"]}
                hardwork={17}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")} // SAYT1214 Understanding Non-Euclidean Geometry
                outstandingNameList={["TSANG Hing Lee Henry 曾慶利", "ZOU Xiang 鄒翔"]}
                outstandingSchoolList={[
                    "S6, TWGHs Lui Yun Choy Memorial College",
                    "S5, Po Leung Kuk Mrs. Ma Kam Ming-Cheung Fook Sien College"
                ]}
                excellentNameList={["FANG Yuansen 方源森"]}
                excellentSchoolList={["S5, Po Leung Kuk Tang Yuk Tien College"]}
                hardwork={7}
            />



        </div>
    );
}