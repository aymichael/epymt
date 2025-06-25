import Link from "next/link";

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="text-2xl/8 font-bold text-center mb-4">
                2004至2006年度課程活動由<a href="https://www.qef.org.hk/en/index.html" className=" text-indigo-500">「優質教育基金」</a>撥款資助
            </span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    跨越了會考這關卡，開始預科學習生活的你，有沒有構思在學年的開始，把握時機，提升學養，尋求突破，為未來發展創造優勢？ 「數學英才精進課程」正是為此而設的。我們將於2004年9月25日至12月4日舉辦「數論與密碼學」秋季班，讓有志認識高等數學的同學，通過修讀這門有趣而又富挑戰性的學科，認識精妙的數論及其在密碼學上的種種應用。課程由中大數學系的教授任教，並有數學系的本科生與研究生擔任助教，參與的同學將可在優越的大學環境中研習數學。
                </span>
                <span>
                    世界知名的學者將親臨主持講座，為同學介紹數學前沿的主流思想，令同學的潛能得以激發，眼界得以開闊，對他們將來升讀大學，一展所長，將有深遠的效益。
                </span>
                <span>
                    在秋季班表現良好的學生，可優先入讀2004-05學年的<Link href="spring" className=" text-indigo-500">春季班</Link>。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <div className="flex justify-center">
                    <div className="group">
                    <span className="italic block group-hover:hidden">「三人同行七十稀，五樹梅花廿一枝，<br />七子團圓正半月，除百零五便得知。」</span>
                    <span className="italic hidden group-hover:block">「三人同行七十稀，五樹梅花廿一枝，<br />一百零八個好漢，數學英才精進課程。」<span className="text-xs">(by Github Copilot)</span></span>
                    </div>
                </div>
                <span>你知道這首流傳已久的「孫子歌」隱含了些什麼玄機？它給出了我國古代著名的「孫子算經」中“物不知數題”：</span>
                <span className="text-center italic">「今有物不知其數，三三數之賸二；五五數之賸三；七七數之賸二，問物幾何？」</span>
                <span>這數論 (Number Theory) 名題的解題關鍵，揭示了「同餘」(Congruence) 概念和「中國剩餘定理」(Chinese Remainder Theorem) 這兩個重要的數論課題的應用。事實上，這些重要的數論知識，正是現代密碼學 (Cryptography) 的入門基礎。當今資訊時代的成功，依賴於保護資訊的能力，密碼學正為此提供了編碼與解碼理論，是保障通訊或互聯網上私隱所不能缺少的。</span>
                <span>長久以來，數論在數學研究中的地位超然，是推動數學發展的主要動力之源，它極端困難的問題和精妙深刻的定理，向來是大數學家如費馬 (Fermat)、歐拉 (Euler)、高斯 (Gauss) 和黎曼 (Riemann) 等廢寢忘餐，鍥而不捨的研究對象。時至今日，數論的研究成果不僅引人注目，而且，近十多年來在科學技術，持別是在計算機及資訊科技方面獲得越來越重要的應用。尖端的密碼學所應用的代數幾何學 (Algebraic Geometry) 與解決費馬大定理 (Fermat Last Theorem) 的橢圓曲線 (Elliptic Curves) 理論，正是數論研究所衍生而來的！</span>
                <span>2004-05「數學英才精進課程」將為修讀預科的同學開設「數論與密碼學」秋季班，介紹這門大學水平的數學科目。同學將由淺入深，先學習數論的入門知識，包括：整數的整除性、歐幾里得算法、同餘式、「中國剩餘定理」、數論函數、歐拉定理、費馬小定理和連分數理論等。再進一步學習密碼學的編碼與解碼理論，包括現代有關公開密鑰體制 (Public Key Cryptosystem) 及當中著名的 RSA 密鑰體制的理論基礎。課程經悉心編排，精煉深入，專為中學生而設，不要求任何高等數學作預備知識。</span>
                <span>熱愛數學，尋求真正挑戰的同學，「數論與密碼學」秋季班是你步入高等數學殿堂的必然之選！</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <table className="my-4">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            主題
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            數論與密碼學
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            2004年9月25日至12月4日期間逢星期六上午九時至下午五時於香港中文大學上課﹝公眾假期除外﹞。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            內容
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <ul className="list-disc list-inside">
                                <li>整數的整除性、歐幾里得算法、同餘、中國剩餘定理</li>
                                <li>一次及二次同餘式、數論函數、歐拉定理、費馬小定理和連分數理論</li>
                                <li>編碼與解碼、公開密鑰體制和 RSA 密鑰體制基礎</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以講座、授課和導修的形式進行。</span>
                            <span>學業評核包括課堂與習作表現、小測及考試等。</span>
                            <span>考試日期定於2004年12月4日(星期六)。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為預科班的學生，曾在2004-05學年暑期班研習的學生將獲優先考慮。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            學分認可及學費
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <ul className="list-disc list-inside">
                                <li>考試合格的學生將獲頒授証書。</li>
                                <li>考試合格的學生如入讀香港中文大學學士學位課程，可獲大學承認的2學分。</li>
                                <li>根據大學規定，學費為港幣二千元。（因經濟理由在中學獲學費減免的學生，於提供有關証明文件後，也可在本班得到同樣比例的學費減免。）</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl/8 underline underline-offset-8">教授及暫定客席講者</span>
            <div className="overflow-x-auto mt-4 mb-2 min-w-0">
                <table className="w-full border whitespace-nowrap border-gray-300">
                    <tbody>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">客席講座</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">區國強教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">陳繁昌教授</td>
                            <td className="px-4 py-2 border-b">美國加州大學洛杉磯分校理學院院長</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">張亮夫博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. Xiao-Song Lin</td>
                            <td className="px-4 py-2 border-b">University of California, Riverside, USA</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. Feng Luo</td>
                            <td className="px-4 py-2 border-b">Rutgers University, USA</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. John Paulos</td>
                            <td className="px-4 py-2 border-b">Temple University, USA</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">丘成桐教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學及美國哈佛大學</td>
                        </tr>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">基本課</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">龐煒恩博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};