import FellowshipsBox from "../../fellowshipsBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2004-2005";

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
          "Chan Ying Ying 陳瀅瀅",
          "Chung Chun Pui 鍾鎮培",
          "Ho Siu King Stanley 何肇竟",
          "Hui Yuen Ping 許源平",
          "Lam Wing Chung 林永聰",
          "Lee Chun Hong 李俊康",
          "Mak Lok Hin 麥洛軒",
          "Pang Man King 彭文敬",
          "Pong Sze Lok Portia 龐士洛"
        ]}
        schoolList={[
          "F6, Pope Paul VI College",
          "F6, Carmel Pak U Secondary School",
          "F6, Baptist Lui Ming Choi Secondary School",
          "F6, Buddhist Sin Tak College",
          "F6, Po Leung Kuk Centenary Li Shiu Chung Memorial College",
          "F6, Sha Tin Government Secondary School",
          "F6, Sheng Kung Hui Tang Shiu Kin Secondary School",
          "F6, Buddhist Sin Tak College",
          "F6, Heep Yunn School"
        ]}
      />
    </div>
  );
}