import Link from "next/link";
import Image from "next/image";



export default function Courses() {
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <span className="font-bold text-lg/8">引言</span>
            <span className="text-sm/8">
                幾何學的應用廣泛深刻，發展源遠流長，是數學的重要分支。中學數學課程所涵蓋的，只是簡單的「歐幾里德幾何」和以坐標系統來描述的「解析幾何」。 這些傳統的幾何學早在18世紀以前，便已發展完備。而推動近代幾何進展的「非歐幾何」和「微分幾何」卻是在19世紀以後才告面世的。 這些劃時代的幾何學不單結集了偉大的數學家如高斯、羅巴切夫斯基、黎曼和龐卡萊等對幾何的深思與創見；它們的出現更標誌著人類在幾何學上的飛躍與革新。 愛恩斯坦解構時空的「廣義相對論」正是建立在這新發展的幾何上的。
            </span>
            <span className="text-sm/8">
                另一方面，數論在數學研究中的地位超然，是推動數學發展的主要動力之源，它極端困難的問題和精妙深刻的定理，向來是大數學家如費馬 (Fermat)、歐拉 (Euler)、高斯 (Gauss) 和黎曼 (Riemann) 等廢寢忘餐， 鍥而不捨的研究對象。時至今日，數論的研究成果不僅引人注目，而且，近十多年來在科學技術，持別是在計算機及資訊科技方面獲得越來越重要的應用。尖端的密碼學所應用的代數幾何學 (Algebraic Geometry) 與解決費馬大定理 (Fermat Last Theorem) 的橢圓曲線 (Elliptic Curves) 理論，正是數論研究所衍生而來的！
            </span>
            <span className="text-sm/8">
                「數學英才精進課程」在這個暑期，將圍繞這些近代數學的主流課題，分別開設「近世代數初探」，「複數與解析幾何」，「離散數學導論」，「數論與密碼學」和「微分幾何初探」*五門精采的課程，向熱衷數學，有興趣探索、理解奇妙數學世界的中學同學，介紹近代幾何及數論的入門知識。「近世代數初探」，「離散數學導論」和「複數與解析幾何」適合初次報讀的同學，不要求高等數學作預備知識，將升中四的同學，亦可藉此打好數理基礎。而「數論與密碼學」和「數論與密碼學」專為高中同學而設，同學於中四、中五數學科中，須有優異表現和濃厚興趣。同學可按個人的興趣與數學程度，選擇相應科目修讀，讓豐富新奇的數學知識伴你渡過一個有意義的暑假。
            </span>
            <span className="text-sm/8">
                要善用暑期，要嘗試了解近代數學的發展？參加「數學英才精進課程」的暑期班是你的最佳選擇。
            </span>
            <span className="text-xs text-red-500">
                *各科均為香港中文大學入學考慮元素之一，完成任何一科者，如日後入讀香港中文大學，可以用該等科目申請扣減課業學分。過去亦有學生憑該等科目，獲得海外大學的學分認可。
            </span>
            <br />
            <span className="font-bold text-lg/8">科目詳情</span>
            <table className="table-auto md:text-base/8 sm:text-sm/8 text-xs">
                <tbody>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>主題</span>
                                <span>Courses</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <Link href="/courses/introduction/tma" className="text-[#C71585]">近世代數初探 Towards Modern Algebra</Link>
                                <Link href="/courses/introduction/cnag" className="text-[#C71585]">複數與解析幾何 Complex Numbers and Analytic Geometry</Link>
                                <Link href="/courses/introduction/idm" className="text-[#C71585]">離散數學導論 Introduction to Discrete Mathematics</Link>
                                <Link href="/courses/introduction/ntc" className="text-[#C71585]">數論與密碼學 Number Theory and Cryptography</Link>
                                <Link href="/courses/introduction/idg" className="text-[#C71585]">微分幾何初探 Introduction to Differential Geometry</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>入學方法</span>
                                <span>Application Method</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span><Link href="/application" className="text-indigo-500 dark:text-indigo-300">網上申請</Link>(包括申請步驟及入學試詳情)</span>
                                <span><Link href="/application" className="text-indigo-500 dark:text-indigo-300">Online Application</Link>(with steps and admission test details)</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>上課時間</span>
                                <span>Date and Time</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>請參閱<Link href="#leaflet" className="text-indigo-500 dark:text-indigo-300">課程海報單張</Link>及上述各科網頁</span>
                                <span>Please refer to the <Link href="#leaflet" className="text-indigo-500 dark:text-indigo-300">programme poster and leaflet</Link> and course pages above</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>上課地點</span>
                                <span>Venue</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>請參閱上述各科網頁</span>
                                <span>Please refer to the course pages above</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>形式</span>
                                <span>Learning
                                    Activities</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>課程將以授課和導修的形式進行  Lectures and Tutorials</span>
                                <span>學業評核主要包括課堂與習作表現及小測等</span>
                                <span>Assessment includes class performance, assignment and quizzes</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>對象</span>
                                <span>Target Students</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>不論級別的中學生，數學能力視乎所報讀科目的要求，但通常是班上表現最好的一批。</span>
                                <span>過往曾修讀本課程的學生將獲優先考慮。</span>
                                <span>Secondary school students with distinguished mathematical performance in class.</span>
                                <span>Former EPYMT students will be considered with priority.</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>學費</span>
                                <span>Tuition</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>根據大學規定，學費為每科港幣4,000元 (已包括報名費50元)。</span>
                                <span>Tuition fee is HK$4,000 (included application fee $50).</span>
                                <span>詳細請參閱上述各科網頁</span>
                                <span>Please refer to the course pages above.</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 font-bold align-top border border-black bg-[#E0D0B0]">
                            <div className="flex flex-col gap-1">
                                <span>學分認可、 獎學金</span>
                                <span>Credit Recognition and Scholarship</span>
                            </div>
                        </td>
                        <td className="px-2 py-2 border border-black bg-[#F0E0C0]">
                            <div className="flex flex-col gap-1">
                                <span>科目總成績合格的學生將獲頒授証書</span>
                                <span>Students who have passed the assessment will receive a certificate</span>
                                <span>學分科目合格的學生如入讀香港中文大學學士學位課程，該科可獲大學承認1-2學分</span>
                                <span>Credits granted to students who have passed in credit-bearing course(s) upon official registration as CUHK undergraduates</span>
                                <span>根據大學規定，出席7整天或以上者可獲不低於港幣1,000元獎學金作為學費回扣*</span>
                                <span>Students who have attended at least 7 full days will be granted a scholarship not lower than HK$1000*</span>
                                <span>本課程另設多項獎學金，給予學業良好或積極參與的學員</span>
                                <span>Additional amount of scholarship will be granted to students with outstanding performance</span>
                                <span>For every Yau Science Award team that has submitted a complete Mathematics project, each team member will receive a deduction of HK$1,500 in the tuition for the EPYMT program on top of the current scholarship. Details could be found at <Link href="https://yashk.org.hk/yau-award" className="text-indigo-500 dark:text-indigo-300">https://yashk.org.hk/yau-award</Link>**</span>
                                <span className="text-xs">*如獲學費減免，而只需繳交少於1,000元，則只回扣所交的學費。</span>
                                <span className="text-xs">*If the tuition is less than HK$1,000 after fee remission, exact amount will be granted.</span>
                                <span className="text-xs">**如獲學費減免，而只需繳交少於1,500元，則只回扣所交的學費。</span>
                                <span className="text-xs">**If the tuition is less than HK$1,500 after fee remission, exact amount will be granted.</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="text-lg/8 font-bold" name="leaflet">課程海報單張</span>
            <Image src="/epymt/EPYMT_poster.jpg" alt="課程海報" width={2475} height={3499} />
            <Image src="/epymt/EPYMT_leaflet_1.jpg" alt="課程單張" width={1754} height={1240} />
            <Image src="/epymt/EPYMT_leaflet_2.jpg" alt="課程單張" width={3500} height={2475} />
        </div>
    );
};