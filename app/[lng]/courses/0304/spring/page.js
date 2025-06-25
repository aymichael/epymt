

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    要接受真正的數學訓練，培養邏輯的思考方式，學習「數學分析」是絕佳的途徑。 正是由於這樣，世界主流大學的數學系都會把「數學分析」訂為主修生的必修科目。 「數學英才精進課程」將於2004年2月7日推出「數學分析」春季班，向有興趣的同學介紹數學分析這門準確精密，影響深遠的學科。 課程專為預科學生而設，不要求高等數學作預備知識。 聞名世界的分析學家 R. Mazzeo 教授(美國史丹福大學)，將應邀為春季班的同學主持講座。 我們希望同學在專家學者的親身指導下，令學科知識有所增長，思維能力有所提升。 對同學日後升學進修將有莫大的幫助。
                </span>
                <span>
                    為了更配合同學的學習，我們在春季班安排了於平日傍晚舉行的導修班方便同學的參予。
                </span>
                <span>
                    在春季班表現良好的學生，可優先入讀2004-05年的暑期班。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>每種自然現象，從基本粒子的量子振動到宇宙的不斷膨漲，都展示出變化。 有些變化簡單而有規律，如日出日落、季節的循環往復；有些變化複雜而難料， 如金融市場的波動、疫症的突然爆發，各種變化都影響著我們的生活。 研究變化的數學，在中學的課程而言，可以用一個詞來概括 ── 微積分。</span>
                <span>認真學習數學的同學都知道，要深入了解微積分，必須理解、掌握它背後的數學理論 ── 數學分析， 這門大學程度的數學科目是步入高等數學殿堂的階梯。它要求嚴格的抽象推理和邏輯論証， 這不單可磨練學習者的數學技巧，更可提升他們的思維能力。 2004「數學英才精進課程」春季班，是專為有興趣學習數學分析的預科同學而設的。 課程將為同學深入細緻地介紹序列 (sequence)、級數 (series) 和函數的極限 (limit) 概念，並探討有關的收斂性 (convergence)， 這將是進一步討論函數的連續性 (continuity)、可微性 (differentiability) 和可積性 (integrability) 的基石。 我們將為同學介紹大數學家牛頓 (Newton)、尼布列玆 (Leibniz)、歐拉 (Euler)、魏爾斯特拉斯 (Weierstrass) 和柯西 (Cauchy) 等在這方面的卓越貢獻。今天，以數學分析為基礎發展出各式各樣，應用廣泛的現代數學，當中包括： 微分方程、動力系統、控制論，財經數學等。這些數學與我們社會的發展和進步息息相關。</span>
                <span>牛頓是歷史上最偉大的科學家之一，也是微積分的奠基人。 他把發展微積分的「先見之明」歸功於前輩的真知卓見。 他曾謙和地表示，如果他比別人更能高瞻遠矚，那是因為他站在巨人的肩膀上。 這裏的巨人，是指他的前輩伽利略、笛卡兒等。 同樣，年青人要在21世紀及早進升大學發展所長，投身科技事業，也要有類似的先見之明。</span>
                <span>參加「數學英才精進課程」學習先輩巨人的真知卓見。站在巨人的肩膀上，將會使你看得更深更遠！</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <table className="my-4">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            主題
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            數學分析
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>2004年2月7日至4月17日期間於香港中文大學上課。</span>
                            <span>基本課和講座：逢星期六上午。</span>
                            <span>導修討論班：星期六下午或某平日的傍晚。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以講座、授課和導修的形式進行。</span>
                            <span>學業評核包括課堂與習作表現、小測及考試等。</span>
                            <span>考試日期定於2004年4月24日(星期六)上午。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            主要為中六的學生，曾在秋季班研習的學生將獲優先考慮。
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
                            <td className="px-4 py-2 border-b">Prof. R. Mazzeo</td>
                            <td className="px-4 py-2 border-b">Stanford University, USA</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. R. Sommer</td>
                            <td className="px-4 py-2 border-b">Stanford University, USA</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">谷超豪教授</td>
                            <td className="px-4 py-2 border-b">中國溫州大學</td>
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
                            <td className="px-4 py-2 border-b">梁子威教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};