function SharingBox({ content, author }) {
    return (
        <div className="border-2 border-l-8 border-l-blue-200 dark:border-l-blue-800 border-gray-300 dark:border-gray-600 rounded-xl p-4 sm:p-6 flex flex-col gap-3 my-4 bg-white dark:bg-gray-800 shadow-sm ">
            <span className="italic text-gray-700 dark:text-gray-300 text-lg/8 sm:text-xl/8 whitespace-pre-line">
                &quot;{content}&quot;
            </span>
            <span className="font-bold self-end">
                —— {author}
            </span>
        </div>
    );
}
export default async function AlumniSharing({ params }) {
    const { lng } = await params;
    const data = [
        {
            content: 'The program has been a rewarding experience for my son. His professors, especially Professor Au, were engaging and helped him develop his passion for math and learning. I found he has matured a lot over the summer, becoming more responsible and independent. EPYMT has made a positive impact on his knowledge and personal development.',
            authors: 'Parent of a student, K. CHOW, 2011'
        },
        {
            content: 'EPYMT offers precious opportunity for junior form students to enhance their interests and broaden their horizon in mathematics. Thanks to the rich and challenging content of the courses and the interesting and inspiring teachings of the professors, my son has since then built up determination to pursue further in mathematics study.',
            authors: 'Parent of a student, Mrs. WONG, 2011'
        },
        {
            content: "It was a great experience to be a member of the EPYMT summer course on number theory at CUHK. The contents taught were up to the university standards in terms of their rigors. As a person who aspires to study mathematics further in university, it was very enjoyable to study things that are normally not dealt with in high school. The teaching assistants were very knowledgeable and were skillful in their teaching methods. As the course was taught in Cantonese, I wasn't able to understand some parts of the lectures. However, the teaching assistants were very nice to approach me and answer any questions that I had. I am very content with professor Charles Li's lectures and the EPYMT program in general, and I personally would recommend it to any high school students interested in mathematics.",
            authors: 'Korean student, AHN Yong Jin, 2011'
        },
        {
            content: 'Having participated in EPYMT for two years – Towards Differential Geometry (DG) in July 2010 and Understanding Non-Euclidean Geometry (NEG) in July 2011, I would say both of them are courses that have altered my life.\n' +
                'Each programme lasted for 9 full days.  On each day we attended a 3-hours lecture in the morning and a 3-hour tutorial session in the afternoon.  During the lecture time, we learnt techniques and derived equations, while in the tutorial session we did practical exercises and brought up questions for discussion. Definitely, this intensive schedule of learning colorfully enriched my summer holiday in the past two years. \n' +
                'EPYMT gives me not only an opportunity to grab a taste of what mathematics at university looks like, but it also  improves both my fundamental knowledge and problem-solving skill  on certain topics. DG has strengthened my understanding on calculus, whereas NEG widened my exposure to different realms of geometry from basic definitions to various models of hyperbolic geometry. \n' +
                'Moreover, EPYMT also serves as a platform for students to exchange their knowledge and share their experiences. By joining this programme, I have met a lot of friends who share common interests. We talked about various topics ranging from our school life to extracurricular activities that we participated before. Even till now, we shall hold reunions regularly and have fun together during weekends and holidays. \n' +
                'I am glad and proud of myself that I have been accepted to participate in EPYMT for two years. It is to my surprise and with great pleasure that I could make use of this opportunity to learn mathematics beyond the secondary school curriculum and explore my own interest. Thanks to EPYMT - I have decided to pursue my study in Mathematics in the coming university life.  These two courses have definitely added value and gave me a wonderful memory in my life. ',
            authors: 'Local student, FUNG Dalton Yin-Nam, 2011'
        },
        {
            content: '參加這個暑期班，令我學到不少數學知識，啟發了我的數理邏輯和思考能力，還增強解難技巧。在這個暑假裡，我參加了複數的幾何面貌和數論與密碼學。由於課程達到大學程度，需要有一定數理邏輯，才能掌握課程所教授的知識。雖然我的校內數學成績不俗，平日亦有閱讀數學書籍，但在教授有關高等數學的知識，因未能以初中的所學的知識去理解，有時候不能跟上課程進度。\n' +
                '幸而，身邊不少同學曾經修讀附加數和純數，亦願意所時間去講解當中所運用的數學知識，如：方法、技巧......，令我可以繼續吸收知識。此外，在同學對授課主題不太完全掌握和未能完成習作的時候，助教們都願意為同學安排補課，讓同學能夠學會最多的知識。\n' +
                '與此同時，同學之間亦凝聚了良好的學習氣氛，各自提出不同的見解，找出答案。在完成習作的時候，我需要花上不少時間來搜尋有關主題的資料和閱讀有關的書籍來填補有關高中的數學知識，來理解習作所涉及的理論。而且課程要求同學運用課堂上所學的知識去完成習作，不像教科書會不斷提供提示，這需要同學改變一貫的思考模式，同時亦訓練了我的解難能力。\n' +
                '不過，除了學懂不少理論外，我還認識了一班好朋友，而這些好朋友，就是我的助教和同學。雖然相處的時間只是短短九天，同學和助教之間彼此都建立了深厚的感情。最後，感謝EPYMT給我一個充實的暑假，美好的回憶！',
            authors: 'Local student, HO Sze Man, 2011'
        },
        {
            content: 'I took part in the course of EPYMT, "Towards Differential Geometry" in last summer. I have learnt some interesting math which has never been taught in the curriculum I study in UK. Also, I have a chance to try tertiary education in CUHK. With no doubt, the math I learnt in EPYMT course is difficult and abstract. During the course, the teaching assistants, who mostly are the third-year undergraduates, provided plenty of aid to me. They are very friendly and energetic so that the tutorial sessions were not dull at all. I relished this valuable opportunity of studying math in that summer. It is a wonderful chance for secondary school students who are eager for gaining advanced mathematical knowledge. Last but not least, it is an awesome and playful course which you will never think it is a waste for your precious summer!',
            authors: 'Overseas student, Colman YAU Ho Man, 2011'
        }
    ]
    // shuffle the data
    const length = data.length;
    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl/8 text-center mb-4">{lng === "en" ? "Alumni Sharing" : "舊生分享"}</h1>
            <p>{lng === "en" ? "Since 2002, EPYMT has nurtured various local and international school students. Many of them learnt the mathematics taught in EPYMT courses with enjoyment and enlightenment. Here we share some encouraging opinions of students and parents." : "自2002年起，數學英才精進課程培育了來自本地及國際學校的學生。他們當中有不少人都樂在其中地學習課程所教授的數學知識，並從中獲益良多。以下是一些學生及家長的分享。"}</p>
            {/* randomly choose 3 content */}
            {data.slice(0, 3).map((item, index) => (
                <SharingBox key={index} content={item.content} author={item.authors} />
            ))}
        </div>
    );
};