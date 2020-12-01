export default function WordDisplay({ chosenWord, color }) {
    return (
        <div className='wordCards'>
            {(function () {
                if (Object.keys(chosenWord).length < 1) {
                    return <SingleChosenWord wordCap='Begin' />;
                }
                if (chosenWord.hasOwnProperty("single")) {
                    return <SingleChosenWord wordCap={chosenWord.wordCap} />;
                }
                return <ChosenWord chosenWord={chosenWord} color={color} />;
            })()}
        </div>
    );
}

function ChosenWord({ chosenWord, color }) {
    if (chosenWord.partPosition == "start") {
        return (
            <>
                <div className='wordCard mr-1 md:mr-2'>
                    <div className={`start ${printClassWithColor(color)}`}>
                        {chosenWord.wordPart}
                    </div>
                </div>
                <div className='wordCard'>
                    <div className='end'>{chosenWord.wordCap}</div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='wordCard mr-1 md:mr-2'>
                <div className='start'>{chosenWord.wordCap}</div>
            </div>
            <div className='wordCard'>
                <div className={`end ${printClassWithColor(color)}`}>
                    {chosenWord.wordPart}
                </div>
            </div>
        </>
    );
}

function SingleChosenWord({ wordCap }) {
    return <div className='wordCard single'>{wordCap}</div>;
}

function printClassWithColor(color) {
    switch (color) {
        case "red":
            return "wordCard-red";
        case "blue":
            return "wordCard-blue";
        case "green":
            return "wordCard-green";
        case "orange":
            return "wordCard-orange";
        case "purple":
            return "wordCard-purple";
    }
}
