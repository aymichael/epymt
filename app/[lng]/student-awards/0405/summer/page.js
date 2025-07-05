import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2004-2005";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""} // No topic specified
                outstandingNameList={[
                    "Chan Chin Pang 陳展鵬",
                    "Chiu Kim Hong Fraser 招劍航",
                    "Chong Fan Fei 莊奮飛",
                    "Fan Sin Tsun Edward 范善臻",
                    "Fong Chin Lung 方展龍",
                    "Ma Chit 馬喆",
                    "Tse Shu Tong 謝樹堂",
                    "Tsoi Yun Pui 蔡潤培"
                ]}
                outstandingSchoolList={[
                    "F7, Ju Ching Chu Secondary School",
                    "F6, Pui Kiu Middle School",
                    "F7, Queen's College",
                    "F7, Sha Tin Government Secondary School",
                    "F6, King's College",
                    "F6, Pui Ying College",
                    "F6, Sha Tin Government Secondary School",
                    "F5, Sha Tin Government Secondary School"
                ]}
                excellentNameList={[
                    "Chan Kei Yuen 陳佳源",
                    "Chan Tak Ho 陳德豪",
                    "Chan Tsz Him 陳子謙",
                    "Chiu Tsz Sum, Jason 趙紫參",
                    "Hui Yuen Ping 許源平",
                    "Lai Chun Kit 賴俊傑",
                    "Lam Wing Chung 林永聰",
                    "Siu Ho Chung 蕭浩翀",
                    "Wong Man Chung 王敏聰",
                    "Woo Kat Choi 胡吉才",
                    "Wu Cheuk Ki 胡焯祺"
                ]}
                excellentSchoolList={[
                    "F7, Salesian English School",
                    "F6, STFA Leung Kau Kui College",
                    "F7, Wa Ying College",
                    "F7, Yuen Long Public Secondary School",
                    "F5, Buddhist Sin Tak College",
                    "F7, Carmel Divine Grace Foundation Secondary School",
                    "F5, Po Leung Kuk Centenary Li Shiu Chung Memorial College",
                    "F5, Queen's College",
                    "F6, PLK Vicwood K.T. Chong Sixth Form College",
                    "F6, Sing Yin Secondary School",
                    "F6, Raimondi College"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}