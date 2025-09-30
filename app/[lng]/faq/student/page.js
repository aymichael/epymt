import QuestionBox from "../qBox";
import Link from "next/link";
import { translation } from '@/app/i18n-index.js';

export default async function Student({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl/8 my-4">{t("header_1")}</h2>
            <QuestionBox
                lang={lng}
                question={["How do I choose the courses of EPYMT?", "我應該如何選擇適合自己的課程？"]}
                answer={
                    [<div className="flex flex-col gap-2">
                        <p>There are several courses of different levels for you to choose. In general, if you are Secondary 3 or above, if you enjoy mathematics and usually are the better ones in your class, there should be a course suitable for you. If you are of lower forms but already have mathematics skills of higher forms, you may also find a suitable course according to the following levels.</p>
                        <div className="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400">
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
                        <span>It is advisable to seek consultation from school teachers to decide the course which suits you most, and ask teacher/principal to write you an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate students&apos; mathematical maturity before admitting them.</span>
                        <span>For course details and registration, please visit <Link href="/en/course-information" className="text-indigo-500 dark:text-indigo-300">here</Link>.</span>
                    </div>, <div className="flex flex-col gap-2"> <p>我們有多個不同程度的課程可供選擇。一般而言，如果你是中三或以上的學生，喜歡數學又在班上屬於較優秀的一批，那麼應該會有適合你的課程。如果你是低年級學生，但已經具備較高年級的數學能力，你也可以根據以下表格找到合適的課程。</p>

                        <div class="overflow-x-auto mx-2 my-4 rounded-lg border border-gray-400"> <table className="table-auto w-full text-left"> <thead> <tr> <th className="px-2 py-2">課程</th> <th className="px-2 py-2">學生程度</th> <th className="px-2 py-2">備註</th> </tr> </thead> <tbody> <tr className="border-t border-gray-400"> <td className="px-2 py-2">複數的幾何面貌 (CUSA1014)</td> <td className="px-2 py-2">完成中三，升讀中四</td> <td className="px-2 py-2">- 中學座標幾何的延伸</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">數論與密碼學 (SAYT1114)</td> <td className="px-2 py-2">完成中四，升讀中五</td> <td className="px-2 py-2">- 數字之間的樂趣</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">微分幾何初探 (SAYT1134)</td> <td className="px-2 py-2">完成中五，升讀中六</td> <td className="px-2 py-2">- 必須掌握微積分（微分與積分）</td> </tr> <tr className="border-t border-gray-400"> <td className="px-2 py-2">非歐幾何賞析 (SAYT1214)</td> <td className="px-2 py-2">中六頂尖學生或曾修讀 EPYMT 的學生</td> <td className="px-2 py-2">- 最具挑戰性的課程；絕大多數中四學生難以應付</td> </tr> </tbody> </table> </div>
                        <span>建議先向學校老師諮詢，以決定最適合你的課程，並請老師或校長為你撰寫線上推薦信。我們也會透過入學甄選測驗來評估申請者的數學成熟度，再決定是否錄取。</span> <span>課程詳情與報名，請參閱 <Link href="/zh-Hant/course-information" className="text-indigo-500 dark:text-indigo-300">此處</Link>。</span> </div>]
                }
            />
            <QuestionBox
                lang={lng}
                question={["How much time and effort do I need to spend on EPYMT?", "我需要花多少時間和精力在 EPYMT？"]}
                answer={["You need to spend 3 intensive weeks on a course. Besides lessons on 9 whole days, you need the other days to prepare, work on exercises, and review. The learning pace is fast and the course schedule is tight. A lot of after class revision is needed. Students should be highly self-motivated and committed. Also, students are expected to be very curious and fond of exploring mathematics beyond his/her level. Otherwise, many of them will lag behind.", "你需要在三個密集的星期內完成一個課程。除了九個整天的上課時間外，你還需要利用其他日子來預習、做練習和複習。學習節奏很快，課程安排緊湊，需要大量課後溫習。學生應該具備高度的自我驅動力和投入度。此外，學生應該對數學充滿好奇心，並樂於探索超越自己程度的數學。否則，很多學生會跟不上進度。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What language will be conducted in the courses?", "會使用什麼語言上課？"]}
                answer={["The lecturers and teaching assistants will use Cantonese in class but all notes and teaching materials are conducted in English.", "授課老師和助教會以廣東話授課，但所有講義和教材均以英文編寫。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_2")}</h2>
            <QuestionBox
                lang={lng}
                question={["I am mathematically well beyond the average of my age. However, I am only F.2 (or any junior form), am I able to attend your courses?", "我在數學方面遠超同齡學生，但我只是中二學生（或任何低年級），我可以參加你們的課程嗎？"]}
                answer={["We welcome junior form student to take EPYMT course, but please note that EPYMT introduces students more advanced and sophisticated mathematics than that they learn in school so junior form students should be mature enough to face difficulties and frustration. It is important to consider if junior form students are able to learn mathematics together with higher form students (both in mathematics ability and personality).\nIt is advisable to seek consultation from school teachers to decide the course which suits you most, and ask teacher/principal to write you an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate students&apos; mathematical maturity before admitting them.", "我們歡迎低年級學生參加 EPYMT 課程，但請注意 EPYMT 所教授的數學內容較學校課程更為進階和複雜，因此低年級學生應具備足夠能力來面對困難和挫折。考慮低年級學生是否能夠與高年級學生一同學習數學（無論在數學能力和個性方面）是很重要的。\n建議先向學校老師諮詢，以決定最適合你的課程，並請老師或校長為你撰寫線上推薦信。我們也會透過入學甄選測驗來評估申請者的數學能力，再決定是否錄取他們。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I am a senior form student, and I am interested in EPYMT. What courses are suitable for me?", "我是一名高年級學生，對EPYMT感興趣。哪些課程適合我？"]}
                answer={["The following courses are designed for the students who are advancing to Secondary 4 or 5. Yet, they are still challenging.\n- Geometric Perspectives of Complex Numbers (CUSA1014)\n- Number Theory and Cryptography (SAYT1114)\nIf you are fond of geometry, probably you should choose “Geometric Perspectives of Complex Numbers”, which is a natural extension to your secondary school coordinate geometry module. Or if you enjoy the funniness among numbers, “Number Theory and Cryptography” would be your suitable choice.\nIf you have learnt Calculus (differentiation and integration), you are welcome to apply “Towards Differential Geometry” which suits Secondary 5 or 6 students. If you are able to complete this course at Form 4, you may have a great advantage to become a high-achiever in your Form 5 syllabus. However, without adequate knowledge of Calculus, we advise you not to apply.\nFinally, the most mathematically challenging course, “Understanding Non-Euclidean Geometry”, is beyond the reach of the vast majority of F.4 students, and it is only suitable for senior form students who have distinguished mathematical performance or have taken any previous EPYMT course. You may consult your teacher if you are capable to take this course.", "以下課程是為升讀中四或中五的學生而設，但仍然具有挑戰性。\n- 複數的幾何面貌 (CUSA1014)\n- 數論與密碼學 (SAYT1114)\n如果你喜歡幾何，或許你應該選擇「複數的幾何面貌」，這是中學座標幾何的延伸。或者，如果你喜歡數字之間的樂趣，「數論與密碼學」會是你的合適選擇。\n如果你已經學習了微積分（微分與積分），歡迎申請適合中五或中六學生的「微分幾何初探」。如果你能在中四完成這門課程，你可能會在中五課程中取得優異成績。然而，如果沒有足夠的微積分知識，我們建議你不要申請。\n最後，最具數學挑戰性的課程「非歐幾何賞析」，絕大多數中四學生難以應付，僅適合在數學方面表現優異或曾修讀過 EPYMT 課程的高年級學生。如果你有能力參加這門課程，可以諮詢你的老師。"]
                }
            />
            <QuestionBox
                lang={lng}
                question={["I am a Form 4/5 student but I have never learnt complex number before. Will it be a barrier for me to attend any of your courses?", "我是一名中四/五學生，但我從未學過複數。這會成為我參加你們任何課程的障礙嗎？"]}
                answer={["No, knowing complex numbers or not will not make a big difference, except for the advanced course &quot;Understanding Non-Euclidean Geometry&quot;. &quot;Towards Differential Geometry&quot; and &quot;Geometric Perspectives of Complex Number&quot; are especially designed for F.5 students. However, if you apply for the course &quot;Towards Differential Geometry&quot;, we do expect you to have reasonable competence with calculus.", "不，是否了解複數並不會有太大影響，除了進階課程「非歐幾何賞析」。而「微分幾何初探」和「複數的幾何面貌」是專為中五學生設計的課程。然而，如果你申請「微分幾何初探」，我們確實希望你對微積分有合理的掌握。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I am studying in overseas / mainland high school, but I plan to come to Hong Kong in the period when EPYMT courses start. Can I still apply EPYMT?", "我在海外/內地的高中就讀，但我計劃在EPYMT課程開始期間來香港。我還可以申請EPYMT嗎？"]}
                answer={["Yes. We will assess your ability through a “take-home” test which will be arranged in a specific period. Please inform us your situation as soon as possible.", "可以。我們會透過一個「在家測驗」來評估你的能力，該測驗將在特定期間安排。請盡快告知我們你的情況。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What if I can only attend several dates of the course?", "如果我只能參加課程的其中幾天，該怎麼辦？"]}
                answer={["Our courses are intensive and they demand tremendous efforts to master the course contents. Therefore, it is advisable not to skip any one of the lecture, even to take a leave. Attending several dates of the course is strongly discouraged and your application may not be considered if such a condition is acknowledged.", "我們的課程編排密集，並需要付出大量的努力來掌握課程內容。因此，建議不要缺席任何一堂課，即使是請假也不例外。我們強烈不建議只參加課程的其中幾天，如果申請時說明了這種情況，你的申請可能不會被考慮。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_3")}</h2>
            <QuestionBox
                lang={lng}
                question={["If I had applied EPYMT last year, do I still ask my teacher/principal to write me another recommendation letter this year?", "如果我去年申請過EPYMT，今年我還需要請老師/校長再為我寫一封推薦信嗎？"]}
                answer={["A note on the application form states that “recommendation is NOT required if the applicant had applied for admission to EPYMT before” so you can choose not to hand another recommendation letter to us. However, if the teacher wants to write another stronger recommendation letters for the student this year, we will still accept.", "申請表格上的一則備註指出「如果申請者曾經申請過EPYMT，則不需要推薦信」，所以你可以選擇不再提交另一封推薦信。然而，如果老師今年想為學生寫另一封更有力的推薦信，我們仍然會接受。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I have registered, but for some reasons, my teacher/principal cannot complete the online recommendation before deadline. Will my application still be considered?", "我已經註冊，但由於某些原因，我的老師/校長無法在截止日期前完成網上推薦信。我的申請還會被考慮嗎？"]}
                answer={["If you submit the online application before deadline, we can actually allow the recommendation letter to be submitted a bit later. Nevertheless, please inform us your situation and submit it as soon as possible so that the process of your application will not be postponed.", "如果你在截止日期前提交了網上申請，我們實際上可以允許推薦信稍後提交。然而，請告知我們你的情況，並盡快提交，以免延誤你的申請流程。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I heard of this year's EPYMT courses after the application deadline! Can I still apply?", "我在申請截止日期後才聽說今年的EPYMT課程！我還可以申請嗎？"]}
                answer={[<span>Please email us <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a> to consider if it is still possible to accept your application at the time of your inquiry.</span>, <span>
                    請發送電子郵件至 <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a>，以考慮是否仍有可能接受您的申請。
                </span>]} />
            <QuestionBox
                lang={lng}
                question={["I have registered but, for some reasons, I cannot join the Admission Screening Test. Will my application be considered?", "我已經註冊，但由於某些原因，我無法參加入學甄選測驗。我的申請還會被考慮嗎？"]}
                answer={["You are required to take the Admission Screening Test (if you are applying for the first time), but, under certain circumstances, we can probably provide special arrangements. Please send us an email and elaborate your situation.", "如果你是第一次申請，則需要參加入學甄選測驗，但在某些情況下，我們可能會提供特殊安排。請給我們發送電子郵件並詳細說明你的情況。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How do I know my application is successfully submitted?", "我怎麼知道我的申請已成功提交？"]}
                answer={[<span>You should receive a confirmation email listing the course(s) you applied if your online application has been successfully submitted. If you have not received a confirmation email, please contact us by <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a> immediately.</span>
                    , <span>如果您的網上申請已成功提交，您應該會收到一封確認電子郵件，列出您所申請的課程。如果您沒有收到確認電子郵件，請立即通過 <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a> 與我們聯繫。</span>
                ]} />
            <QuestionBox
                lang={lng}
                question={["Can I change some details or my course choice after I submit the online application?", "提交網上申請後，我可以更改一些信息或我的課程選擇嗎？"]}
                answer={[<span>Yes. Please email us <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a> and state the changes by using the email address you provided in the online application form you have submitted.</span>, <span>可以。請通過您在已提交的網上申請表中提供的電子郵件地址，發送電子郵件至 <a href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</a> 並說明更改內容。</span>
                ]} />
            <QuestionBox
                lang={lng}
                question={["How will the information I submit online be used?", "我在線提交的信息將如何使用？"]}
                answer={["The information, collected in the application form, will be used to process the application, administration and statistical purposes. Unless those admitted students request to process academic credit records through the University, we may transfer students&apos; information to the according third party. Besides, we may also keep contact with you, in order to introduce you the latest information of EPYMT-related activities.", "在申請表中收集的信息將用於處理申請、管理和統計目的。除非被錄取的學生要求通過大學處理學分記錄，否則我們可能會將學生的信息轉移給相關的第三方。此外，我們還可能與您保持聯繫，以便向您介紹有關EPYMT相關活動的最新信息。"]}
            />
            <QuestionBox
                lang={lng}
                question={["Do I need to send in my school report cards or supporting documents for examination results?", "我需要提交學校成績單或成績證明文件嗎？"]}
                answer={["NO. Please DO NOT send in any neither academic supporting documents, nor school reports now. You may be requested to do so in the future.", "不需要。請現在不要提交任何學業支持文件或學校成績單。您可能會在未來被要求這樣做。"]}
            />
            <h2 className="font-bold text-2xl/8 my-4">{t("header_4")}</h2>
            <QuestionBox
                lang={lng}
                question={["When will I know if I can attend the Admission Screening Test?", "我什麼時候會知道我是否可以參加入學甄選測驗？"]}
                answer={[<span>Usually, we will invite most applicants to attend an Admission Screening Test on the date mentioned in <Link href="/en/application" className="text-indigo-500 dark:text-indigo-300">Application</Link> page. We will also send confirmation emails to students after the application period. Please keep checking your emails.</span>,
                <span>通常，我們會邀請大多數申請者在<a href="/zh-Hant/application" className="text-indigo-500 dark:text-indigo-300">申請</a>頁面中提到的日期參加入學甄選測驗。我們也會在申請期結束後向學生發送確認電子郵件。請持續檢查您的電子郵件。</span>
                ]}
            />
            <QuestionBox
                lang={lng}
                question={["How many papers will the Admission Screening Test contain and what language will be conducted in the test paper?", "入學甄選測驗會包含多少頁，試卷會使用什麼語言？"]}
                answer={["There will be ONE paper conducted in English for the Admission Screening Test. The test paper will be divided into a compulsory part and an elective part. No any past papers of the admission test can be found.", "入學甄選測驗將有一份以英語進行的試卷。試卷將分為必答部分和選答部分。沒有歷年試題。"]}
            />
            <QuestionBox
                lang={lng}
                question={["What is the purpose of the Admission Screening Test?", "入學甄選測驗的目的是甚麼？"]}
                answer={["The course instructors prepared the Admission Screening Test to evaluate the mathematical levels the applicants have achieved, so that the instructors can advise the most suitable course(s) for the applicants. For example, those with outstanding performances in the admission test may be invited to take the most mathematically challenging course─ &quot;Understanding Non-Euclidean Geometry&quot;.", "課程導師準備入學甄選測驗，以評估申請者所達到的數學水平，從而為申請者建議最合適的課程。例如，在入學測驗中表現優異的學生可能會被邀請參加數學挑戰性最高的課程——「非歐幾何賞析」。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How can I prepare for the admission test?", "我應該如何準備入學測驗？"]}
                answer={["No any specific drills are recommended.\nTo improve your mathematical ability, we advise you to concentrate on your school works and ask questions beyond what the textbook teaches. Also, try to read ahead of your syllabus. For example, if you are a F.4 student, you should try to take a look or even finish the F.5 mathematics textbook and work out the problems by yourself. You could also read some foreign mathematics textbooks or leisure books for enrichment. Nowadays, you can even surf the web to learn advanced mathematics.", "不建議進行任何特定的練習。\n為了提高你的數學能力，我們建議你專注於學校的功課，並提出超出教科書所教內容的問題。此外，嘗試提前閱讀你的課程大綱。例如，如果你是中四學生，你應該嘗試閱讀甚至完成中五數學教科書，並自己解決問題。你也可以閱讀一些外國數學教科書或休閒書籍來充實自己。如今，你甚至可以上網學習高等數學。"]}
            />
            <QuestionBox
                lang={lng}
                question={["I am an overseas student and I cannot join the admission test. How will my application be assessed?", "我是一名海外學生，無法參加入學測驗。我的申請將如何被評估？"]}
                answer={["We arrange alternative methods to assess your ability through a “take-home” test which will be arranged in a specific period. The admission assessment cannot be waived. Please contact us after you have submitted your application.", "我們會安排替代方法，透過一個在特定期間安排的「在家測驗」來評估你的能力。入學評估不能被豁免。請在提交申請後與我們聯繫。"]}
            />
            <QuestionBox
                lang={lng}
                question={["Are there past papers for the Admission Screening Test?", "入學甄選測驗有歷年試題嗎？"]}
                answer={["We won't provide past papers of the Admission Screening Test to anyone. They would not help you in the coming test even if you had them and we are not giving them out. The questions are designed by our creative University teachers, so the test questions will be different each year.", "我們不會向任何人提供入學甄選測驗的歷年試題。即使你擁有它們，這些試題對你即將參加的測驗沒有幫助，我們也不會提供。問題是由我們富有創意的大學老師設計的，因此每年的測驗問題都會不同。"]}
            />
            <QuestionBox
                lang={lng}
                question={["Do I need to pay cost on the date of Admission Screening Test?", "我需要在入學甄選測驗當天支付費用嗎？"]}
                answer={["You need not to pay any cost before you are admitted. After we have confirmed the admitted students, we will contact them for the issue of tuition payment.", "在你被錄取之前，你不需要支付任何費用。在我們確認被錄取的學生後，我們會聯繫他們處理學費支付事宜。"]}
            />
            <QuestionBox
                lang={lng}
                question={["How can I know if my application is successful or not?", "我怎麼知道我的申請是否成功？"]}
                answer={["You shall receive a notification and an attachment of a formal document from us through email. For applicants who do not receive any notification before July 1, you may consider your application unsuccessful.", "你應該會通過電子郵件收到我們的通知和正式文件的附件。對於在7月1日之前未收到任何通知的申請者，你可以認為你的申請不成功。"]}
            />
        </div>
    );
};