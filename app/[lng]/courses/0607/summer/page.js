import Link from 'next/link';

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    幾何學的應用廣泛深刻，發展源遠流長，是數學的重要分支。中學數學課程所涵蓋的，只是簡單的「歐幾里德幾何」和以坐標系統來描述的「解析幾何」。這些傳統的幾何學早在18世紀以前，便已發展完備。而推動近代幾何進展的「非歐幾何」和「微分幾何」卻是在19世紀以後才告面世的。這些劃時代的幾何學不單結集了偉大的數學家如高斯、羅巴切夫斯基、黎曼和龐卡萊等對幾何的深思與創見；它們的出現更標誌著人類在幾何學上的飛躍與革新。愛恩斯坦解構時空的「廣義相對論」正是建立在這新發展的幾何上的。
                </span>
                <span>
                    「數學英才精進課程」在這個暑期，將圍繞這些近代幾何的主流課題，分別開設「微分幾何初探」和「複數與非歐幾何」兩門精采的幾何課，向熱衷數學，有興趣探索、理解奇妙幾何世界的高中同學，介紹近代幾何的入門知識，課程專為高中同學而設，不要求高等數學作預備知識。同學可按個人的興趣與程度，選擇其中一科修讀，讓豐富新奇的幾何知識伴你渡過一個有意義的暑假！
                </span>
                <span>
                    踏入創辦的第五年，我們將秉承一貫的宗旨，以精心編排的課程，深入淺出的闡釋，引導有志向的年青數學英才，步入高等數學的殿堂。同時，我們更廣邀世界知名的學術翹楚親臨講學，讓同學擴闊視野，提升思維，對他們將來升讀大學及發展所長，將有深遠的效益。
                </span>
                <span>
                    在2006-07暑期班表現良好的學生，可優先入讀2006-07學年的<Link href="autumn" className=" text-indigo-500">秋季班</Link>。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span className="font-bold">CSS1613「微分幾何初探」</span>
                <span>本課程尤其適合中五或初次參加的同學修讀。在課程中，我們將微積分與幾何直觀緊密結合起來，引領同學跳出直線、平面和圓錐曲線的桎梏，進入多姿多釆的曲線與曲面的天地裏。同學將學習到偏微分；曲線的切向量、法向量和曲率；曲面的切平面、測地線和高斯曲率。由此，同學將可精確地描述空間的曲線運動，計算曲面的面積，並進一步認識如Gauss-Bonnet 等深刻的幾何定理。</span>
                <span className="font-bold">CSS1606「複數與非歐幾何」</span>
                <span>本課程特別適合程度較高或曾參予課程的同學作進階修讀。在課程中，我們將以複平面為起點，討論它的特殊幾何結構，以及其上變換的對稱性和保圓性，並介紹複平面與球面的對應和Mobius 變換；掌握了這些知識後，同學便可從一個現代的幾何觀點去理解各種「非歐幾何」異常有趣的性質，包括：平行與超平行、非歐距離、常曲率空間和非歐三角學等。</span>
                <span>剛過世的「微分幾何」大師陳省身教授曾這樣評價幾何學：「這是一門廣泛而偉大的學問。在最近幾千年來，幾何學有非常重要的發展，跟許多其他的科學不但有關係、有作用，而且是基本的因素。」</span>
                <span>要善用暑期，要嘗試了解近代幾何？參加「數學英才精進課程」的暑期班是你的最佳選擇。</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <table className="my-4">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            主題
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>CSS1613 微分幾何初探 (適合初次報讀同學)</span>
                            <span>CSS1606 複數與非歐幾何 (適合進階同學參與)</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>2005年7月16日至8月8日期間於香港中文大學上課。</span>
                            <span>(7/11-7/14)*, 7/15, 7/17, 7/19, 7/21, 7/24, 7/26, 7/28, 7/31, 8/2, 8/4, 8/7</span>
                            <span>基本課和講座：逢星期一、三、五的上午和下午。</span>
                            <span>* CSS1613「微分幾何初探」預備先修課，專為中五的同學作基礎知識訓練。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            內容
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span className="font-bold">CSS1613 微分幾何初探</span>
                            <span>曲線：平面和空間中的曲線，曲線的切向量、法向量、曲率，空間中的運動。</span>
                            <span>曲面上的曲線與測地線、切平面、高斯曲率、曲面面積和Gauss-Bonnet定理。</span>
                            <span>* 於2005年7月11至15日特設預備課，專為中五的同學作基礎知識訓練。</span>
                            <span className="font-bold">CSS1606 複數與非歐幾何</span>
                            <span>歐氏空間及複平面、平面與球面的對應、變換的對稱和保圓性、Mobius變換、曲線積分與非歐距離、平行與超平行、非歐三角學、曲面與曲率。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以講座、授課和導修的形式進行。</span>
                            <span>學業評核包括課堂與習作表現、小測及考試等。</span>
                            <span>考試日期定於2005年8月7日(星期一)。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為中五至中七學生，曾在2005-06學年研習的學生將獲優先考慮。
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
            <div className="overflow-x-auto mt-4 mb-2">
                <table className="w-full border whitespace-nowrap border-gray-300">
                    <tbody>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">客席講座</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">蔡文端教授</td>
                            <td className="px-4 py-2 border-b">加拿大多倫多大學</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">丘成桐教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學及美國哈佛大學</td>
                        </tr>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">基本課</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">區國強教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">張亮夫博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">溫有恆教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};