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
            <Trans i18nKey="spring" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""}
                outstandingNameList={[
                    "Hung Ho Yeung 洪浩洋",
                    "Lee Pak Hin 李柏軒",
                    "Leung Chun Ho 梁鎮浩",
                    "Wong Kai Lun 汪啟麟"
                ]}
                outstandingSchoolList={[
                    "F4, Kwun Tong Maryknoll College",
                    "F4, Queen's College",
                    "F6, Tuen Mun Catholic Secondary School",
                    "F6, Po Leung Kuk 1983 Board of Directors' College"
                ]}
                excellentNameList={[
                    "Chan Tsz Yuen 陳旨遠",
                    "Li Ka Lun 李嘉倫",
                    "Ng Chun Yu 吳震宇"
                ]}
                excellentSchoolList={[
                    "F6, Christian Alliance College",
                    "F6, Sha Tin Government Secondary School",
                    "F6, Sha Tin Government Secondary School"
                ]}
                hardwork={undefined}
            />

        </div>
    );
}