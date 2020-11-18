export default function WordDisplay({ chosenWord, color }) {
    return (
        <div className='wordCards md:p-10 '>
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
                <div className='wordCard mr-2 text-wordCard-sm md:text-wordCard-lg'>
                    <div className={`start text-${color}-500`}>
                        {chosenWord.wordPart}
                    </div>
                </div>
                <div className='wordCard text-wordCard-sm md:text-wordCard-lg'>
                    <div className='end'>{chosenWord.wordCap}</div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='wordCard mr-2 text-wordCard-sm md:text-wordCard-lg'>
                <div className='start'>{chosenWord.wordCap}</div>
            </div>
            <div className='wordCard text-wordCard-sm md:text-wordCard-lg'>
                <div className={`end text-${color}-500`}>
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
