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
                    數學分析是現代數學的基礎。數學分析的思想方法和解題技巧是豐富多變的。對每一個熱愛數學，立志投身科技專業的同學來說，及早掌握這些方法和技巧，將在一生中受益無窮。 「數學英才精進課程」將於2005年2月19日推出「數學分析」春季班，向有興趣的同學介紹這門邏輯嚴謹，思考精密的學科。 課程專為預科學生而設，不要求高等數學作預備知識。 多位聞名世界的學者，將應邀為春季班的同學主持講座。 我們希望同學在專家學者的親身指導下，眼界得以開闊，潛能得以啟發，對他們日後將有深遠的影響。
                </span>
                <span>
                    為了更配合同學的學習，我們在春季班安排了於平日傍晚舉行的導修班方便同學的參予。
                </span>
                <span>
                    在春季班表現良好的學生，可優先入讀2005-06年的<Link href="summer" className=" text-indigo-500">暑期班</Link>。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>微積分是研究連續變化所不能缺少的數學工具，它的開創與發展標誌著數學在自然科學應用上光輝的一頁。它的始創者：牛頓 (I. Newton)、尼布列玆 (G.W. Leibniz) 更是科學史上璀璨閃亮的明星。應用微積分，棘手的「面積、體積」又或是「極大、極小」問題，都可迎刃而解；巧妙的牛頓運動定律，亦得以恰如其分的展示在我們眼前。雖然微積分作為工具是如斯的有效，但它嚴謹精密的數學基礎 —— 「數學分析」卻要再經歷150年的發展，才告完成。偉大的數學家如歐拉 (L. Euler) 等都為此而努力，作出貢獻，其中至為關鍵的是柯西 (A.L. Cauchy) 精確地界定了極限 (Limit) 的概念。</span>
                <span>中學課程中所介紹的微積分，其內容只強調直觀的理解及粗淺的應用，自然不能滿足能力出眾，熱愛數學同學的渴求。2005「數學英才精進課程」春季班正是專為有興趣學習數學分析，掌握微積分理論的預科同學而設的。課程將深入詳盡地介紹序列 (Sequence)、級數 (Series) 和函數 (Function) 的極限概念，並探討有關的收斂性 (Convergence)。以此為基礎，同學將可進一步學習函數的連續性 (Continuity)、可微性 (Differentiability)、可積性 (Integrability) 及相關的理論。</span>
                <span>由於數學分析要求嚴格的邏輯思考和抽象的推理論証，它不單可磨練學習者的數學技巧，更可激發他們的思維潛能，故一直被視為步入高等數學殿堂的必修科目。事實上，數學分析也是當代數學支柱——分析學 (Analysis) 的基礎，分析學指引著現代科技的發展，它的分支如：微分方程、微分幾何、動力系統、控制論和財經數學等，都是與我們社會的發展進步息息相關的。</span>
                <span>牛頓曾經這樣描述他對自然真理的探尋：「我不知道自己在世人眼裏會是怎樣的；但我時常覺得，自已就像一個在海邊玩耍的小孩，獨自在那兒嬉游，偶爾尋覓到了一塊光滑的卵石，或精緻的小貝殼，而面前還有我全然未發現的巨大真理海洋呢。」</span>
                <span>你有興趣在真理的海洋中尋覓精緻的貝殼或是些更有趣的事物嗎？參加「數學英才精進課程」春季班是你不能錯過的好機會！</span>
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
                            <span>2005年2月19日至5月7日期間於香港中文大學上課。</span>
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
                            <span>考試日期定於2005年5月7日(星期六)上午。</span>
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
                            <td className="px-4 py-2 border-b">Prof. John Barrow</td>
                            <td className="px-4 py-2 border-b">Cambridge University, U.K.</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. Chris Lennard</td>
                            <td className="px-4 py-2 border-b">University of Pittsburgh, U.S.A.</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. Rick Sommer</td>
                            <td className="px-4 py-2 border-b">Stanford University, U.S.A.</td>
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
                            <td className="px-4 py-2 border-b">鄺英銓教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};