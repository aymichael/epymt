import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2008-2009";

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
                    "Chan Hon Kuen 陳瀚權",
                    "Kwan Shing Hin 關丞軒",
                    "Lam Wai Yeung 林偉揚"
                ]}
                schoolList={[
                    "F7, Kwun Tong Maryknoll College",
                    "F5, Shun Lee Catholic Secondary School",
                    "P7, P.L.K. Vicwood K.T. Chong Sixth Form College"
                ]}
            />
        </div>
    );
}