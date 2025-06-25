

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    「數學英才精進課程」將在2003年7月推出為期3週（每星期上課3天）的暑期班，主題是引人入勝的「複數與非歐幾何」。 暑期班由本系教授任教，並將邀請各地的知名學者作客席講者，助教導師則由本地及海外大學的本科或研究生擔任。 汲取去年暑期的經驗，今年的暑期課程集中討論幾何的概念，從而啟發同學們更深的興趣以增強教與學的成果。 此外，去年的暑期班的學生，無論來自本地或海外，都是學校裡出類拔萃的一群。 這個暑期班無疑是擴闊視野和結識學術良朋的好機會。
                </span>
                <span>
                    在暑期班表現良好的學生，可優先入讀全年課程的其他科目。 暑期班已於2003年3月11日開始接受網上報名，歡迎有興趣的同學參加。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>什麼是非歐幾何 (Non-Euclidean Geometry)？它與複數之間有什麼關係？ 這些問題的答案，都可在「數學英才精進課程」的暑期班中找到。</span>
                <span>〝平面上三角形的內角和是180度〞這個小學生也知道的數學事實， 它的嚴格証明早記載在距今約二千三百年前歐幾里得 (Euclid) 的經典著作─幾何原本 (Elements) 內。 証明中應用了著明的歐氏第五公設﹝平行公設﹞。由於這公設不像其他公設那樣簡單和明顯，自此以後， 不少數學家都試圖應用歐氏的其他公設去推導平行公設。然而，他們的嘗試都失敗了。 直到十九世紀，偉大的數學家高斯 (Gauss)、 Bolyai 和 Lobachevsky 等在這方面進行了深入的研究， 讓我們知道平行公設是不能由歐氏的其他公設導出的！他們的突破性思想，更促成了一門劃時代的學科─非歐幾何的誕生， 它革新了人類對幾何學的基本看法。這些想法更導致日後黎曼幾何 (Riemannian Geometry) 的出現， 推動了廣義相對論 (General Relativity) 的發展，影響著今天的科學研究。</span>
                <span>為了向中學同學介紹非歐幾何，我們應用大數學家 F. Klein 和 H. Poincaré 的觀點，取向是具體實在，充滿幾何直觀的。 由同學熟知的複數平面出發，我們引入映射，等距變換等概念，讓同學有效地掌握複數平面的幾何性質。 接著我們將介紹在單位圓內的非歐幾何模型，同學將可透過基本的複數運算，體驗和理解非歐幾何的各種現象。 我們對科目內容的闡述，力求深入淺出，清楚流暢。要知道非歐幾何中三角形的內角和是多少？ 要認識非歐幾何的種種有趣性質？「精進課程」的暑期課程是你不能錯過的!</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <table className="my-4">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            主題
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            複數與非歐幾何
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span><strong>因學校暑期的延遲，本科上課日期更改如下。</strong>時間、地點照舊為上午九時至下午五時於香港中文大學。</span>
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border border-gray-300 text-center text-sm">
                                    <thead className="font-bold">
                                        <tr>
                                            <th className="px-4 py-2 border">Mon</th>
                                            <th className="px-4 py-2 border">Tue</th>
                                            <th className="px-4 py-2 border">Wed</th>
                                            <th className="px-4 py-2 border">Thu</th>
                                            <th className="px-4 py-2 border">Fri</th>
                                            <th className="px-4 py-2 border">Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border" colSpan="5"></td>
                                            <td className="px-4 py-2 border">Jul 19</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border" colSpan="2"></td>
                                            <td className="px-4 py-2 border">Jul 23</td>
                                            <td className="px-4 py-2 border"></td>
                                            <td className="px-4 py-2 border">Jul 25</td>
                                            <td className="px-4 py-2 border"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Jul 28</td>
                                            <td className="px-4 py-2 border"></td>
                                            <td className="px-4 py-2 border">Jul 30</td>
                                            <td className="px-4 py-2 border"></td>
                                            <td className="px-4 py-2 border">Aug 1</td>
                                            <td className="px-4 py-2 border"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Aug 4</td>
                                            <td className="px-4 py-2 border">Aug 5</td>
                                            <td className="px-4 py-2 border" colSpan="4"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <span><strong>客席講座則不一定在上課日舉行。</strong></span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            內容
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            歐氏空間及複平面、平面與球面的對應、變換的對稱和保圓性、Möbius 變換；曲線積分與非歐距離、平行與超平行、非歐三角學、曲面與曲率
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            課程將以講座、授課和導修的形式進行。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為現正就讀F5-F7的學生，曾在2002-03學年研習的學生將獲優先考慮。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            學分認可及學費
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <ul className="list-disc list-inside">
                                <li>暑期班將改於2003年8月11日舉行考試。</li>
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
                            <td className="px-4 py-2 border-b">鄺英銓教授</td>
                            <td className="px-4 py-2 border-b">美國北伊利諾州大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">羅春光教授</td>
                            <td className="px-4 py-2 border-b">臺灣國立中山大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">梁迺聰教授</td>
                            <td className="px-4 py-2 border-b">美國明尼蘇達州大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">丘成桐教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學及美國哈佛大學</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">楊傑明教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
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
                            <td className="px-4 py-2 border-b">倪思敏教授</td>
                            <td className="px-4 py-2 border-b">美國南喬治亞州立大學</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};