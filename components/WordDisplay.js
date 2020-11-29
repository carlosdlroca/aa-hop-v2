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
                <div className='wordCard mr-2'>
                    <div className={`start wordCard-${color}`}>
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
            <div className='wordCard mr-2'>
                <div className='start'>{chosenWord.wordCap}</div>
            </div>
            <div className='wordCard'>
                <div className={`end wordCard-${color}`}>
                    {chosenWord.wordPart}
                </div>
            </div>
        </>
    );
}

function SingleChosenWord({ wordCap }) {
    return (
        <div className='wordCard single text-wordCard-sm md:text-wordCard-lg'>
            {wordCap}
        </div>
    );
}
