import QuestionBox from "../qBox";
import Link from "next/link";
import { translation } from '@/app/i18n-index.js';

export default async function Student({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl/8 my-4">{t("header_2")}</h2>
            <QuestionBox
                lang={lng}
                question={["How does my student choose the courses of EPYMT?", "我的學生應如何選擇EPYMT的課程？"]}
                answer={
                    [<div className="flex flex-col gap-2">
                        <p>There are several courses of different levels for students to choose. In general, if the student is Secondary 3 or above, enjoys mathematics and usually is the better one in class, there should be a course suitable for him/her. If he/she is of lower forms but already has mathematics skills of higher forms, he/she may also find a suitable course according to the following levels.</p>
                        <div class="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400">
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-2">Course</th>
                                        <th className="px-2 py-2">Student level</th>
                                        <th className="px-2 py-2">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Geometric Perspectives of Complex Numbers (CUSA1014)</td>
                                        <td className="px-2 py-2">Finished S3 (Grade 9), advancing to S4 (Grade 10)</td>
                                        <td className="px-2 py-2">- A natural extension secondary school coordinate geometry module</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Number Theory and Cryptography (SAYT1114)</td>
                                        <td className="px-2 py-2">Finished S4 (Grade 10), advancing to S5 (Grade 11)</td>
                                        <td className="px-2 py-2">- Fun among numbers</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Towards Differential Geometry (SAYT1134)</td>
                                        <td className="px-2 py-2">Finished S5 (Grade 11), advancing to S6 (Grade 12)</td>
                                        <td className="px-2 py-2">- Must know Calculus (differentiation and integration)</td>
                                    </tr>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2">Understanding Non-Euclidean Geometry (SAYT1214)</td>
                                        <td className="px-2 py-2">Top of class in S6 (Grade 12) or former EPYMT students</td>
                                        <td className="px-2 py-2">- Most challenging course; beyond the reach of the vast majority of F.4 students</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span>It is advisable to seek consultation from school teachers to decide the course which suits him/her most, and ask teacher/principal to write him/her an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate his/her mathematical maturity before admitting him/her.</span>
                        <span>For course details and registration, please visit <Link href="/en/course-information" className="text-indigo-500 dark:text-indigo-300">here</Link>.</span>
                    </div>, <div className="flex flex-col gap-2"> <p>我們有多個不同程度的課程供學生選擇。一般而言，如果學生是中三或以上，喜歡數學並且是班上較優秀的學生，應該有適合他的課程。如果他是低年級但已具備高年級的數學能力，他也可以根據以下程度找到合適的課程。</p>
                        <div class="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400"> <table className="table-auto w-full text-left"> <thead> <tr> <th className="px-2 py-2">課程</th> <th className="px-2 py-2">學生程度</th> <th className="px-2 py-2">備註</th> </tr> </thead> <tbody> <tr className="border-t border-gray-400"> <td className="px-2 py-2">複數的幾何面貌 (CUSA1014)</td> <td className="px-2 py-2">完成中三，升讀中四</td> <td className="px-2 py-2">- 中學座標幾何的延伸</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">數論與密碼學 (SAYT1114)</td> <td className="px-2 py-2">完成中四，升讀中五</td> <td className="px-2 py-2">- 數字之間的樂趣</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">微分幾何初探 (SAYT1134)</td> <td className="px-2 py-2">完成中五，升讀中六</td> <td className="px-2 py-2">- 必須掌握微積分（微分與積分）</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">非歐幾何賞析 (SAYT1214)</td> <td className="px-2 py-2">中六頂尖學生或曾修讀 EPYMT 的學生</td> <td className="px-2 py-2">- 最具挑戰性的課程；絕大多數中四學生難以應付</td> </tr> </tbody> </table> </div>
                        <span>建議先向學校老師諮詢，以決定最適合他/她的課程，並請老師或校長為他/她撰寫線上推薦信。我們也會透過入學甄選測驗來評估申請者的數學能力，再決定是否錄取。</span> <span>課程詳情與報名，請參閱 <Link href="/zh-Hant/course-information" className="text-indigo-500 dark:text-indigo-300">此處</Link>。</span> </div>]
                }
            />
            <QuestionBox
                lang={lng}
                question={["I have an outstanding student who is mathematically well beyond the average of his/her age. However, he/she is only F.2 (or any junior form), is he/she able to attend your courses? And what courses are suitable for him/her?", "我有一位數學能力遠超同齡學生的優秀學生，但他/她只是中二（或任何低年級），他/她能否參加你們的課程？哪些課程適合他/她？"]}
                answer={["We welcome junior form student to take EPYMT course, but please note that EPYMT introduces students more advanced and sophisticated mathematics than that they learn in school so junior form students should be mature enough to face difficulties and frustration. It is important to consider if junior form students are able to learn mathematics together with higher form students (both in mathematics ability and personality).\nIt is advisable to seek consultation from school teachers to decide the course which suits him/her most, and ask teacher/principal to write him/her an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate his/her mathematical maturity before admitting him/her.", "我們歡迎低年級學生參加 EPYMT 課程，但請注意 EPYMT 所教授的數學內容較學校課程更為進階和複雜，因此低年級學生應具備足夠能力來面對困難和挫折。考慮低年級學生是否能夠與高年級學生一同學習數學（無論在數學能力和個性方面）是很重要的。\n建議先向學校老師諮詢，以決定最適合他/她的課程，並請老師或校長為他/她撰寫線上推薦信。我們也會透過入學甄選測驗來評估申請者的數學能力，再決定是否錄取他們。"]}
            />
            <QuestionBox
                lang={lng}
                question={["My student is a Form 4/5 student but he/she has never learnt complex number before. Will it be a barrier for him/her to attend any of your courses?", "我的學生是中四/五學生，但他/她從未學過複數。這會成為他/她參加你們課程的障礙嗎？"]}
                answer={["No, knowing complex numbers or not will not make a big difference, except for the advanced course \"Understanding Non-Euclidean Geometry\". \"Towards Differential Geometry\" and \"Geometric Perspectives of Complex Number\" are especially designed for F.5 students. However, if students apply for the course \"Towards Differential Geometry\", we do expect students to have reasonable competence with calculus.", "不，是否了解複數並不會有太大影響，除了進階課程「非歐幾何賞析」。而「微分幾何初探」和「複數的幾何面貌」是專為中五學生設計的課程。然而，如果學生申請「微分幾何初探」，我們確實希望學生對微積分有合理的掌握。"]}
            />
            <QuestionBox
                lang={lng}
                question={["My student is studying in overseas / mainland high school, but he/she plans to come to Hong Kong in the period when EPYMT courses start. Can he/she still apply EPYMT?", "我的學生在海外/內地高中就讀，但他/她計劃在EPYMT課程開始的期間來香港。他/她還能申請EPYMT嗎？"]}
                answer={["We will assess his/her ability through a “take-home” test that will be arranged in a specific period. Please ask him/her to inform us this situation as soon as possible.", "可以。我們會透過一個「在家測驗」來評估他/她的能力，該測驗將在特定期間安排。請盡快告知我們他/她的情況。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What language will be conducted in the courses?", "會使用什麼語言上課？"]}
                answer={["The lecturers and teaching assistants will use Cantonese in class but all notes and teaching materials are conducted in English.", "授課老師和助教會以廣東話授課，但所有講義和教材均以英文編寫。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How much time and effort does my student need to spend on EPYMT?", "我的學生需要在EPYMT上花多少時間和精力？"]}
                answer={["Students need to spend 3 intensive weeks on a course. Besides lessons on 9 whole days, students need the other days to prepare, work on exercises, and review. The learning pace is fast and the course schedule is tight. A lot of after class revision is needed. Students should be highly self-motivated and committed. Also, students are expected to be very curious and fond of exploring mathematics beyond his/her level. Otherwise, many of them will lag behind.", "學生需要在三個密集的星期內完成一個課程。除了九個整天的上課時間外，學生還需要利用其他日子來預習、做練習和複習。學習節奏很快，課程安排緊湊，需要大量課後溫習。學生應該具備高度的自我驅動力和投入度。此外，學生應該對數學充滿好奇心，並樂於探索超越自己程度的數學。否則，很多學生會跟不上進度。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_3")}</h2>
            <QuestionBox
                lang={lng}
                question={["If my student had applied EPYMT last year, does he/she still need me to write another recommendation letter for him this year?", "如果我的學生去年申請過EPYMT，他/她今年還需要我為他/她寫另一封推薦信嗎？"]}
                answer={["A note on the application form states that “recommendation is NOT required if the applicant had applied for admission to EPYMT before” so he/she can choose not to hand another recommendation letter to us. However, if the teacher wants to write another stronger recommendation letters for the student this year, we will still accept.", "申請表上的一則說明指出「如果申請者之前曾申請入讀EPYMT，則不需要推薦信」，因此他/她可以選擇不再提交另一封推薦信給我們。然而，如果老師今年想為學生寫另一封更有力的推薦信，我們仍然會接受。"]}
            />
            <QuestionBox
                lang={lng}
                question={["If my student is being overseas, can he/she still apply the course? How will his/her application be assessed?", "如果我的學生在海外，他/她還能申請課程嗎？他的申請將如何被評估？"]}
                answer={["Yes, he/she can still apply the course. We arrange alternative methods to assess his/her ability through a “take-home” test which will be arranged in a specific period. The admission assessment cannot be waived. Please ask your student to contact us after he/she has submitted the application.", "可以。他/她仍然可以申請課程。我們會透過一個「在家測驗」來評估他/她的能力，該測驗將在特定期間安排。入學評估不能被豁免。請在你的學生提交申請後，讓他/她與我們聯繫。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_4")}</h2>
            <QuestionBox
                lang={lng}
                question={["What is the purpose of the Admission Screening Test?", "入學甄選測驗的目的？"]}
                answer={["The course instructors prepared the Admission Screening Test to evaluate the mathematical levels the applicants have achieved, so that the instructors can advise the most suitable course(s) for the applicants. For example, those with outstanding performances in the admission test may be invited to take the most mathematically challenging course ─ \"Understanding Non-Euclidean Geometry\".", "課程導師設計入學甄選測驗來評估申請者所達到的數學水平，以便導師能夠為申請者建議最合適的課程。例如，在入學測驗中表現優異的學生可能會被邀請參加數學挑戰性最高的課程──「非歐幾何賞析」。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How can my student prepare for the admission test?", "我的學生如何準備入學測驗？"]}
                answer={["No any specific drills are recommended. Since the syllabuses of EMPYT courses are beyond secondary school taught level, the questions set for this test will be close to tertiary education level.\nTo improve your student’s mathematical ability, we advise him/her to concentrate on school works and try to learn beyond what the textbook teaches. Also, try to read ahead. For example, if he/she is a F.4 student, he/she should try to take a look or even finish the F.5 mathematics textbook and work out the problems by himself/herself. He/She could also read some foreign mathematics textbooks or leisure books for enrichment. He/She can even surf the web to learn advanced mathematics.", "不建議進行任何特定的練習。由於EPYMT課程的教學大綱超越了中學所教授的水平，因此為這次測驗設計的問題將接近大學教育水平。\n為了提高你的學生的數學能力，我們建議他/她專注於學校的功課，並嘗試學習超出教科書所教授的內容。此外，嘗試預習。例如，如果他/她是中四學生，他/她應該嘗試閱讀甚至完成中五數學教科書，並自己解決問題。他/她也可以閱讀一些外國數學教科書或休閒書籍以充實自己。他/她甚至可以上網學習高等數學。"]}
            />
        </div>
    );
};