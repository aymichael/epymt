import Link from "next/link";

export default function TMA() {
    return (
        <div className="flex justify-center w-full flex-col gap-2 font-serif md:text-base sm:text-sm text-xs">
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>課程編號</span>
                                <span>Course code</span>
                            </div>
                        </td>
                        <td className="p-2">SAYT1014</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>上課日期</span>
                                <span>Date</span>
                            </div>
                        </td>
                        <td className="p-2">15/7, 16/7, 18/7, 19/7, 22/7, 23/7, 25/7, 26/7, 29/7, 2024</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>上課時間</span>
                                <span>Time</span>
                            </div>
                        </td>
                        <td className="p-2">10:30am - 5:15pm</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>考試日期</span>
                                <span>Examination Date</span>
                            </div>
                        </td>
                        <td className="p-2">1/8/2024 (10:30am - 1:30pm)</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>後備課堂日期</span>
                                <span>Reserved Date</span>
                            </div>
                        </td>
                        <td className="p-2">24/7, 30/7, 2/8, 2024 (10:30am-5:15pm)</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>上課地點</span>
                                <span>Venue</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col text-red-500">
                                <span>[中文大學, 詳情有待公佈]*</span>
                                <span>[CUHK. Detail to be announced]*</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>任教導師</span>
                                <span>Lecturer</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <span>李俊捷博士(香港中文大學)</span>
                                <span>Dr. LI Chun Che (CUHK)</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>大學認可</span>
                                <span>University Recognition</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <span>中文大學1學分</span>
                                <span>1 credit of CUHK</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>教學語言</span>
                                <span>Medium of Instruction</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <span>粵語為主，附以英文教材</span>
                                <span>mainly in Cantonese with English course materials</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>對象</span>
                                <span>Expected applicants</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <span>準備升上中四或中五的同學參加，學員須具備良好的抽象數學推理能力。</span>
                                <span>Students who have high competence in abstract mathematical reasoning, and are promoting to Secondary 4 or Secondary 5</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>內容簡介</span>
                                <span>Introduction</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col">
                                <span>
                                    粵本科將從經典代數開始，討論如何使用根式解三次方程及四次方程、使用二分法求解方程、圓規直尺作圖問題、利用圓規直尺構造正則十七邊形、根與係數之間的關係、對稱多項式、求 k 次和公式等。接著將引入抽象代數結構，包括群、域、向量空間，並為同學介紹具體的數學對象，包括複數、二次域、四元數、多項式、模為 n 的加法和乘法群、置換群、橢圓曲線、有限域等，來說明這些代數結構。
                                </span>
                                <span>
                                    The central themes of classical algebra includes the study of polynomials, finding roots of polynomials, solving system of equations, Compass-and-straightedge construction. In response to these problems, modern abstract algebra was introduced during 19th century.
                                </span>
                                <span>
                                    In this course, we start with classical algebra topics which include using radicals to solve cubic and biquadratic equations, bisection method, compass-and straightedge constructions, construction of regular-17-gon, relationship between roots and coefficients, symmetric polynomials, closed formula of sum of powers, among other things.
                                </span>
                                <span>
                                    We will then introduce abstract algebraic structures including groups, fields, vector spaces with emphasis on concrete examples. We will introduce concrete math objects, including complex numbers, quadratic fields, quaternions, polynomials, additive and multiplicative group mod n, permutation groups, elliptic curves, finite fields, among other things, to illustrate the concepts of the algebraic structures.
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold align-top">
                            <div className="flex flex-col">
                                <span>學費</span>
                                <span>Tuition fee</span>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col text-red-500">
                                <span>港幣 4,000元正 (已包含港幣50元申請費用)</span>
                                <span>HK$4,000 (with $50 application fee included)</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <span className="text-xs text-red-500">*此課程於中文大學內授課。</span>
            <span className="text-xs text-red-500">*This course offers face-to-face lessons on CUHK campus.</span>
            <br />
            <Link href="/application" className="text-[#993300] text-lg font-bold underline">網上報名(Online application)</Link>
            <br />
            <span className="font-bold text-lg">入學試免試條款 Conditions for Admission Screening Test Exemption</span>
            <span>凡符合以下其中一項條款的申請人，可免除入學試而獲本科直接取錄。（參考附註）</span>
            <span>Applicants who satisfy either one of the following conditions may be exempted from Admission Screening Test and will be directly admitted into this course. (refer to note below)</span>
            <span>1. 曾修讀並及格完成以下任何一個科目取錄: 「複數的幾何面貌」、「複數與解析幾何」、「近世代數初探」。</span>
            <span>1. Passed in any of the following courses before: Geometric Perspectives of Complex Numbers, Complex Number and Analytical Geometry, and Towards Modern Algebra.</span>
            <span>2. 曾獲得以下任何一個科目取錄:「數論與密碼學」、「微分幾何初探」、「數學分析入門」、「非歐幾何賞析」。</span>
            <span>2. Being admitted in one of the following courses before: Number Theory and Cryptography, Towards Differential Geometry, Mathematical Analysis, and Understanding Non-Euclidean Geometry.</span>
            <span>曾修讀「數學啟導修習I或II」的學生，仍須參加入學試，但可獲優先考慮。</span>
            <span>Those who had taken &quot;Enrichment Mentoring Mathematics I or II&quot; still need to sit the Test, but will be considered with priority.</span>

        </div>
    );
};