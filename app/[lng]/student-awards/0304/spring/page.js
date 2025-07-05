import AwardBox from "../../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2003-2004";

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
                    "Cheung Yun Kuen 張潤權",
                    "Chiu Kim Hong Fraser 招劍航",
                    "Tse Shu Tong 謝樹堂",
                    "Wong Hang Chi 黃衡之"
                ]}
                outstandingSchoolList={[
                    "F6, Hong Kong Chinese Women's Club College",
                    "F6, Pui Kiu Middle School",
                    "F6, Sha Tin Government Secondary School",
                    "F6, Munsang College"
                ]}
                excellentNameList={[
                    "Chan Kam Ming 陳錦銘",
                    "Leung Ka Shing 梁嘉盛",
                    "Leung Wai Sing 梁偉星",
                    "Sun Kit Yee 辛傑誼",
                    "Tang Chong Man 鄧創文",
                    "Wong Weng Tong 黃榮東",
                    "Yuen Chi Hung 袁志雄"
                ]}
                excellentSchoolList={[
                    "F6, Hong Kong Chinese Women's Club College",
                    "F6, Carmel Divine Grace Foundation Secondary School",
                    "F6, Tang Siu Kin Victoria Government Secondary School",
                    "F6, Belilios Public School",
                    "F6, Hong Kong Chinese Women's Club College",
                    "F6, St. Joseph's College",
                    "F6, S.K.H. Chan Young Secondary School"
                ]}
                hardwork={undefined}
            />

        </div>
    );
}