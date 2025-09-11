import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2020-2021";

const AwardCard = ({ name, school }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{school}</p>
        </div>
    );
};

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t: courseT } = await translation(lng, "course");
    const tmaStudents = ["MA Yi Xuan 馬逸軒", "TSE Shing Chun 謝承臻"];
    const tmaSchools = ["S5, New Territories Heung Yee Kuk Yuen Long District Secondary School", "S4, Queen Elizabeth School"];
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{courseT("tma")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{lng === 'en' ? 'Outstanding Performance Awards' : '卓越表現獎'}</h3>
                        {tmaStudents.map((name, index) => (
                            <AwardCard key={index} name={name} school={tmaSchools[index]} />
                        ))}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{"Yau Science Research Award"}</h3>
                        <AwardCard name="YAO Hanying 姚涵瑛" school="S5, Pui Ching Middle School" />
                    </div>
                </div>
                <h4>{lng === 'en' ? `Besides the above awards, there are 19 students granted Industrious Performance Awards due to their active participation in the course.` : `除上述獎項外，本科共有19名學生積極參與學習過程，獲頒勤奮表現獎。`}</h4>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{courseT("cnag")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{lng === 'en' ? 'Outstanding Performance Awards' : '卓越表現獎'}</h3>
                        <AwardCard name="TANG Tin Yui 鄧天睿" school="S5, Tung Wah Group of Hospitals Li Ka Shing College" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{"Yau Science Research Award"}</h3>
                        <AwardCard name="NG Chit Long Isaac 吳哲朗" school="S5, Pui Ching Middle School" />
                    </div>
                </div>
                <h4>{lng === 'en' ? `Besides the above awards, there are 7 students granted Industrious Performance Awards due to their active participation in the course.` : `除上述獎項外，本科共有7名學生積極參與學習過程，獲頒勤奮表現獎。`}</h4>
            </div>
            <AwardBox
                lang={lng}
                topic={courseT("tdg")}
                outstandingNameList={["CHAN Hok Yin 陳學賢", "MA Yi Xuan 馬逸軒"]}
                outstandingSchoolList={[
                    "S4, Pui Ching Middle School",
                    "S5, New Territories Heung Yee Kuk Yuen Long District Secondary School"
                ]}
                excellentNameList={[
                    "LAM Chak Yu 林澤宇",
                    "LIANG Ying Shan 梁穎珊",
                    "LUK Cheuk Yin 陸綽彥"
                ]}
                excellentSchoolList={[
                    "S6, Sheng Kung Hui Kei Hau Secondary School",
                    "S5, Madam Lau Kam Lung Secondary School Of Miu Fat Buddhist Monastery",
                    "S6, St. Francis Xavier's College"
                ]}
                hardwork={25}
            />

            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={[]}
                outstandingSchoolList={[]}
                excellentNameList={["LEE Kwai Ling 李桂鈴"]}
                excellentSchoolList={["S5, Leung Shek Chee College"]}
                hardwork={10}
            />

            <AwardBox
                lang={lng}
                topic={courseT("uneg")}
                outstandingNameList={["MA Yi Xuan 馬逸軒"]}
                outstandingSchoolList={["S5, New Territories Heung Yee Kuk Yuen Long District Secondary School"]}
                excellentNameList={["WONG Wai Chun 黃緯俊"]}
                excellentSchoolList={["S6, Yan Oi Tong Tin Ka Ping Secondary School"]}
                hardwork={8}
            />


        </div>
    );
}