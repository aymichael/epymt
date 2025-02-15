export default function CourseIntro() {
    return (
        <div className="flex justify-center w-full flex-col gap-2 font-serif">
            <span className="font-bold text-lg">基礎課程介紹</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Sdm71SnSgOg?si=zbxL5Jr-ahRV437a" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <span className="font-bold text-lg">微分幾何初探介紹</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwCZtxKHAXs?si=aM6i2QFsbaTQ7IFG" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <span className="font-bold text-lg">數論與密碼學介紹</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jv-vNqcRHhM?si=SBpoQ7Hts0vAxJ1q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}