import Link from "next/link";



export default function Contact() {
    return (
        <div className="flex justify-center w-full flex-col gap-2 sm:text-base/8 text-sm/8">
            <span className="font-bold text-lg/8">查詢及聯絡方法 Contact</span>
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-1 font-bold align-top">
                            <span>地址 Address</span>
                        </td>
                        <td className="pl-4 py-1">
                            <div className="flex flex-col gap-1">
                                <span>新界沙田香港中文大學數學系</span>
                                <span>數學英才精進課程</span>
                                <span>EPYMT, Department of Mathematics</span>
                                <span>The Chinese University of Hong Kong, Shatin, N.T., Hong Kong</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-1 font-bold"><span>電話 Phones</span></td>
                        <td className="pl-4 py-1">(852) 3943 7962 / 3943 7989</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-1 font-bold"><span>傳真 Fax</span></td>
                        <td className="pl-4 py-1">(852) 2603 5154</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-1 font-bold"><span>電郵 Email</span></td>
                        <td className="pl-4 py-1"><Link href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};