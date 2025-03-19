import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex justify-center w-full flex-col gap-2 sm:text-base/8 text-sm/8">
            <span className="font-bold text-lg/8">查詢及聯絡方法 Contact</span>
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-1 font-bold align-top flex flex-row items-center gap-2"><span>地址 Address</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg></td>
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
                        <td className="pr-4 py-1 font-bold flex flex-row items-center gap-2"><span>電話 Phones</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg></td>
                        <td className="pl-4 py-1">(852) 3943 5295</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-1 font-bold flex flex-row items-center gap-2"><span>傳真 Fax</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5v-4h-16v4h-4v14h2.764l2.001-4h14.472l2 4h2.763v-14h-4zm-14-2h12v2h-12v-2zm16 13.055l-1.527-3.055h-16.944l-1.529 3.056v-9.056h20v9.055zm-8-7.055h2v2h-2v-2zm3 0h2v2h-2v-2zm-12 0h7v2h-7v-2zm13 8l3 6h-18l3-6h2.203l-1.968 4h11.528l-1.956-4h2.193z"/></svg></td>
                        <td className="pl-4 py-1">(852) 2603 5154</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-1 font-bold flex flex-row items-center gap-2"><span>電郵 Email</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg></td>
                        <td className="pl-4 py-1"><Link href="mailto:epymt@math.cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt@math.cuhk.edu.hk</Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};