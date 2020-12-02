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
                return <ChosenWord {...chosenWord} color={color} />;
            })()}
        </div>
    );
}

function ChosenWord({ partPosition, wordPart, wordCap, color }) {
    return (
        <>
            <div className='wordCard mr-1 md:mr-2'>
                <div
                    className={`start ${
                        partPosition == "start"
                            ? printClassWithColor(color)
                            : ""
                    }`}
                >
                    {partPosition == "start" ? wordPart : wordCap}
                </div>
            </div>
            <div className='wordCard'>
                <div
                    className={`end ${
                        partPosition == "end" ? printClassWithColor(color) : ""
                    }`}
                >
                    {partPosition == "end" ? wordPart : wordCap}
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
