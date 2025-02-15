import QuestionBox from "../qBox";
import Link from "next/link";

export default function Student() {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-lg">About EPYMT</span>
            <QuestionBox
                question={<span>How do I choose the courses of EPYMT?</span>}
                answer={
                    <div className="flex flex-col gap-2">
                        <span>There are several courses of different levels for you to choose. In general, if you are Secondary 3 or above, if you enjoy mathematics and usually are the better ones in your class, there should be a course suitable for you. If you are of lower forms but already have mathematics skills of higher forms, you may also find a suitable course according to the following levels.</span>
                        <table className="table-auto md:text-sm text-xs border border-black border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2 py-2 text-left">Course</th>
                                    <th className="px-2 py-2 text-left">Student level</th>
                                    <th className="px-2 py-2 text-left">Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-black">
                                    <td className="px-2 py-2 text-left">Geometric Perspectives of Complex Numbers (CUSA1014)</td>
                                    <td className="px-2 py-2 text-left">Finished S3 (Grade 9), advancing to S4 (Grade 10)</td>
                                    <td className="px-2 py-2 text-left">- A natural extension secondary school coordinate geometry module</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="px-2 py-2 text-left">Number Theory and Cryptography (SAYT1114)</td>
                                    <td className="px-2 py-2 text-left">Finished S4 (Grade 10), advancing to S5 (Grade 11)</td>
                                    <td className="px-2 py-2 text-left">- Fun among numbers</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="px-2 py-2 text-left">Towards Differential Geometry (SAYT1134)</td>
                                    <td className="px-2 py-2 text-left">Finished S5 (Grade 11), advancing to S6 (Grade 12)</td>
                                    <td className="px-2 py-2 text-left">- Must know Calculus (differentiation and integration)</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="px-2 py-2 text-left">Understanding Non-Euclidean Geometry (SAYT1214)</td>
                                    <td className="px-2 py-2 text-left">Top of class in S6 (Grade 12) or former EPYMT students</td>
                                    <td className="px-2 py-2 text-left">- Most challenging course; beyond the reach of the vast majority of F.4 students</td>
                                </tr>
                            </tbody>
                        </table>
                        <span>It is advisable to seek consultation from school teachers to decide the course which suits you most, and ask teacher/principal to write you an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate students&apos; mathematical maturity before admitting them.</span>
                        <span>For course details and registration, please visit <Link href="courses" className="text-[#993300]">here</Link>.</span>
                    </div>
                }
            />
            <QuestionBox
                question={<span>How much time and effort do I need to spend on EPYMT?</span>}
                answer={<span>You need to spend 3 intensive weeks on a course. Besides lessons on 9 whole days, you need the other days to prepare, work on exercises, and review. The learning pace is fast and the course schedule is tight. A lot of after class revision is needed. Students should be highly self-motivated and committed. Also, students are expected to be very curious and fond of exploring mathematics beyond his/her level. Otherwise, many of them will lag behind.</span>}
            />
            <QuestionBox
                question={<span>What language will be conducted in the courses?</span>}
                answer={<span>The lecturers and teaching assistants will use Cantonese in class but all notes and teaching materials are conducted in English.</span>}
            />
            <span className="font-bold text-lg">Applying EPYMT</span>
            <QuestionBox
                question={<span>I am mathematically well beyond the average of my age. However, I am only F.2 (or any junior form), am I able to attend your courses?</span>}
                answer={
                    <span>
                        We welcome junior form student to take EPYMT course, but please note that EPYMT introduces students more advanced and sophisticated mathematics than that they learn in school so junior form students should be mature enough to face difficulties and frustration. It is important to consider if junior form students are able to learn mathematics together with higher form students (both in mathematics ability and personality).
                        <br />
                        It is advisable to seek consultation from school teachers to decide the course which suits you most, and ask teacher/principal to write you an online recommendation letter. We will also assess every applicant by an Admission Screening Test to evaluate students&apos; mathematical maturity before admitting them.
                        <br />
                        For course details and registration, please visit <Link href="courses" className="text-[#993300]">here</Link>.
                    </span>
                }
            />
            <QuestionBox
                question={<span>I am a senior form student, and I am interested in EPYMT. What courses are suitable for me?</span>}
                answer={
                    <span>
                        The following courses are designed for the students who are advancing to Secondary 4 or 5. Yet, they are still challenging.
                        <br />
                        - Geometric Perspectives of Complex Numbers (CUSA1014)
                        <br />
                        - Number Theory and Cryptography (SAYT1114)
                        <br />
                        If you are fond of geometry, probably you should choose “Geometric Perspectives of Complex Numbers”, which is a natural extension to your secondary school coordinate geometry module. Or if you enjoy the funniness among numbers, “Number Theory and Cryptography” would be your suitable choice.
                        <br />
                        If you have learnt Calculus (differentiation and integration), you are welcome to apply “Towards Differential Geometry” which suits Secondary 5 or 6 students. If you are able to complete this course at Form 4, you may have a great advantage to become a high-achiever in your Form 5 syllabus. However, without adequate knowledge of Calculus, we advise you not to apply.<br />
                        Finally, the most mathematically challenging course, “Understanding Non-Euclidean Geometry”, is beyond the reach of the vast majority of F.4 students, and it is only suitable for senior form students who have distinguished mathematical performance or have taken any previous EPYMT course. You may consult your teacher if you are capable to take this course.
                    </span>
                }
            />
            <QuestionBox
                question={<span>I am a Form 4/5 student but I have never learnt complex number before. Will it be a barrier for me to attend any of your courses?</span>}
                answer={<span>No, knowing complex numbers or not will not make a big difference, except for the advanced course &quot;Understanding Non-Euclidean Geometry&quot;. &quot;Towards Differential Geometry&quot; and &quot;Geometric Perspectives of Complex Number&quot; are especially designed for F.5 students. However, if you apply for the course &quot;Towards Differential Geometry&quot;, we do expect you to have reasonable competence with calculus.</span>}
            />
            <QuestionBox
                question={<span>I am studying in overseas / mainland high school, but I plan to come to Hong Kong in the period when EPYMT courses start. Can I still apply EPYMT?</span>}
                answer={<span>Yes. We will assess your ability through a “take-home” test which will be arranged in a specific period. Please inform us your situation as soon as possible.</span>}
            />
            <QuestionBox
                question={<span>What if I can only attend several dates of the course?</span>}
                answer={<span>Our courses are intensive and they demand tremendous efforts to master the course contents. Therefore, it is advisable not to skip any one of the lecture, even to take a leave. Attending several dates of the course is strongly discouraged and your application may not be considered if such a condition is acknowledged.</span>}
            />
            <span className="font-bold text-lg">Submitting the online application</span>
            <QuestionBox
                question={<span>If I had applied EPYMT last year, do I still ask my teacher/principal to write me another recommendation letter this year?</span>}
                answer={<span>A note on the application form states that “recommendation is NOT required if the applicant had applied for admission to EPYMT before” so you can choose not to hand another recommendation letter to us. However, if the teacher wants to write another stronger recommendation letters for the student this year, we will still accept.</span>} />
            <QuestionBox
                question={<span>I have registered, but for some reasons, my teacher/principal cannot complete the online recommendation before deadline. Will my application still be considered?</span>}
                answer={<span>If you submit the online application before deadline, we can actually allow the recommendation letter to be submitted a bit later. Nevertheless, please inform us your situation and submit it as soon as possible so that the process of your application will not be postponed.</span>} />
            <QuestionBox
                question={<span>I heard of this year&apos;s EPYMT courses after the application deadline! Can I still apply?</span>}
                answer={<span>Please email us <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-[#993300]">epymt@math.cuhk.edu.hk</Link> to consider if it is still possible to accept your application at the time of your inquiry.</span>} />
            <QuestionBox
                question={<span>I have registered but, for some reasons, I cannot join the Admission Screening Test. Will my application be considered?</span>}
                answer={<span>You are required to take the Admission Screening Test (if you are applying for the first time), but, under certain circumstances, we can probably provide special arrangements. Please send us an email and elaborate your situation.</span>} />
            <QuestionBox
                question={<span>How do I know my application is successfully submitted?</span>} 
                answer={<span>You should receive a confirmation email listing the course(s) you applied if your online application has been successfully submitted. If you have not received a confirmation email, please contact us by <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-[#993300]">epymt@math.cuhk.edu.hk</Link> immediately.</span>} />
            <QuestionBox
                question={<span>Can I change some details or my course choice after I submit the online application?</span>}
                answer={<span>Yes. Please email us <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-[#993300]">epymt@math.cuhk.edu.hk</Link> and state the changes by using the email address you provided in the online application form you have submitted.</span>} />
            <QuestionBox
                question={<span>How will the information I submit online be used?</span>}
                answer={<span>The information, collected in the application form, will be used to process the application, administration and statistical purposes. Unless those admitted students request to process academic credit records through the University, we may transfer students&apos; information to the according third party. Besides, we may also keep contact with you, in order to introduce you the latest information of EPYMT-related activities.</span>} />
            <QuestionBox
                question={<span>Do I need to send in my school report cards or supporting documents for examination results?</span>}
                answer={<span>NO. Please DO NOT send in any neither academic supporting documents, nor school reports now. You may be requested to do so in the future.</span>} />
            <span className="font-bold text-lg">Admission Screening Test</span>
            <QuestionBox 
                question={<span>When will I know if I can attend the Admission Screening Test?</span>} 
                answer={<span>Usually, we will invite most applicants to attend an Admission Screening Test on the date mentioned at step 3 of our <Link href="application" className="text-[#993300]">Application Procedure page</Link>. Details of the test including the test date, venue, campus map and other necessary information can be referred <Link href="screening" className="text-[#993300]">here</Link>. We will also send confirmation emails to students after the application period. Please keep checking your emails.</span>} />
            <QuestionBox 
                question={<span>How many papers will the Admission Screening Test contain and what language will be conducted in the test paper?</span>} 
                answer={<span>There will be ONE paper conducted in English for the Admission Screening Test. The test paper will be divided into a compulsory part and an elective part. No any past papers of the admission test can be found.</span>} />

            <QuestionBox 
                question={<span>What is the purpose of the Admission Screening Test?</span>} 
                answer={<span>The course instructors prepared the Admission Screening Test to evaluate the mathematical levels the applicants have achieved, so that the instructors can advise the most suitable course(s) for the applicants. For example, those with outstanding performances in the admission test may be invited to take the most mathematically challenging course─ &quot;Understanding Non-Euclidean Geometry&quot;.</span>} />
            <QuestionBox 
                question={<span>How can I prepare for the admission test?</span>} 
                answer={<span>No any specific drills are recommended.<br /><br />To improve your mathematical ability, we advise you to concentrate on your school works and ask questions beyond what the textbook teaches. Also, try to read ahead of your syllabus. For example, if you are a F.4 student, you should try to take a look or even finish the F.5 mathematics textbook and work out the problems by yourself. You could also read some foreign mathematics textbooks or leisure books for enrichment. Nowadays, you can even surf the web to learn advanced mathematics.</span>} />
            <QuestionBox 
                question={<span>I am an overseas student and I cannot join the admission test. How will my application be assessed?</span>} 
                answer={<span>We arrange alternative methods to assess your ability through a “take-home” test which will be arranged in a specific period. The admission assessment cannot be waived. Please contact us after you have submitted your application.</span>} />
            <QuestionBox 
                question={<span>Are there past papers for the Admission Screening Test?</span>} 
                answer={<span>We won&apos;t provide past papers of the Admission Screening Test to anyone. They would not help you in the coming test even if you had them and we are not giving them out. The questions are designed by our creative University teachers, so the test questions will be different each year.</span>} />
            <QuestionBox 
                question={<span>Do I need to pay cost on the date of Admission Screening Test?</span>} 
                answer={<span>You need not to pay any cost before you are admitted. After we have confirmed the admitted students, we will contact them for the issue of tuition payment.</span>} />
            <QuestionBox 
                question={<span>How can I know if my application is successful or not?</span>} 
                answer={<span>You shall receive a notification and an attachment of a formal document from us through email. For applicants who do not receive any notification before July 1, you may consider your application unsuccessful.</span>} />

        </div>
    );
};