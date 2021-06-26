import { useContext } from "react";
import "@babel/polyfill";

import Buttons from "./Buttons";
import WordDisplay from "./WordDisplay";
import Actions from "./Actions";
import styled from "styled-components";

import AppStateProvider, { StateContext } from "../utils/hooks/Context";

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

    h3 {
        font-size: var(--text-large);
    }

    #highlight {
        color: var(--course-color);
        font-size: 1.1em;
        font-weight: bolder;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 50em) {
        h3 {
            font-size: var(--text-medium);
        }
    }
`;

export default function HOP({ file, playAudio }) {
    return (
        <Wrapper>
            {/** Context provider */}
            <AppStateProvider file={file}>
                <Buttons keys={Object.keys(file.words)} />
                <VerticalWrapper>
                    {" "}
                    <WordDisplay />
                    <DetailsFC />
                    <Actions playAudio={playAudio} />
                </VerticalWrapper>
            </AppStateProvider>
        </Wrapper>
    );
}

function DetailsFC() {
    const [state] = useContext(StateContext);

    return (
        <Details>
            <h2 id='WordCountTitle'>
                Word Counter
                <span id='WordCountNumber'>{state.count}</span>
            </h2>
            <h3>
                {state.voiceRecognitionIsOn ? (
                    <>
                        Say <span id='highlight'>Start</span> to begin
                    </>
                ) : null}
            </h3>
            <h3>
                {state.voiceRecognitionIsOn ? (
                    <>
                        Say <span id='highlight'>Reset</span> to "Start over"
                    </>
                ) : null}
            </h3>
            <h3>
                {state.voiceRecognitionIsOn ? (
                    <>
                        Say <span id='highlight'>Next</span> to choose a new
                        word
                    </>
                ) : null}
            </h3>
        </Details>
    );
}
