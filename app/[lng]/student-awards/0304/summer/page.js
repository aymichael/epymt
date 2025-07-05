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
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={""} // No topic specified
                outstandingNameList={[
                    "Chan Ching Chi 陳正致",
                    "Fan Sin Tsun 范善臻",
                    "Hui Chun Yin 許俊彥",
                    "Wong Hang Chi 黃衡之",
                    "Wong Wing Hong 黃永康"
                ]}
                outstandingSchoolList={[
                    "F7, Baptist Lui Ming Choi Secondary School",
                    "F6, Sha Tin Governement Secondary School",
                    "F7, Hong Kong Chinese Women's Club College",
                    "F5, Munsang College",
                    "F5, La Salle College"
                ]}
                excellentNameList={[
                    "Cheung Wut Lik 張活力",
                    "Choi Hon Keung 蔡漢強",
                    "Fong Chin Lung 方展龍",
                    "Fung Yat Hei Eric 馮逸禧",
                    "Lam King Yeung 林經洋",
                    "Law Ho Sang 羅豪生",
                    "Liu Wendy 廖穎恆",
                    "Tang Chun Pong 鄧振邦",
                    "Tsui Chun Wa 徐振華",
                    "Wong Ka Wai 黃嘉偉",
                    "Wong Weng Tong 黃榮東"
                ]}
                excellentSchoolList={[
                    "F5, Queen's College",
                    "F6, La Salle College",
                    "F5, King's College",
                    "F5, La Salle College",
                    "F6, St Paul's Co-educational College",
                    "F7, Carmel Divine Grace Foundation Secondary School",
                    "Grade 11, St Paul's School, New Hampshire, USA",
                    "F5, La Salle College",
                    "F7, Carmel Divine Grace Foundation Secondary School",
                    "F6, Pentecostal Lam Hon Kwong School",
                    "F5, St Joseph's College"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}