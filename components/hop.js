import { useReducer } from "react";

import Buttons from "./Buttons";
import WordDisplay from "./WordDisplay";
import Actions from "./Actions";
import { reducer, initialState } from "../utils/hooks/stateReducer";
import styled from "styled-components";

const Wrapper = styled.div`
    // I need the bottom half of the app (The app under the button list)
    // to grow to fill up the height of the app container
    // Then set the VerticalWrapper component to have flex-grow: 1'
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    margin-top: 3rem;
    height: 100%;

    overflow-y: hidden;
`;

const VerticalWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;
`;

const Details = styled.section`
    color: var(--color-white);
    margin-bottom: auto;
    #WordCountTitle {
        font-size: var(--text-xl);
        display: flex;
        align-items: center;
    }

    #WordCountNumber {
        font-size: var(--text-2xl);
        margin-left: 2rem;
    }
`;

export default function HOP({ file, playAudio }) {
    const [state, dispatch] = useReducer(reducer(file), initialState);
    return (
        <Wrapper>
            <Buttons
                color={file.color}
                keys={Object.keys(file.words)}
                dispatch={dispatch}
                activeButtons={state.activeButtons}
            />
            <VerticalWrapper>
                <WordDisplay chosenWord={state.chosenWord} />
                <Details className='counter grid place-items-center'>
                    <h2 id='WordCountTitle'>
                        Word Counter
                        <span id='WordCountNumber'>{state.count}</span>
                    </h2>
                </Details>
                <Actions
                    state={state}
                    dispatch={dispatch}
                    playAudio={playAudio}
                />
            </VerticalWrapper>
        </Wrapper>
    );
}
