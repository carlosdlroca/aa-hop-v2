export default function WordDisplay({ chosenWord }) {
    return (
        <div className='flex p-10 mx-20 my-4'>
            {(function () {
                if (chosenWord.hasOwnProperty("single")) {
                    return <SingleChosenWord wordCap={chosenWord.wordCap} />;
                }
                return <ChosenWord chosenWord={chosenWord} />;
            })()}
        </div>
    );
}

function ChosenWord({ chosenWord }) {
    if (chosenWord.partPosition == "start") {
        return (
            <>
                <div>{chosenWord.wordPart}</div>
                <div>{chosenWord.wordCap}</div>
            </>
        );
    }
    return (
        <>
            <div>{chosenWord.wordCap}</div>
            <div>{chosenWord.wordPart}</div>
        </>
    );
}

function SingleChosenWord({ wordCap }) {
    return <div className='max-w-lg'>{wordCap}</div>;
}
