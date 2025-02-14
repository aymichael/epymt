import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center h-1/2 w-full">
      <div className="flex flex-col">
        {/* <div className="flex flex-col">
          <span className="text-2xl font-bold font-serif text-[#2b0102]">Enrichment Programme for Young Mathematics Talents</span>
          <span className="text-2xl font-[標楷體] text-[#2b0102]">數學英才精進課程</span>
        </div> */}
        <div className="flex w-full justify-center">
          <Image
            src="/slogan.jpg"
            alt="EPYMT slogan"
            width={720}
            height={240}
          >
          </Image>
        </div>
        <span className="text-base font-sans sm:m-4 m-2">
          本課程獲得 <strong>William Benter</strong> 先生的慷慨捐助於2002年創立。 2004至2006兩個學年的活動則由「<Link href="https://www.qef.org.hk/en/index.html" className="text-[#993300]">優質教育基金</Link>」撥款資助。 此後，課程以中文大學數學系籌得的經費持續發展。
          <br />
          This programme is founded in 2002 with the generous support of Mr. <strong>William Benter</strong>, Director, Quantrix Limited.
          <br />
          The activities in the academic year 2004-2006 are funded by the <Link href="https://www.qef.org.hk/en/index.html" className="text-[#993300]">Quality Education Fund</Link>. Then, the programme continues its development with private fund of the Department of Mathematics.
        </span>
        <span className="text-base font-sans sm:m-4 m-2">
          Application for summer classes: <Link href="aplplication" className="text-red-500">Click Here!</Link>
        </span>
        <span className="text-xs font-serif m-4">
          ©&nbsp;EPYMT
          <br />
          The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
          <br />
          Phone: (852) 3943 1984 / 3943 5295
          <br />
          Fax: (852) 2603 5154
          <br />
          Email: <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-[#993300]">epymt@math.cuhk.edu.hk</Link>
        </span>
      </div>
    </div >
  );
}
