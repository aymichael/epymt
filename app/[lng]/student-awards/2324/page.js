import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2023-2024";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t:courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <br />
            <AwardBox
                lang={lng}
                topic={courseT("tma")}
                outstandingNameList={["Pang Tsun Hin 彭浚軒"]}
                outstandingSchoolList={["S6, FDBWA Szeto Ho Secondary School"]}
                excellentNameList={["Chan Cheuk Lai 陳卓豊", "Kwok Chun Hang 郭俊亨"]}
                excellentSchoolList={["S5, NTHYK Yuen Long District Secondary School", "S4, NTHYK Yuen Long District Secondary School"]}
                hardwork={33}
            />
            <AwardBox
                lang={lng}
                topic={courseT("cnag")}
                outstandingNameList={["Ho Wai Kiu 何蔚僑"]}
                outstandingSchoolList={["S4, Munsang College (Hong Kong Island)"]}
                excellentNameList={["Ng Siu Kit 吳少傑", "Huang Chi Ming 黄治铭"]}
                excellentSchoolList={["S4, SKH Tang Shiu Kin Secondary School", "S5, NTHYK Yuen Long District Secondary School"]}
                hardwork={24}
            />
            <AwardBox
                lang={lng}
                topic={courseT("idm")}
                outstandingNameList={["Wong Chun Yuen 黃俊源"]}
                outstandingSchoolList={["S6, Munsang College (Hong Kong Island)"]}
                excellentNameList={["Lam Tsz Ho 林梓皓"]}
                excellentSchoolList={["S5, Pui Kiu Middle School"]}
                hardwork={18}
            />
            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={["Lam Tsz Ho 林梓皓"]}
                outstandingSchoolList={["S5, Pui Kiu Middle School"]}
                excellentNameList={["Dong Lun To 董倫濤", "Lo Yiu Ki Astin 盧曜祈"]}
                excellentSchoolList={["S5, Pentecostal School", "S5, Diocesan Boys' School"]}
                hardwork={27}
            />
            <AwardBox
                lang={lng}
                topic={courseT("tdg")}
                outstandingNameList={["Cheng Wing Yan 鄭泳昕", "Wong Chun Yuen 黃俊源"]}
                outstandingSchoolList={["S5, CCC Heep Woh College", "S6, Munsang College (Hong Kong Island)"]}
                excellentNameList={["Chan Kwun Wang, Eric 陳官弘", "Ng Ka Tsun 吳嘉浚", "Wu Kai Chun 吳佳臻"]}
                excellentSchoolList={["S6, Hoi Ping Chamber of Commerce Secondary School", "S1, SKH Tsang Shiu Tim Secondary School", "S4, Munsang College (Hong Kong Island)"]}
                hardwork={39}
            />
        </div>
    );
}