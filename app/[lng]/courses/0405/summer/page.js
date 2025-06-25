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
                    「數學英才精進課程」將於2004年7月17日至8月9日舉辦「微分幾何初探」暑期班， 為有興趣的同學介紹曲線與曲面的幾何學。這個富挑戰性的課程將引領同學見識到如何將分析與幾何共冶一爐， 為他們的數學發展帶來新的體會與創見，是有志進一步認識高等數學的同學所不能錯過的！
                </span>
                <span>
                    踏入創辦的第三年，課程得到「優質教育基金」的支持，令人鼓舞。我們將秉承一貫的宗旨， 以精心編排的課程，深入淺出的闡釋，引導有志向的年青數學英才，步入高等數學的殿堂。 同時，我們更廣邀世界知名的學術翹楚親臨講學，讓同學擴闊視野，提升思維， 對他們將來升讀大學及發展所長，將有深遠的效益。
                </span>
                <span>
                    同學與志同道合的中學精英在大學聚首研習數學，由中大數學系的教授任教， 並有來自知名大學的數學本科生與研究生擔任助教，這實在是一個結交學術良朋， 善用暑期，激發潛能，再創高峰的寶貴機會！
                </span>
                <span>
                    在暑期班表現良好的學生，可優先入讀2004-05學年的<Link href="autumn" className=" text-indigo-500">秋季班</Link>。
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
                            微分幾何初探
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>2004年7月17日至8月9日期間於香港中文大學上課。</span>
                            <span>7/17, 7/19, 7/21, 7/23, 7/26, 7/28, 7/30, 8/2, 8/4, 8/6, 8/9</span>
                            <span>基本課和講座：逢星期一、三、五的上午和下午。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            內容
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>曲線：平面和空間中的曲線，曲線的切向量、法向量，弧長與速率，參數方程和極坐標，曲率、接觸圓與加速度，旋轉數與全曲率，空間中的運動。</span>
                            <span>曲面：曲面的參數化，曲面上的曲線與測地線，切平面，曲面面積，法曲率和高斯曲率， Gauss-Bonnet 定理。</span>
                            <span>課題的介紹，將以簡單例子入手，力求具體清晰。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以講座、授課和導修的形式進行。</span>
                            <span>學業評核包括課堂與習作表現、小測及考試等。</span>
                            <span>考試日期定於2004年8月9日(星期一)。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為中五至中七學生，曾在2003-04學年研習的學生將獲優先考慮。
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
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">羅鋒教授</td>
                            <td className="px-4 py-2 border-b">Rutgers University, USA 美國羅格斯大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">鄧平德博士</td>
                            <td className="px-4 py-2 border-b">Intel Corporation, USA 美國英特爾公司</td>
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
                            <td className="px-4 py-2 border-b">區國強教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">鄺英銓教授</td>
                            <td className="px-4 py-2 border-b">美國北伊利諾州大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">張家麟博士</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};