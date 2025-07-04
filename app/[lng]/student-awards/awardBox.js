const AwardCard = ({ name, school }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{school}</p>
        </div>
    );
};

const AwardBox = ({ lang, topic, outstandingNameList, outstandingSchoolList, excellentNameList, excellentSchoolList, hardwork }) => {
    // Basic validation to ensure arrays are of equal length
    if (
        outstandingNameList.length !== outstandingSchoolList.length ||
        excellentNameList.length !== excellentSchoolList.length
    ) {
        return <div className="text-red-500">Error: Name and school lists must have equal lengths.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{topic}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{lang === 'en' ? 'Outstanding Performance Awards' : '卓越表現獎'}</h3>
                    {outstandingNameList.length === 0 ? (
                        <h4 className="text-lg">{"N/A"}</h4>
                    ) :
                    outstandingNameList.map((name, index) => (
                        <AwardCard key={index} name={name} school={outstandingSchoolList[index]} />
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{lang === 'en' ? 'Excellent Performance Awards' : '優異表現獎'}</h3>
                    {excellentNameList.length === 0 ? (
                        <h4 className="text-lg">{"N/A"}</h4>
                    ) :
                    excellentNameList.map((name, index) => (
                        <AwardCard key={index} name={name} school={excellentSchoolList[index]} />
                    ))}
                </div>
            </div>
            {hardwork > 0 && (
                <h4>{lang === 'en' ? `Besides the above awards, there are ${hardwork} students granted Industrious Performance Awards due to their active participation in the course.` : `除上述獎項外，本科共有${hardwork}名學生積極參與學習過程，獲頒勤奮表現獎。`}</h4>)}
        </div>
    );
};

export default AwardBox;