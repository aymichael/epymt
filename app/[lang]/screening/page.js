import Link from "next/link";

export function generateStaticParams() {
    return [{lang: "en"}, {lang: "zh"}];
}

export default function Screening() {
    return (
        <div className="flex justify-center w-full flex-col text-base/8">
            <span className="font-bold text-lg/8 text-center">Announcement of Admission Screening Test</span>
            <br />
            <span>If you are not a former EPYMT student, you MUST attend the take-home screening test.</span>
            <br />
            <span className="font-bold">Information of the take-home test:</span>
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td>Test Date and Time: </td>
                        <td><span className="text-red-500">10:30 a.m. on 8 June 2024 (Saturday)</span></td>
                    </tr>
                    <tr>
                        <td>Submission Time: </td>
                        <td><span className="text-red-500">00:00 to 23:59 on 11 June 2024 (Tuesday)</span></td>
                    </tr>
                    <tr>
                        <td>Language: </td>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>Number of test paper: </td>
                        <td>1 only</td>
                    </tr>
                    <tr>
                        <td>Content: </td>
                        <td>From anywhere in mathematics; including something beyond secondary school curriculum</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <span className="font-bold">Points to Note:</span>
            <span>1. Please ensure that your email accounts have enough mail space.</span>
            <span>2. Please add our email address (<Link href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</Link>) into your address book so that our message will not be moved to junk mails.</span>
            <span>3. If you have updated email address, please inform us as soon as possible.</span>
            <span>4. Please check your email frequently these days.</span>
            <span>5. If you are overseas applicants with different time zones, please let us know by email in advance for special arrangement.</span>
            <br />
            <span className="font-bold">**Important**</span>
            <span>1. The test paper will be sent to you by email on 8 June (Saturday, 10:30 a.m. Hong Kong Time).</span>
            <span>2. Please return your answers from 00:00 to 23:59 on 11 June (next Tuesday) by email to <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</Link>.</span>
            <br />
            <span className="text-sm/8">Enquiries: <Link href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</Link></span>

        </div>
    );
}