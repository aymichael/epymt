import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2010-2011";

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
                    "Chang Chi Ming Jimmy 張知銘",
                    "Choi Tsz Wing 蔡梓穎",
                    "Chow Ka Wing 周嘉榮",
                    "Hung Yiu Sun 洪耀燊",
                    "Kwan Yee Wai 關綺慧",
                    "Li Sze Yung 李思湧",
                    "Tsui Ka Tsun Brian 崔嘉駿",
                    "Yeung Wing Chi 楊永智"
                ]}
                schoolList={[
                    "F7, Po Leung Kuk Celine Ho Yam Tong College",
                    "F6, The Methodist Lee Wai Lee College",
                    "F5, Christian Alliance S.C. Chan Memorial College",
                    "Grade 12, Diamond Bar High School",
                    "F6, St. Paul's Convent School",
                    "Grade 12, Nicholas County High School, Summersville, West Virginia, US",
                    "F4, St. Joseph's College",
                    "F7, The Methodist Lee Wai Lee College"
                ]}
            />
        </div>
    );
}