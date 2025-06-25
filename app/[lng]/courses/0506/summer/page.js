import Link from 'next/link';

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
                    幾何學的應用廣泛深刻，發展源遠流長，是數學的重要分支。中學數學課程所涵蓋的，只是簡單的「歐幾里德幾何」和以坐標系統來描述的「解析幾何」。這些傳統的幾何學早在18世紀以前，便已發展完備。而推動近代幾何進展的「非歐幾何」和「微分幾何」卻是在19世紀以後才告面世的。這些劃時代的幾何學不單結集了偉大的數學家如高斯、羅巴切夫斯基、黎曼和龐卡萊等對幾何的深思與創見；它們的出現更標誌著人類在幾何學上的飛躍與革新。愛恩斯坦解構時空的「廣義相對論」正是建立在這新發展的幾何上的。
                </span>
                <span>
                    「數學英才精進課程」在這個暑期，將圍繞這些近代幾何的主流課題，分別開設「微分幾何初探」和「複數與非歐幾何」兩門精采的幾何課，向熱衷數學，有興趣探索、理解奇妙幾何世界的高中同學，介紹近代幾何的入門知識，課程專為高中同學而設，不要求高等數學作預備知識。同學可按個人的興趣與程度，選擇其中一科修讀，讓豐富新奇的幾何知識伴你渡過一個有意義的暑假！
                </span>
                <span>
                    踏入創辦的第四年，課程得到「優質教育基金」的支持，令人鼓舞。我們將秉承一貫的宗旨，以精心編排的課程，深入淺出的闡釋，引導有志向的年青數學英才，步入高等數學的殿堂。同時，我們更廣邀世界知名的學術翹楚親臨講學，讓同學擴闊視野，提升思維，對他們將來升讀大學及發展所長，將有深遠的效益。
                </span>
                <span>
                    在2005-06暑期班表現良好的學生，可優先入讀2005-06學年的<Link href="autumn" className=" text-indigo-500">秋季班</Link>。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>哪一種幾何學可以描述物質在曲面上的運動？在中學所學習到的「歐幾里得幾何」不足以擔當這任務！ 這種複雜微妙的運動必須以一種更靈活、更精確的幾何學來刻劃， 「微分幾何」(Differential Geometry) 就是在這種需求下發展出來的一門現代數學。 「微分幾何」把分析與幾何緊密地結合在一起，它不單是研究精微運動的必要工具， 其應用更滲透到當今的種種尖端科技之中， 學習空間的曲線 (Curve) 與曲面 (Surface) 的幾何性質， 正是邁向認識「微分幾何」的第一步！</span>
                <span>在香港的中學數學課程中，同學所接觸到的大都是平面上簡單的圓錐曲線，這絕對不能滿足有能力、 有興趣的同學進一步了解空間曲線與曲面的訴求。有見及此，2004年「數學英才精進課程」暑期班的主題將訂為「微分幾何初探」， 就空間中曲線與曲面作出深入詳盡的介紹，並討論它們豐富多采的幾何性質。 課程內容包括：曲線及曲面的參數化 (Parametrization)、曲線的弧長、切向量和曲率 (Curvature)； 曲面的面積、切平面、法曲率 (Normal Curvature) 、高斯曲率 (Gauss Curvature) 和 Gauss-Bonnet 定理等。 課題的講授力求具體清晰、深入淺出，好讓同學感受一下當代「微分幾何」的深刻精妙之處。 同學將體驗到如何把中學學到的解析幾何 (Analytic Geometry) 及微積分結合起來，使之成為強而有力的工具， 用以理解曲線與曲面的種種變化，這對日後升讀大學、進修科學或工程的專業，將有極大的幫助。</span>
                <span>事實上，曲線與曲面的運用已遍及我們的生活：尖端科研如黎曼流形 (Riemannian Manifold) 上的幾何研究、 高能物理中的弦理論 (String Theory)；實際應用如電腦動畫、電影製作、建築設計 …，可謂不勝枚舉。</span>
                <span>「微分幾何」由偉大的數學家高斯 (Gauss) 和黎曼 (Riemann) 開創發展至今，可說是名家輩出， 成就輝煌。愛因斯坦的「廣義相對論」就是應用「微分幾何」來表達的。 當代數學大師陳省身教授和丘成桐教授，正是在這方面作出突破性的研究而蜚聲國際， 名揚中外。</span>
                <span>參加我們的暑假班，從基礎入手，追隨大師的足跡，步入探索「微分幾何」之路， 讓千姿百態的曲線與曲面伴你渡過一個既充實、又有意義的暑假！</span>
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
                            <span>(7/11-7/16)*, 7/18, 7/20, 7/22, 7/25, 7/27, 7/28, 8/1, 8/3, 8/5, 8/8</span>
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
                            <span>考試日期定於2005年8月8日(星期一)。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為中五至中七學生，曾在2004-05學年研習的學生將獲優先考慮。
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
                            <td className="px-4 py-2 border-b">Prof. Steve Altschuler</td>
                            <td className="px-4 py-2 border-b">Bauer Center of Genomics, Harvard University, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Edna Cheung</td>
                            <td className="px-4 py-2 border-b">Perimeter Institute for Theoretical Physics, Canada</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Esmond Ng</td>
                            <td className="px-4 py-2 border-b">National Research Scientific Computing Center, Lawrence Berkeley Lab, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Konstantin Savvidis</td>
                            <td className="px-4 py-2 border-b">School of Finance and Management, Chiao Tung University, Taiwan</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">Prof. Lani Wu</td>
                            <td className="px-4 py-2 border-b">Bauer Center of Genomics, Harvard University, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">蕭文強教授</td>
                            <td className="px-4 py-2 border-b">香港大學</td>
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
                            <td className="px-4 py-2 border-b">張家麟博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 border-b">張亮夫博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
};