import Image from "next/image";
import Link from "next/link";
import { translation } from '../i18n-index'

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
        <span className="text-base/8">
          {t("intro.sentence_1")}<strong>William Benter</strong>{t("intro.sentence_2")}<Link href="https://www.qef.org.hk/en/index.html" className="text-indigo-500 dark:text-indigo-300">{t("intro.link")}</Link>{t("intro.sentence_3")}
        </span>
        <span className="text-base/8">
          Application for summer classes: <Link href="application" className="text-red-500">Click Here!</Link>
        </span>
      </div>
    </div >
  );
}
