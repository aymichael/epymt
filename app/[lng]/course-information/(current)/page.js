

export default async function CourseIntro({ params}) {
    const { lng } = await params;
    const title_1 = lng === "en" ? "Basic Course Introduction" : "基礎課程介紹";
    const title_2 = lng === "en" ? "Introduction to Towards Differential Geometry" : "微分幾何初探介紹";
    const title_3 = lng === "en" ? "Introduction to Number Theory and Cryptography" : "數論與密碼學介紹";
    return (
        <div className="flex justify-center w-full flex-col gap-8">
            <span className="font-bold text-2xl/8 underline-offset-8 underline">{title_1}</span>
            <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/Sdm71SnSgOg?si=zbxL5Jr-ahRV437a" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <span className="font-bold text-2xl/8 underline-offset-8 underline">{title_2}</span>
            <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/ZwCZtxKHAXs?si=aM6i2QFsbaTQ7IFG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <span className="font-bold text-2xl/8 underline-offset-8 underline">{title_3}</span>
            <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/jv-vNqcRHhM?si=SBpoQ7Hts0vAxJ1q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}