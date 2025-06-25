import Link from "next/link";
import { translation } from "@/app/i18n-index";

export default async function CNAG({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "gpcn");
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <span className="text-2xl/8 font-bold text-center text-red-500">{t("outdated")}</span>
            <div className="flex flex-col gap-2">
                <span className="font-bold">{t("mediumOfInstruction.header")}</span>
                <span>{t("mediumOfInstruction.content")}</span>
                <span className="font-bold">{t("expectedApplicants.header")}</span>
                <span>適合入學試成績優良或曾修讀「微分幾何初探」課程之同學</span>
                <span className="font-bold">{t("introduction.header")}</span>
                <div className="flex flex-col">本科目特別適合程度較高或曾參與課程的同學作進階修讀。我們將以複平面為起點，討論它的特殊幾何結構，以及其上變換的對稱性和保圓性，並介紹複平面與球面的對應和Mobius變換；掌握了這些知識後，同學便可從一個現代的幾何觀點去理解各種「非歐幾何」異常有趣的性質，包括：平行與超平行、非歐距離、常曲率空間和非歐三角學等。</div>
            </div>
            <div className="flex flex-col gap-2 p-4 border-gray-300 rounded-2xl border-2">
                <span className="font-bold text-xl/8 text-center">{t("conditions.title")}</span>
                <span>{t("conditions.description")}</span>
            </div>
        </div>
    );
};