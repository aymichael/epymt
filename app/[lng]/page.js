import Image from "next/image";
import Link from "next/link";
import { translation } from '../i18n-index';
import { Trans } from "react-i18next/TransWithoutContext";

export default async function Home({ params }) {
  const { lng } = await params;
  const { t } = await translation(lng, 'intro');
  return (
    <div className="flex justify-center h-1/2 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-center">
          <Image
            src="/epymt/slogan.jpg"
            alt="EPYMT slogan"
            width={720}
            height={240}
          >
          </Image>
        </div>
        <span>
         <Trans
          i18nKey="intro"
          t={t}
          components={[<span key="0" className="font-bold"/>, <Link key="1" href="https://www.qef.org.hk/en/index.html" className="text-indigo-500 dark:text-indigo-300"/>]}
        /> 
        </span>
        <span>
          <Trans
            i18nKey="application"
            t={t}
            components={[<Link key="0" href={`${lng}/application`} className="text-red-500" />]}
          />
        </span>
      </div>
    </div >
  );
}

