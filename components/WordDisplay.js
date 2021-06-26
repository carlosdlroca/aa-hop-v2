import { useContext } from "react";
import { StateContext } from "../utils/hooks/Context";
import styled from "styled-components";

const WordWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: min(97vw, 75rem);
    margin: 0 auto;
`;

const WordCard = styled.div`
    display: grid;
    align-items: center;

    background-color: var(--color-white, #fff);
    color: ${({ isFocus }) =>
        isFocus ? `var(--course-color)` : "var(--color-black, #fff)"};

    border-radius: var(--border-radius);
    height: 20rem;
    padding: 2rem;

    font-size: var(--text-5xl);
    text-align: center;

    flex-basis: 49.6%;

    // If WordCard is a single word
    // then make it full width
    &:only-child {
        flex-basis: 100%;
    }

    // Target WordCards that are split into Two
    &:not(:only-child):first-child {
        text-align: end;
    }

    &:not(:only-child):last-child {
        text-align: start;
    }

    @media screen and (max-width: 50em) {
        font-size: var(--text-2xl);
    }
`;

function WordDisplay() {
    // context returns [state, dispatch]
    // but we dont need dispatch so we dont include it here
    const [state] = useContext(StateContext);
    const { chosenWord } = state;
    // If there is no chosen word yet
    if (Object.keys(chosenWord).length < 1) {
        return (
            <WordCard>
                {state.voiceRecognitionIsOn ? 'Say "Start"' : "Start"}
            </WordCard>
        );
    }

    // If chosen word is not broken apart
    if (chosenWord.hasOwnProperty("single")) {
        return <WordCard>{chosenWord.wordCap}</WordCard>;
    }

    return <ChosenWord {...chosenWord} />;
}

function ChosenWord({ partPosition, wordPart, wordCap }) {
    // The focus part goes in the First Word Card ("start")
    if (partPosition == "start") {
        return (
            <>
                <WordCard isFocus>{wordPart}</WordCard>
                <WordCard>{wordCap}</WordCard>
            </>
        );
    }

    // The focus part goes in the Last Word Card ("end")
    return (
        <>
            <WordCard>{wordCap}</WordCard>
            <WordCard isFocus>{wordPart}</WordCard>
        </>
    );
}

export default function withWordWrapper(props) {
    return (
        <WordWrapper>
            <WordDisplay {...props} />
        </WordWrapper>
    );
}
