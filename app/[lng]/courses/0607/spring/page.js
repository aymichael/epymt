import Link from "next/link";

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    要接受嚴謹的數學訓練，培養邏輯的思考方式，除了課堂聽講外，閱讀、思考、 練習和交流討論是不可或缺的途徑。 正是由於這樣，世界主流大學的數學系都會很重視導修研習。「數學英才精進課程」經過多年的實踐，掌握了優秀的中學生在學期間的學習情況，越發感到小組研習 的良好效果。因而把秋季和春季的課程重組，將於2007年1月6日推出「數學研習班」，向有興趣的同學介紹準確精密、影響深遠的高等數學。研習班會分成不 同的專題小組，每組約7-8個學生，由一位中文大學數學系的教師領導，按學生的興趣和能力選擇課題與訂定進度。通過定期的小組會面，學生將會在老師、助教 及同學間，享受寶貴的數學經驗。課程專為愛好數理的學生而設，不限級別，但要求預科的數學知識。 我們亦會邀請聞名世界的學者，為研習班的同學主持講座。 我們希望同學在專家學者的親身指導下，眼界得以開闊，潛能得以啟發，對他們日後將有深遠的影響。
                </span>
                <span>
                    在研習班表現良好的學生，可優先入讀2007-08年的暑期班複數與非歐幾何。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>每個學生屬於一個專題小組，由本課程按學生的興趣和能力安排。每個專題小組約有7-8個學生，由一位教師和幾位助教領導。每個小組集中研習一個專題，選自 以下範圍。</span>
                <span>數論：內容參照從前的秋季班。同學將由淺入深，先學習數論的入門知識，包括：整數的整除性、歐幾里得算法、同餘式、「中國剩餘定理」、數論函數、歐拉定 理、費馬小定理和連分數理論等。接著，再進一步學習密碼學的編碼與解碼理論，包括現代有關公開密鑰體制 (Public Key Cryptosystem) 及當中著名的 RSA 密鑰體制的理論基礎。</span>
                <span>數學分析：內容參照從前的春季班。同學將深入細緻地學習序列 (sequence)、級數 (series) 和函數的極限 (limit) 概念，並探討有關的收斂性 (convergence)，這將是進一步討論函數的連續性 (continuity)、可微性 (differentiability) 和可積性 (integrability) 的基石。</span>
                <span>點集拓撲學：這是比較艱深的分析課題，同學須具備數學分析的基礎。同學將先熟習集合和映射，進而學習度量空間(metric space)及拓撲空間(topological space)上的極限、連通(connected)、緊致(compact)和連續(continuous)等概念。</span>
                <span>向量分析：這是暑期班「微分幾何初探」的相關觀點。同學將從多元微積分出發，學習向量函數的微分、曲線及曲面積分，並了解場論、梯度(grad)、旋度 (curl)、散度(div)及其物理應用。</span>
                <span>紐結理論：這是一個趣味題目的嚴謹探討，同學須有良好的空間感、幾何與拓撲基礎。同學先學習紐結和鏈環的定義與基本概念、它們的投影圖和初等變換，進而了 解幾種不變量(invariants)，特別是多項式的不變量。</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <table className="my-4">
                <tbody>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            主題
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            小組專題選自數論、數學分析、點集拓撲學、紐結理論、向量分析、物理及相對論的數學
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            上課日期、時間及地點
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            2007年1月 6日至6月初期間逢星期六上午於 香港中文大學上課。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以小組導修 的形式進行。</span>
                            <span>學業評核主要根據課堂討論與習作表現等決定。</span>
                            <span>考試與否由指導老師決定。</span>
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            對象
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            級別不限，唯數學能力必須達中六程度的學 生，曾修讀本課程的學生將獲優先考慮。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            學費
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            研習班以新的教學模式進行，於首創學年將不收取學費，以鼓勵對數學有興趣的學生參加。
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
                            <td className="px-4 py-2 border-b">待定</td>
                            <td className="px-4 py-2 border-b"></td>
                        </tr>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">研習指導老師</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                            <td className="px-4 py-2 border-b" colspan="2">
                                香港中文大學數學系常任教師， 包括區國強教授，張亮夫博士，方穎聰博士，劉智軒博士
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};