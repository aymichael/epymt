

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <div className="flex flex-col gap-1 my-4">
                <span>
                    「數學英才精進課程」是由享譽世界的數學家丘成桐教授及中大數學系所策劃和推行的。 課程專為有志深入研習數學，並勇於接受挑戰的高中尖子而設。 入讀的同學不單可在大學內接受優越的培訓，更能得到專家學者的親身指導，令他們的學科知識有所增長，思維能力有所提升。 隨著大學「尖子計劃」的實行，同學及早接觸大學生活，對日後升學進修將有莫大的幫助。
                </span>
                <span>
                    「數學英材精進課程」將於2003年9月底推出「數論與密碼學」秋季班， 向有興趣的同學介紹數論這門多釆而又艱深的學科，以及它在現代科技如密碼學中的各種應用。 課程專為預科學生而設，不要求高等數學作預備知識。
                </span>
                <span>
                    數論是歷史最悠久的數學科目之一，主要是研究整數的各種特殊性質。 它的內容和問題饒富趣味；它的定理和証明精妙深刻，難怪大數學家高斯 (Karl Friedrich Gauss) 也禁不著讚歎：
                </span>
                <span className="text-center italic">
                    「數學是科學的女皇，而數論則是數學的女皇!」
                </span>
                <span>
                    這充分突顯了數論在數學研究中的重要性。
                </span>
                <span>
                    在秋季班表現良好的學生，可優先入讀本學年的春季班。
                </span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>整數的結構：我們將教授歐幾里得算法、初等數論函數。 同餘式和中國剩餘定理等基本結果。 這些結果可讓同學進一步討論質數的檢定和因數的分解方法及其在密碼學上的應用。</span>
                <span>Diophantine Equation：討論方程的整數解是 Diophantine 方程的主要研究範圍。 著名的數學難題─費瑪最後定理：證明當整數 n &gt; 2 時，方程 x<sup>n</sup> + y<sup>n</sup> = z<sup>n</sup> 沒有非平凡整數解便是一例。 它的研究促使了代數數論 (Algebraic Number Theory)、代數幾何 (Algebraic Geometry) 和模型式 (Modular Forms) 等重要現代數學支的誕生。</span>
                <span>連分數及有理逼近：圓周率是一個無理數，很多時，我們會選取有理數 22/7 和 355/113 作近似值進行實際計算。 事實上，選取以上兩數作近似值的背後是有深刻的連分數理論作為依據的， 這理論告訴我們如何對無理數作最佳有理逼近並估計誤差。</span>
                <span>
                    內容豐富，充滿挑戰性的「數論與密碼學」是熱愛數學的你所不能錯過的！
                </span>
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
                            2003年9月27日至11月22日期間逢星期六上午九時至下午五時於香港中文大學上課 (公眾假期除外)。
                        </td>
                    </tr>
                    <tr className="md:border-b border-0 border-gray-200 dark:border-gray-500 md:table-row flex flex-col">
                        <td className="font-bold align-top text-xl/8 md:w-1/4 md:bg-gray-100 md:dark:text-white md:dark:bg-gray-800 md:px-4 md:py-4 md:border-0 border-b-2">
                            形式
                        </td>
                        <td className="align-top flex flex-col gap-2 md:px-4 md:py-4 dark:md:bg-gray-600 md:bg-gray-50 md:pb-4 pb-6">
                            <span>課程將以講座、授課和導修的形式進行。</span>
                            <span>學業評核包括課堂與習作表現、小測及考試等。</span>
                            <span>考試日期定於2003年11月29日星期六上午。</span>
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
            <div className="overflow-x-auto mt-4 mb-2 min-w-0">
                <table className="min-w-full border whitespace-nowrap border-gray-300">
                    <tbody>
                        <tr className="dark:bg-black bg-gray-300">
                            <th className="px-4 py-2 border-b text-left">客席講座</th>
                            <th className="px-4 py-2 border-b text-left"></th>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">Prof. Jurgen Jost</td>
                            <td className="px-4 py-2 border-b">Max Planck Institute, Germany</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-4 py-2 border-b">蔡文端教授</td>
                            <td className="px-4 py-2 border-b">加拿大多倫多大學</td>
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
                            <td className="px-4 py-2 border-b">楊傑明教授</td>
                            <td className="px-4 py-2 border-b">香港中文大學</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};