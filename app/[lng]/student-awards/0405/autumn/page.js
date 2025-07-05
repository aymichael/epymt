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
            <Trans i18nKey="autumn" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""} // No topic specified
                outstandingNameList={[
                    "Au Ho Sum Samson 區灝琛",
                    "Chan Ying Ying 陳㼆㼆",
                    "Ho Siu King Stanley 何肇竟"
                ]}
                outstandingSchoolList={[
                    "F7, T.W.G.Hs. Kap Yan Directors' College",
                    "F6, Pope Paul VI College",
                    "F6, Baptist Lui Ming Choi Secondary School"
                ]}
                excellentNameList={[
                    "Lee Chi Cheung 李志祥",
                    "Lee Chun Hong 李俊康",
                    "Leung Wai Sing 梁偉星",
                    "Pang Man King 彭文敬"
                ]}
                excellentSchoolList={[
                    "F6, Buddhist Tai Hung College",
                    "F6, Sha Tin Government Secondary School",
                    "F6, Tang Siu Kin Victoria Government Secondary School",
                    "F6, Buddhist Sin Tak College"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}