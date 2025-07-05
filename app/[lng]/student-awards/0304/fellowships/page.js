import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2003-2004";

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
          "Chan Chin Pang 陳展鵬",
          "Chiu Kim Hong Fraser 招劍航",
          "Fan Sin Tsun 范善臻",
          "Fung Hok Kin 馮學堅",
          "Hung Hin Chung Matthew 孔憲聰",
          "Lam Sze Yui 林時銳",
          "Lo Yan Yancy 盧昕",
          "Ng Wai Cheung Alvin 吳偉翔",
          "Wong Hang Chi 黃衡之"
        ]}
        schoolList={[
          "F7, Ju Ching Chu Secondary School",
          "F6, Pui Kiu Middle School",
          "F6, Sha Tin Government Secondary School",
          "F7, S.K.H. Lam Kau Mow Secondary School",
          "F6, King's College",
          "F6, Carmel Divine Grace Foundation Secondary School",
          "F6, Diocesan Girls' School",
          "F6, St. Paul's Co-educational College",
          "F6, Munsang College"
        ]}
      />
    </div>
  );
}