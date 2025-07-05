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
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("cnneg")} // CSS1606 Complex Numbers and Non-Euclidean Geometry
                outstandingNameList={[
                    "Chan Ying Ying 陳瀅瀅",
                    "Cheung Ka Hei Kolen 張嘉禧",
                    "Tsoi Yun Pui 蔡潤培"
                ]}
                outstandingSchoolList={[
                    "F6, Pope Paul VI College",
                    "F6, Wah Yan College, Hong Kong",
                    "F6, Sha Tin Government Secondary School"
                ]}
                excellentNameList={[
                    "Lai Kai Tsun Johnson 黎啟進",
                    "Lam Wing Chung 林永聰"
                ]}
                excellentSchoolList={[
                    "F6, Baptist Lui Ming Choi Secondary School",
                    "F6, Po Leung Kuk Centenary Li Shiu Chung Memorial College"
                ]}
                hardwork={undefined}
            />

            <AwardBox
                lang={lng}
                topic={courseT("tdg")} // CSS1613 Towards Differential Geometry
                outstandingNameList={[
                    "Chan Wing Yu 陳永譽",
                    "Fung Yu Hin 馮宇軒",
                    "Hung Ho Yeung 洪浩洋",
                    "Ng Chun Yu 吳震宇",
                    "Yuen Chak Hei 袁澤曦"
                ]}
                outstandingSchoolList={[
                    "F4, Sha Tin Government Secondary School",
                    "F7, Sheng Kung Hui Tsang Shiu Tim Secondary School",
                    "F3, Kwun Tong Maryknoll College",
                    "F5, Sha Tin Government Secondary School",
                    "F5, Queen's College"
                ]}
                excellentNameList={[
                    "Chiu Cheuk Man 趙焯文",
                    "Fung Kit Ling Daisy 馮傑鈴",
                    "Huen Tat Ming 禤達明",
                    "Lau Chung Yeung 劉仲陽",
                    "Lee Pak Hin 李柏軒",
                    "Wong Yu Yeung 黃宇洋",
                    "Yim Wing Yin 嚴永賢"
                ]}
                excellentSchoolList={[
                    "F5, Chiu Lut Sau Memorial Secondary School",
                    "F5, St. Mary's Canossian College",
                    "F5, Christian Alliance SC Chan Memorial College",
                    "F5, South Tuen Mun Government Secondary School",
                    "F3, Queen's College",
                    "F6, St. Francis of Assisi's College",
                    "F5, South Tuen Mun Government Secondary School"
                ]}
                hardwork={undefined}
            />
        </div>
    );
}