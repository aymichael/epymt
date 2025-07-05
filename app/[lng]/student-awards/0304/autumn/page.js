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
            <Trans i18nKey="autumn" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""} // No topic specified
                outstandingNameList={[
                    "Chiu Kim Hong Fraser 招劍航",
                    "Wong Weng Tong 黃榮東",
                    "Yuen Chi Hung 袁志雄"
                ]}
                outstandingSchoolList={[
                    "F6, Pui Kiu Middle School",
                    "F6, St. Joseph's College",
                    "F6, S.K.H. Chan Young Secondary School"
                ]}
                excellentNameList={[
                    "Cheung Chung Ching 張聰正",
                    "Chiu Tsz Sum Jason 趙紫參",
                    "Li Wai Leung 李惠樑",
                    "Lo Yan Yancy 盧昕",
                    "Tai Chi Kin 戴自健"
                ]}
                excellentSchoolList={[
                    "F6, Pok Oi Hospital Chan Kai Memorial College",
                    "Graduate, Yuen Long Public Secondary School",
                    "F6, S.K.H. Chan Young Secondary School",
                    "F6, Diocesan Girls' School",
                    "F6, St. Paul's Co-educational College"
                ]}
                hardwork={undefined}
            />

        </div>
    );
}