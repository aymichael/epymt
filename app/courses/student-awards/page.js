import Link from "next/link";

export default function StudentAwards(){
    const years = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23","24"];
    return (
        <div className="flex justify-center w-full flex-col gap-2 md:text-base sm:text-sm text-xs">
            <span>
                本課程設有各種獎學金，以獎勵表現優良和力求上進的學生。 學業獎項有卓越表現和優異表現獎，在每季頒發予該季科目裡表現上佳的學生。 表揚才智和努力不懈的求學態度。 對於熱誠投入的學生，亦設有榮譽生獎，給予全年積極參予課程，以致數學程度達到高等水平，又樂於推動數學英才培訓的學生。 另外，也有林健忠獎學金和數學系的獎學金，頒予將來入讀中文大學數學系的學生。
            </span>
            <span>
            There are various types of scholarships to recognize the effort and brilliance of our students. The academic awards are &quot;Outstanding Performance Award&quot; and &quot;Excellent Performance Award&quot;. These awards are given every quarter to the best students in the course during the quarter. It recognizes not only talent, but also a positive attitude towards knowledge, the willingness and persistence to work hard. In addition to these two awards, the &quot;EPYMT Fellowship&quot; is given once a year to those students who have achieved high standard in mathematics through enthusiastic participation throughout the year, and who are willing to promote mathematics talent education. Besides, there are &quot;Lam Kin Chung Scholarship&quot; and other departmental scholarships for those students who will study mathematics in the Chinese University of Hong Kong.
            </span>
            <span className="font-bold text-lg">得獎學生名單 List of Student Awards</span>
            <table className="table-auto text-base">
                <tbody>
                    {years.reverse().slice(0,-1).map((year,idx) => (
                        <tr key={idx}>
                            <td className="p-2">
                                <div className="flex flex-col">
                                    <span>20{years[idx+1]}-20{years[idx]}學年</span>    
                                    <span>Year of 20{years[idx+1]}-20{years[idx]}</span>
                                </div>
                            </td>
                            <td className="p-2">
                                <Link href={`/courses/student-awards/${years[idx+1]}${years[idx]}`} className="text-indigo-500 dark:text-indigo-300 underline">名單 List</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};