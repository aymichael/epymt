

export default async function Course({ params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-1">
            <span className="text-3xl font-bold text-center">SAYT1154 Mathematical Analysis: An Overture I 數學分析入門(一)</span>
            <span className="text-lg font-bold mb-4 text-center">Jointly offered with Hong Kong Academy of Gifted Education</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">引言</span>
            <span className="my-4">
                要接受真正的數學訓練，培養邏輯的思考方式，學習「數學分析」是絕佳的途徑。正是由於這樣，世界主流大學的數學系都會把「數學分析」訂為主修生的必修科目。有見及此，香港資優教育學院與我們將於2012年2月份推出「數學分析入門」，向學院的成員介紹這門準確精密，影響深遠的學科。本科將連續十多個星期六上課，要求嚴格的抽象推理和邏輯論証，不單可磨練學生的數學技巧，更可提升他們的思維能力，為學生締造一個高等學府的學習環境。
            </span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">內容簡介</span>
            <div className="flex flex-col gap-1 my-4">
                <span>每種自然現象，從基本粒子的量子振動到宇宙的不斷膨漲，都展示出變化。有些變化簡單而有規律，如日出日落、季節的循環往復；有些變化複雜而難料， 如金融市場的波動、疫症的突然爆發，各種變化都影響著我們的生活。研究變化的數學，就是中學課程裡開始接觸的微積分。</span>
                <span>認真學習數學的同學都知道，要深入了解微積分，必須理解、掌握它背後的數學理論 ── 數學分析，這門大學程度的數學科目是步入高等數學殿堂的階梯。牛頓 (Newton)和尼布列玆 (Leibniz)雖然是微積分的奠基者，但他們的工作一方面承習前人的建樹，另一方面也有賴後人的深化與整理。沒有後來的數學分析，微積分就只停留在憑猜度的計算方法。</span>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">科目詳情</span>
            <ul className="list-disc list-inside my-4">
                <li>中文大學課程編號：SAYT1154</li>
                <li>香港資優教育學院課程編號：大學學分數學課程(MAT6000A)</li>
            </ul>
            <span>上課日期、時間、地點：</span>
            <span>所有課堂將於香港中文大學舉行，安排如下:</span>
            <div className="overflow-x-auto my-4 flex justify-center w-full">
                <table className="table-auto border-collapse text-sm md:text-base border-gray-200 dark:border-gray-600 overflow-scroll">
                    <thead>
                        <tr className="dark:bg-gray-800 bg-gray-100 font-bold">
                            <th className="border p-2">Session</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Time</th>
                            <th className="border p-2">Content</th>
                            <th className="border p-2">Venue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">1</td>
                            <td className="border p-2">4/2</td>
                            <td rowSpan={2} className="border p-2">9:00a.m. - 12:00nn</td>
                            <td className="border p-2">Language of sets and logics</td>
                            <td rowSpan={2} className="border p-2">Lee Shau Kee Building 212</td>
                        </tr>
                        <tr>
                            <td className="border p-2">2</td>
                            <td className="border p-2">11/2</td>
                            <td className="border p-2">Functions</td>
                        </tr>
                        <tr>
                            <td className="border p-2">3</td>
                            <td className="border p-2">18/2</td>
                            <td className="border p-2">10:00a.m. - 12:00nn</td>
                            <td className="border p-2">Test</td>
                            <td className="border p-2">Lady Shaw Building LT2</td>
                        </tr>
                        <tr>
                            <td className="border p-2">4</td>
                            <td className="border p-2">25/2</td>
                            <td rowSpan={3} className="border p-2">9:00a.m. - 12:00nn</td>
                            <td className="border p-2">Induction and Inequalities</td>
                            <td rowSpan={3} className="border p-2">Lee Shau Kee Building 212</td>
                        </tr>
                        <tr>
                            <td className="border p-2">5</td>
                            <td className="border p-2">3/3</td>
                            <td className="border p-2">Properties of real number</td>
                        </tr>
                        <tr>
                            <td className="border p-2">6</td>
                            <td className="border p-2">10/3</td>
                            <td className="border p-2">Completeness of real number</td>
                        </tr>
                        <tr>
                            <td className="border p-2">7</td>
                            <td className="border p-2">17/3</td>
                            <td className="border p-2">10:00a.m. - 12:00nn</td>
                            <td className="border p-2">Test</td>
                            <td className="border p-2">Lady Shaw Building LT2</td>
                        </tr>
                        <tr>
                            <td className="border p-2">8</td>
                            <td className="border p-2">24/3</td>
                            <td rowSpan={3} className="border p-2">9:00a.m. - 12:00nn</td>
                            <td className="border p-2">Countable and uncountable</td>
                            <td rowSpan={3} className="border p-2">Lee Shau Kee Building 212</td>
                        </tr>
                        <tr>
                            <td className="border p-2">9</td>
                            <td className="border p-2">31/3</td>
                            <td className="border p-2">Sequences and their limits</td>
                        </tr>
                        <tr>
                            <td className="border p-2">10</td>
                            <td className="border p-2">14/4</td>
                            <td className="border p-2">Properties of limits</td>
                        </tr>
                        <tr>
                            <td className="border p-2">11</td>
                            <td className="border p-2">21/4</td>
                            <td className="border p-2">10:00a.m. - 12:00nn</td>
                            <td className="border p-2">Test</td>
                            <td className="border p-2">Lady Shaw Building LT2</td>
                        </tr>
                        <tr>
                            <td className="border p-2">12</td>
                            <td className="border p-2">5/5</td>
                            <td rowSpan={2} className="border p-2">9:00a.m. - 12:00nn</td>
                            <td className="border p-2">Monotone and convergence</td>
                            <td rowSpan={2} className="border p-2">Lee Shau Kee Building 212</td>
                        </tr>
                        <tr>
                            <td className="border p-2">13</td>
                            <td className="border p-2">12/5</td>
                            <td className="border p-2">Bolzano-Weierstrass and Cauchy</td>
                        </tr>
                        <tr>
                            <td className="border p-2">14</td>
                            <td className="border p-2">19/5</td>
                            <td className="border p-2">10:00a.m. - 12:00nn</td>
                            <td className="border p-2">Test</td>
                            <td className="border p-2">Lady Shaw Building LT5</td>
                        </tr>
                        <tr>
                            <td className="border p-2">15</td>
                            <td className="border p-2">26/5</td>
                            <td rowSpan={3} className="border p-2">9:00a.m. - 12:00nn</td>
                            <td className="border p-2">Limits of functions</td>
                            <td rowSpan={3} className="border p-2">Lee Shau Kee Building 212</td>
                        </tr>
                        <tr>
                            <td className="border p-2">16</td>
                            <td className="border p-2">2/6</td>
                            <td className="border p-2">Limits Theorems and continuity</td>
                        </tr>
                        <tr>
                            <td className="border p-2">17</td>
                            <td className="border p-2">9/6</td>
                            <td className="border p-2">A taste in differentiation and integration</td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="border p-2 text-center">Independent study for 2 weeks</td>
                        </tr>
                        <tr>
                            <td className="border p-2">18</td>
                            <td className="border p-2">30/6</td>
                            <td className="border p-2">09:30a.m. - 12:00nn</td>
                            <td className="border p-2">Examination</td>
                            <td className="border p-2">Lady Shaw Building LT5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span className="font-bold text-2xl/8 underline underline-offset-8">大學地圖</span>
            <span className="my-4">請參閱<a href="http://www.cuhk.edu.hk/english/campus/cuhk-campus-map.html" className="text-blue-500">大學地圖</a>。</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">教學人員</span>
            <span className="my-4">本科由香港中文大學數學系的數學英才精進課程主理，並受中文大學學則規管。教學人員如下:</span>
            <table className="border-collapse text-base md:text-lg mb-4">
                <tbody>
                    <tr>
                        <td className="font-bold">課程主任</td>
                        <td className="p-2">區國強教授</td>
                    </tr>
                    <tr>
                        <td className="font-bold">學術顧問</td>
                        <td className="p-2">劉智軒博士</td>
                    </tr>
                    <tr>
                        <td className="font-bold">教師</td>
                        <td className="p-2">馬文信先生</td>
                    </tr>
                    <tr>
                        <td className="font-bold">助教</td>
                        <td className="p-2">張雋毅先生(首席)和三至四位本科大學生</td>
                    </tr>
                </tbody>
            </table>
            <span className="font-bold text-2xl/8 underline underline-offset-8">學分認可、學費、獎學金</span>
            <span className="my-4">本科獲中文大學理學院認可，學生修畢本科，而將來入讀中文大學本科，可獲得豁免2學分；若升讀其他大學而以本科申請學分豁免，本課程亦會提供資歷 證明。學生修讀本科，亦將會作為大學入學取錄考慮因素之一。本科設有優異獎狀，獎學金則須視情況而定。</span>
            <span className="font-bold text-2xl/8 underline underline-offset-8">入學方法</span>
            <span className="my-4">本科只為香港資優教育學院成員而設，有興趣修讀者，請向該學院申請。申請人必須通過數學英才精進課程安排的入學測驗。</span>
        </div>
    );
};