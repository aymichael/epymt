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
                    要配合社會發展的脈搏，把握時機，與現代科技世界接軌，為未來發展創造優勢， 「數學英才精進課程」正是為剛升預科的同學而設的。我們將於2005年10月8日至12月3日舉辦「數論與密碼學」秋季班，讓有志認識高等數學的同學，通過修讀這門有趣而又富挑戰性的學科，認識精妙的數論及其在密碼學上的種種應用。課程由中大數學系的老師任教，並設有導修小組作輔導，參與的同學將可在優越的大學環境中研習數學。
                </span>
                <span>
                    世界知名的學者將親臨主持講座，為同學介紹數學前沿的主流思想，令同學的潛能得以激發，眼界得以開闊，對他們將來升讀大學，一展所長，將有深遠的效益。
                </span>
                <span>
                    在秋季班表現良好的學生，可優先入讀2005-06學年的<Link href="spring" className=" text-indigo-500">春季班</Link>。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>有人稱廿一世紀為資訊的紀元。在我們身邊，無時無刻，都有不同的信息在流動、傳播。為確保資訊透過媒體如信件，無線電波，又或在互聯網上傳遞時的安全，密碼學 (Cryptography) 便成為了現代通訊科技中所不能缺少的知識。密碼編製者都挖空心思，要不斷開創新的密碼來保障通訊安全，而密碼破譯者卻時刻絞盡腦汁，試圖截取、破解密碼中的玄機。兩者的鬥爭就像一場智力的接力賽，推動著密碼學的發展。當中，起著關鍵作用的是一門既源遠流長，又充滿現代魅力的數學科學 - 數論 (Number Theory)。</span>
                <span>數論是數學中最古老的一個分支，也是至今始終活躍的數學研究領域。千百年來，偉大的數學家如費馬 (Fermat)、歐拉 (Euler)、高斯 (Gauss) 和黎曼 (Riemann) 等都先後走進座的寶庫中，發掘出當中令人目眩神迷的寶藏。2005年「邵逸夫獎」數學科學獎得主安德魯‧懷爾斯 (Andrew J. Wiles) 便是因証明了困惑數學家 350 多年的數論超級難題「費馬最後定理」：</span>
                <span className="text-center">「當整數 n≧3時，方程x<sup>n</sup> + y<sup>n</sup> = z<sup>n</sup>無滿足 xyz≠0 的整數解」</span>
                <span>而蜚聲國際，名留史冊。他的証明中所用到的，正是 20 世紀數論研究的尖端成果。</span>
                <span>中國在數論的發展，有著悠久的歷史，紀元前一世紀前後的數學名著《九章算術》中就討論了整數，介紹了輾轉相除法；在成書於四世紀的《孫子算經》中更給出了被世界數學界譽為「中國剩餘定理」的孫子定理。「中國剩餘定理」是當代密碼學最重要的基本定理之一！</span>
                <span>2005-06「數學英才精進課程」將為修讀預科的同學開設「數論與密碼學」秋季班，介紹這門大學水平的數學科目。同學將由淺入深，先學習數論的入門知識，包括：整數的整除性、歐幾里得算法、同餘式、「中國剩餘定理」、數論函數、歐拉定理、費馬小定理和連分數理論等。接著，再進一步學習密碼學的編碼與解碼理論，包括現代有關公開密鑰體制 (Public Key Cryptosystem) 及當中著名的 RSA 密鑰體制的理論基礎。課程經悉心編排，精煉深入，專為中學生而設，不要求任何高等數學作預備知識。</span>
                <span>「數論與密碼學」秋季班，是熱愛數學，尋求真正挑戰的同學步入數學寶庫的必然之選！</span>
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
                            2005年10月8日至12月3日期間逢星期六上午九時至下午五時於香港中文大學上課﹝公眾假期除外﹞。
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
                            <span>考試日期定於2005年12月3日(星期六)。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為預科班的學生，曾在2005-06學年暑期班研習的學生將獲優先考慮。
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
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Dennis Auroux</td>
                            <td className="px-4 py-2 border-b">Massachuset Institue of Technology, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Weinan E</td>
                            <td className="px-4 py-2 border-b">Princeton University, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Ronald Fintushel</td>
                            <td className="px-4 py-2 border-b">Michigan State University, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Charles Li</td>
                            <td className="px-4 py-2 border-b">Academic Sinica, Taiwan</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Sir James A Mirrlees</td>
                            <td className="px-4 py-2 border-b">The Chinese University of Hong Kong, H.K.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Yang Wang</td>
                            <td className="px-4 py-2 border-b">Georgia Institute of Technology, U.S.A.</td>
                        </tr>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">基本課</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">張家麟博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};