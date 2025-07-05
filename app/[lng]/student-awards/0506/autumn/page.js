import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2005-2006";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="autumn" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={undefined}
                outstandingNameList={[
                    "Lee Pak Hin 李柏軒",
                    "Pang Tsun Kit 彭晉傑",
                    "Tsoi Yun Pui 蔡潤培",
                    "Yim Wing Yin 嚴永賢"
                ]}
                outstandingSchoolList={[
                    "F4, Queen's College",
                    "F6, South Tuen Mun Government Secondary School",
                    "F7, Sha Tin Government Secondary School",
                    "F6, South Tuen Mun Government Secondary School"
                ]}
                excellentNameList={[
                    "Chan Tsz Yuen 陳旨遠",
                    "Cheng Hei Victor 鄭曦",
                    "Hung Ho Yeung 洪浩洋",
                    "Wong Kai Lung 汪啟麟"
                ]}
                excellentSchoolList={[
                    "F6, Christian Alliance College",
                    "F6, Tsuen Wan Government Secondary School",
                    "F4, Kwun Tong Maryknoll College",
                    "F6, Po Leung Kuk 1983 Board of Directors' College"
                ]}
                hardwork={undefined}
            />

        </div>
    );
}