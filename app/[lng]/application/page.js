import Link from "next/link"



export default function Application() {
    return (
        <div className="flex justify-center w-full flex-col">
            <span className="font-bold text-lg/8 text-center">2024暑期班入學申請程序</span>
            <span className="font-bold text-lg/8 text-center">Application Procedure for Summer Classes 2024</span>
            <span className="text-base/8 text-center">報名日期：<span className="text-red-500">2024年4月8日 - 6月3日晚上11時59分</span></span>
            <span className="text-base/8 text-center"> Application period: <span className="text-red-500">8 April - 3 June 2024 (11:59pm)</span></span>
            <br />
            <span className="font-bold text-base/8">第一步：申請表</span>
            <span className="font-bold text-base/8">STEP 1 : Online Application Form</span>
            <span className="text-sm/8">請依照下列步驟完成網上申請。</span>
            <span className="text-sm/8">Please follow the steps to complete online application.</span>
            <span className="text-sm/8 mt-1">1. 登入<Link href="https://cloud.itsc.cuhk.edu.hk/SAYT/Login.aspx" className="text-indigo-500 dark:text-indigo-300">SAYT申請系統</Link>。(首次登入須先以電郵登記帳戶，EPYMT舊生亦須透過有效帳戶登入。)</span>
            <span className="text-sm/8 mb-1">1. Log into <Link href="https://cloud.itsc.cuhk.edu.hk/SAYT/Login.aspx" className="text-indigo-500 dark:text-indigo-300">SAYT Application System</Link>. (For first-time user, please register an account with your email. Even you were former EPYMT student, you still need a valid account to login.)</span>
            <span className="text-sm/8 mt-1">2. 根據指示填寫申請表。</span>
            <span className="text-sm/8 mb-1">2. Complete the application form.</span>
            <span className="text-sm/8">請留意以下事項:</span>
            <span className="text-sm/8">Please be reminded:</span>
            <span className="text-sm/8">- 曾報讀EPYMT課程之舊生, 必須填寫曾報讀之科目。</span>
            <span className="text-sm/8">- Former EPYMT students must complete the form at the link under &quot;Former EPYMT Applicant&quot; of the online application.</span>
            <span className="text-sm/8">- 申請EPYMT課程每科須繳交港幣50元報名費。</span>
            <span className="text-sm/8">- Application fee is HK$50 for each EPYMT course.</span>
            <span className="text-sm/8">- 申請人如申請多於一個課程，請於同一帳戶內遞交多份申請表。</span>
            <span className="text-sm/8">- Applicants who apply for more than one course should submit application separately for each course in the same account.</span>
            <span className="text-sm/8 mt-1">3. 登入帳戶內確認申請狀況，日後可查看成績。</span>
            <span className="text-sm/8 mb-1">3. Check application status. Applicants can also login the account to check their course result in the future.</span>
            <span className="text-xs text-red-500">* 現階段不用另外寄交文件或證書。</span>
            <span className="text-xs text-red-500">* It is not necessary to send any supporting documents at this stage.</span>
            <br />
            <span className="font-bold text-base/8">第二步： 入學試</span>
            <span className="font-bold text-base/8">STEP 2 : Admission Screening Test</span>
            <span className="text-sm/8 font-bold">舊生</span> 
            <span className="text-sm/8 font-bold">Former students</span> 
            <span className="text-sm/8 mt-1">舊生或須出席入學試。請細閱所報科目的網頁列出的免試條款，並於網上申請表「舊生」一欄的連結上，準確填寫所需資料。</span> 
            <span className="text-sm/8 mb-1">Former students of EPYMT may enjoy exemption of admission screening test under certain conditions. Please read the course webpage for the requirements, and complete the form at the link under &quot;Former EPYMT Applicant&quot; of the online application.</span> 
            <span className="text-sm/8 font-bold">本地學生 和 海外學生</span> 
            <span className="text-sm/8 font-bold">Local and Overseas students</span> 
            <span className="text-sm/8 mt-1">所有本地首次申請人均須參加於 <span className="text-red-500">2024年6月8日（星期六）</span>舉行的入學試。缺席者作放棄論。</span> 
            <span className="text-sm/8 mb-1">All local first-time applicants must attend the admission screening test on <span className="text-red-500">8 June 2024 (Sat)</span>. Failing to do so will be considered as withdrawing from application.</span> 
            <span className="text-sm/8 mt-1 text-green-500">入學試詳情請參閱<Link href="screening" className="text-indigo-500 dark:text-indigo-300">這裡</Link></span> 
            <span className="text-sm/8 mb-1 text-green-500">For test details, please click <Link href="screening" className="text-indigo-500 dark:text-indigo-300">here</Link></span>
            <br />
            <span className="text-xs">注意：本課程<span className="text-bold text-green-500">編排緊密</span>，學生須妥善安排時間，<span className="text-bold text-green-500">積極參與</span>，方能獲得最大學習成效。學生退學或無故缺課，將按照大學規章嚴格處理。</span>
            <span className="text-xs">Attention: The learning pace is fast and the schedule is tight. It <span className="text-bold text-green-500">requires tremendous effort</span> and commitment of the student to truly benefit from our programme. Absence and withdrawal are detrimental to learning, and we will also strictly follow the university regulations on matters related to taking leave and withdrawal.</span>
        </div>
    )
};