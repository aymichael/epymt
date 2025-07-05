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
            <Trans i18nKey="spring" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""} // No topic specified
                outstandingNameList={[
                    "Chan Ying Ying 陳瀅瀅",
                    "Chow Yat Tin 周逸天",
                    "Tsoi Yun Pui 蔡潤培"
                ]}
                outstandingSchoolList={[
                    "F6, Pope Paul VI College",
                    "F6, Wah Yan College, Kowloon",
                    "F6, Sha Tin Government Secondary School"
                ]}
                excellentNameList={[
                    "Ko Ho 高浩",
                    "Shiu Yeuk Lan Rachel 邵若蘭",
                    "Wong Ting Kam Leonard 黃廷鑒",
                    "Yuen Man Chun 袁文俊"
                ]}
                excellentSchoolList={[
                    "F6, Hong Kong Chinese Women's Club College",
                    "F6, St Mary's Canossian College",
                    "F6, Wah Yan College, Hong Kong",
                    "F6, Hong Kong Chinese Women's Club College"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}