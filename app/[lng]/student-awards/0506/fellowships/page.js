import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2005-2006";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="fellowships" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <FellowshipsBox
  lang={lng}
  nameList={[
    "Cheng Hei Victor 鄭曦",
    "Fung Kit Ling Daisy 馮傑鈴",
    "Hung Ho Yeung 洪浩洋",
    "Lau Chung Yeung 劉仲陽",
    "Lee Pak Hin 李柏軒",
    "Lin Jessey 林杰茜",
    "Ng Chun Yu 吳震宇",
    "Ngoo Hung Wing 吳鴻榮",
    "Tsoi Yun Pui 蔡潤培",
    "Yau Kwok Chung 丘國沖"
  ]}
  schoolList={[
    "F6, Tsuen Wan Government Secondary School",
    "F6, St. Mary's Canossian College",
    "F4, Kwun Tong Maryknoll College",
    "F6, South Tuen Mun Government Secondary School",
    "F4, Queen's College",
    "F6, Diocesan Girls' School",
    "F6, Sha Tin Government Secondary School",
    "F6, Valtorta College",
    "F7, Sha Tin Government Secondary School",
    "F6, South Tuen Mun Government Secondary School"
  ]}
/>

        </div>
    );
}