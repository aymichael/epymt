import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2006-2007";

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
                outstandingNameList={[
                    "Chan Wing Yu 陳永譽",
                    "Lee Pak Hin 李柏軒"
                ]}
                outstandingSchoolList={[
                    "F5, Sha Tin Government Secondary School",
                    "F4, Queen's College"
                ]}
                excellentNameList={[
                    "Cheung Chi Hin 張智軒",
                    "Ho Kai Fai 何啟輝",
                    "Lam Kin Kei 林健基",
                    "Ng Chun Yu 吳震宇",
                    "Yau Man Fung 邱文鋒"
                ]}
                excellentSchoolList={[
                    "F6, St. Louis School",
                    "F7, P.H.C. Wing Kwong College",
                    "F5, Sha Tin Government Secondary School",
                    "F6, Sha Tin Government Secondary School",
                    "F6, Po Leung Kuk KT Chong Sixth Form College"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // CSS1613 Towards Differential Geometry
                outstandingNameList={[
                    "Chan Wai Hung 陳惠雄",
                    "Lai Kwok Hung 賴國鴻",
                    "Lam Suk Hang 林淑恒"
                ]}
                outstandingSchoolList={[
                    "F7, Carmel Divine Grace Foundation Secondary School",
                    "F5, Carmel Divine Grace Foundation Secondary School",
                    "F6, St Paul's Secondary School"
                ]}
                excellentNameList={[
                    "Chan Hin Kit 陳顯傑",
                    "Chu Chun Ngai 朱振毅",
                    "Chu Ka Wai 朱家偉",
                    "Fong Pok Wai 方博威",
                    "Ho Wai Tat 何煒鐽",
                    "Loh Howe Yeung Howard 羅孝揚",
                    "Tsang Man Ho 曾民浩",
                    "Yip Lik Yau 葉力?"
                ]}
                excellentSchoolList={[
                    "F6, Cheung Sha Wan Catholic Secondary",
                    "F5, Kiangsu-Chekiang College (Shatin)",
                    "F6, Baptist Wing Lung Secondary School",
                    "F5, SKH Lam Woo Memorial Secondary School",
                    "F5, Chan Sui Ki (La Salle) College",
                    "F5, King's College",
                    "F5, Munsang College",
                    "F6, TWGHs Kap Yan Directors' College"
                ]}
                hardwork={undefined}
            />

        </div>
    );
}