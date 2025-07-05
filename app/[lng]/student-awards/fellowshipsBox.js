const AwardCard = ({ name, school }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{school}</p>
        </div>
    );
};

const FellowshipsBox = ({ lang, nameList, schoolList}) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center gap-4">
                <div>
                    {nameList.length === 0 ? (
                        <h4 className="text-lg">{"N/A"}</h4>
                    ) :
                    nameList.map((name, index) => (
                        <AwardCard key={index} name={name} school={schoolList[index]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FellowshipsBox;