

export default async function Course({ params }) {
    const { lng } = await params;

    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="text-3xl font-bold text-center">SAYT1154 Mathematical Analysis: An Overture I 數學分析入門(一)</span>
            <span className="text-lg font-bold mb-4 text-center">Jointly offered with Hong Kong Academy of Gifted Education</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Introduction" : "引言"}</span>
            <span className="my-4">
                {lng === "en" ?
                    "Learning Mathematical Analysis is the best way to establish logical thinking and rigorous mathematics. For this reason, Mathematical Analysis is always a core subject for mathematics major students in most universities in the world. Seeing the importance of this topic, Hong Kong Academy of Gifted Education and EPYMT join hands to provide this deep course of exactitude for the members of the academy. In this course, students are required to perform abstract deduction and logical arguments. It builds the mathematics mastery of students as well as enhances their strength in thinking. It also allows the students to learn in the atmosphere of a higher education institute." :
                    "要接受真正的數學訓練，培養邏輯的思考方式，學習「數學分析」是絕佳的途徑。正是由於這樣，世界主流大學的數學系都會把「數學分析」訂為主修生的必修科目。有見及此，香港資優教育學苑與我們將推出「數學分析I」，向學苑的成員介紹這門準確精密，影響深遠的學科。本科要求嚴格的抽象推理和邏輯論証，不單可磨練學生的數學技巧，更可提升他們的思維能力，為學生締造一個高等學府的學習環境。"}
            </span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Course outline" : "內容簡介"}</span>
            <div className="flex flex-col gap-1 my-4">
                <span>{lng === "en" ?
                    "Natural phenomena from quantum vibration of fundamental particles to the expanding universe, all demonstrate unceasing variation. Some changes are simple and regular such as sunrise, sunset, and seasonal cycles. Some others are intriguing and unpredictable such as financial fluctuation and epidemic. Our lives are inevitably surrounded by changes. The mathematical study of changes and variation begins in Calculus that students first encounter in high school." :
                    "每種自然現象，從基本粒子的量子振動到宇宙的不斷膨漲，都展示出變化。有些變化簡單而有規律，如日出日落、季節的循環往復；有些變化複雜而難料， 如金融市場的波動、疫症的突然爆發，各種變化都影響著我們的生活。研究變化的數學，就是中學課程裡開始接觸的微積分。"}</span>
                <span>{lng === "en" ?
                    "Every student serious in mathematics knows that to truly understand Calculus, one must get a grip on the its underlying theory, namely, Mathematical Analysis. It is a university basic course; yet it is also a crucial step onto the pinnacle of mathematics. While Newton and Leibniz were the founders of Calculus, their work were at the same time built on their forerunners and relied on the deepening and structuring of their successors. Without Mathematical Analysis, Calculus would have been simply a tool of rough estimate and speculation." :
                    "每種自然現象，從基本粒子的量子振動到宇宙的不斷膨漲，都展示出變化。有些變化簡單而有規律，如日出日落、季節的循環往復；有些變化複雜而難料， 如金融市場的波動、疫症的突然爆發，各種變化都影響著我們的生活。研究變化的數學，就是中學課程裡開始接觸的微積分。"}</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Admission Screening Test" : "入學試"}</span>
            <span>{lng === "en" ?
                "It was held on Sept 8 (Sat), 2012 at Lecture Theatre, 8/F., MMW Engineering Building, The Chinese University of Hong Kong." :
                "入學試於2012年9月8日(星期六)於香港中文大學蒙民偉工程學大樓, 8樓演講廳(LT)舉行"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Teaching Personnel" : "教學人員"}</span>
            <span>{lng === "en" ?
                "To be announced" :
                "有待公佈"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Credit recognition, fee, and scholarship" : "學分認可、學費、獎學金"}</span>
            <span>{lng === "en" ?
                "This course is recognized by the Science Faculty of The Chinese University of Hong Kong. Any student who has passed this course will be granted two credit units when he/she is enrolled as an undergraduate of the university. EPYMT will also provide references for students to apply for credit exemption in other universities. In addition, the performance of a student in this course may also be considered upon university admission. Merit certificates may be issued but there is no special scholarship for this course." :
                "本科獲中文大學理學院認可，學生修畢本科，而將來入讀中文大學本科，可獲得豁免2學分；若升讀其他大學而以本科申請學分豁免，本課程亦會提供資歷證明。學生修讀本科的表現，亦將會作為大學入學取錄考慮因素之一。本科設有優異獎狀， 並不設有獎學金。"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Admission and application" : "入學方法"}</span>
            <span>{lng === "en" ?
                "This course only admits members of Hong Kong Academy of Gifted Education. Those who are interested in please contact the academy. Applicants must pass the Admission Screening Test arranged by the Enrichment Programme for Young Mathematics Talents (EPYMT)" :
                "本科只為香港資優教育學苑成員而設，有興趣修讀者，請向該學苑申請。申請人必須通過數學英才精進課程安排的入學測驗。"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Course Information" : "科目詳情"}</span>
            <span>{lng === "en" ?
                "HKAGE Course Code: (MATS3610)" :
                "香港資優教育學苑課程編號：(MATS3610)"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Venue" : "上課地點"}</span>
            <span>{lng === "en" ?
                "All classes will be held in Room 302, Lee Shau Kee Building, The Chinese University of Hong Kong" :
                "所有課堂將於香港中文大學李兆基樓302室舉行"}</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">{lng === "en" ? "Time" : "時間"}</span>
            <span>9:30 am – 12:00 nn</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">Programme Schedule</span>
            <table className="table-auto border-collapse text-sm md:text-base border-gray-200 dark:border-gray-600 my-4">
                <thead>
                    <tr className="dark:bg-gray-800 bg-gray-100 font-bold">
                        <th className="border p-2">Session</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Venue</th>
                        <th className="border p-2">Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">1</td>
                        <td className="border p-2">22/09/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Language of sets, logics, and functions</td>
                    </tr>
                    <tr>
                        <td className="border p-2">2</td>
                        <td className="border p-2">29/09/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Group discussion</td>
                    </tr>
                    <tr>
                        <td className="border p-2">3</td>
                        <td className="border p-2">06/10/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Real functions, induction, and inequalities</td>
                    </tr>
                    <tr>
                        <td className="border p-2">4</td>
                        <td className="border p-2">13/10/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Group discussion</td>
                    </tr>
                    <tr>
                        <td className="border p-2">5</td>
                        <td className="border p-2">20/10/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Rational, irrational, and real numbers</td>
                    </tr>
                    <tr>
                        <td className="border p-2">6</td>
                        <td className="border p-2">03/11/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Test (MUST attend)</td>
                    </tr>
                    <tr>
                        <td className="border p-2">7</td>
                        <td className="border p-2">10/11/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Bounds and completeness of real numbers</td>
                    </tr>
                    <tr>
                        <td className="border p-2">8</td>
                        <td className="border p-2">17/11/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Group discussion</td>
                    </tr>
                    <tr>
                        <td className="border p-2">9</td>
                        <td className="border p-2">24/11/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Countable, uncountable, and sequences</td>
                    </tr>
                    <tr>
                        <td className="border p-2">10</td>
                        <td className="border p-2">01/12/2012</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Group discussion</td>
                    </tr>
                    <tr>
                        <td className="border p-2">11</td>
                        <td className="border p-2">05/01/2013</td>
                        <td className="border p-2">LSK 302</td>
                        <td className="border p-2">Examination (MUST attend)</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};