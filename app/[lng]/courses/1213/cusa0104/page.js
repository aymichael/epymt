

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="text-3xl font-bold text-center">CUSA0104 Enrichment Mentoring Mathematics I 數學啟導修習 I</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <span className="my-4">
                數學優才培育計劃是由香港特別行政區政府教育局和香港中文大學數學系合辦。本科專為具備數學能力及濃厚興趣的中學生而設，是一個全年參與的數學科目。由大學教師為數學資優學生提供啟發和輔導，引領學生修習一個特定的數學課題。
            </span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>啟導課程內容，按照學生背景而設。本年度討論的課題，將圍繞入門圖論，重點在於建立嚴謹的邏輯與數學方法，並引入少量電算處理。學生每星期須花3至5小時於課業上，嘗試獨立的研習和完成指定的任務或練習。學生亦應通過互聯網與啟導老師聯繫，並須每月上課一次，參與討論，以及須在課堂報告學習過程。整個學習的資料，將會結集成為一個學習檔案。</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <ul className="list-disc list-inside my-4">
                <li>中文大學課程編號：CUSA0104</li>
                <li>馮漢柱資優教育中心編號：201213-MATHE-1 數學優才培育計劃（基礎班）</li>
            </ul>
            <span>上課日期、時間、地點：</span>
            <span>所有課堂將於<strong>香港中文大學李兆基樓</strong>舉行，安排如下:</span>
            <table className="table-auto border-collapse text-sm md:text-base border-gray-200 dark:border-gray-600">
                <thead>
                    <tr className="dark:bg-gray-800 bg-gray-100 font-bold">
                        <th className="border p-2">日期</th>
                        <th className="border p-2">時間</th>
                        <th className="border p-2">地點</th>
                        <th className="border p-2">活動</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">2012年10月27日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓302室</td>
                        <td className="border p-2">課程安排與啟發講座</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2012年11月17日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">教學，解題，討論，電算</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2012年12月15日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">教學，解題，討論，電算</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年1月19日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">講座</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年2月23日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">教學，解題，討論，電算</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年3月23日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">教學，解題，討論，電算</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年4月20日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">講座</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年5月18日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">教學，解題，討論，電算</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2013年6月15日 (六)</td>
                        <td className="border p-2">上午9:30–中午12:00</td>
                        <td className="border p-2">李兆基樓208室</td>
                        <td className="border p-2">講座</td>
                    </tr>
                </tbody>
            </table>
            每次上課後，都有2至4周的獨立研習。
            <table className="table-auto border-collapse text-sm md:text-base border-gray-200 dark:border-gray-600">
                <tbody>
                    <tr>
                        <td className="border p-2">2013年7月6日(六)</td>
                        <td className="border p-2">上午09:30–中午12:00*</td>
                        <td className="border p-2">考核</td>
                    </tr>
                </tbody>
            </table>
            <span className="mb-4">*在得到學生共識下，上課日期和時間將不會更改。</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">教學人員</span>
            <span className="my-4">本科由香港中文大學數學系的數學英才精進課程主理。導師均為該系全職教師。副導師亦擁有碩士學位。教學人員如下:</span>
            <table className="border-collapse text-base md:text-lg mb-4">
                <tbody>
                    <tr>
                        <td className="font-bold">主任</td>
                        <td className="p-2">區國強教授</td>
                    </tr>
                    <tr>
                        <td className="font-bold">導師</td>
                        <td className="p-2">方穎聰博士和劉智軒博士</td>
                    </tr>
                    <tr>
                        <td className="font-bold">副導師</td>
                        <td className="p-2">陳瀚道先生</td>
                    </tr>
                    <tr>
                        <td className="font-bold">助理導師</td>
                        <td className="p-2">四位本科大學生</td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl/8 underline underline-offset-8">學分認可、學費、獎學金</span>
            <span className="my-4">本科獲中文大學理學院認可，學生修畢本科，可獲若干積分，該等積分將會作為大學入學取錄考慮因素之一。學費由馮漢柱資優教育中心負責。本科並沒有設立獎學金。</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">入學方法</span>
            <span className="my-4">本科的入學及取錄，由馮漢柱資優教育中心負責。</span>
        </div>
    );
};