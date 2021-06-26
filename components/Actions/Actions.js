import "@babel/polyfill";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

import { AnimationButton, NextButtonVoid, NextButton } from "./Buttons";
import Menu from "./Menu";
import { StateContext } from "../../utils/hooks/Context";

import constructWord from "../../utils/constructWord";

const ActionsWrapper = styled.div`
    position: relative;
    margin: 5rem auto;
    margin-bottom: calc(1rem + env(safe-area-inset-bottom));
    width: min(90vw, 33rem);

    // Controll Button size here
    --button-void-size: 8.6rem;
    --next-button-size: calc(var(--button-void-size) * 0.88);
    --animation-speed: 0.3s;

    @media screen and (max-width: 31.25em) {
        --button-void-size: 6.5rem;
    }
`;

const ActionsBar = styled.div`
    position: relative;
    background-color: var(--color-white);
    border: 3px solid var(--course-color);
    border-radius: var(--border-radius);
    padding: 1rem 2rem;

    height: 100%;
    width: 100%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export default function Actions({ playAudio }) {
    const [appState, dispatch] = useContext(StateContext);

    const [actionState, setActionsState] = useState({
        redoAnimation: false,
        menuAnimation: false,
        menuIsShown: false,
    });

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    // Start Microphone
    useEffect(() => {
        if (appState.voiceRecognitionIsOn) {
            SpeechRecognition.startListening({ continuous: true });
        }

        return () => {
            SpeechRecognition.stopListening();
        };
    }, [appState.voiceRecognitionIsOn]);

    // Update word when transcript pics up a word
    useEffect(() => {
        const words = transcript.split(" ");
        const currentWordSaid = words[words.length - 1];
        console.log(currentWordSaid);

        const { chosenWord } = appState;

        if (currentWordSaid == "reset") {
            resetAllState();
        }

        if (
            currentWordSaid == "next" ||
            (Object.keys(appState.chosenWord).length < 1 &&
                currentWordSaid.toLowerCase() == "start")
        ) {
            dispatchNewWord();
            resetTranscript();
        }

        if (constructWord(chosenWord) == currentWordSaid.toLowerCase()) {
            dispatchNewWord();
        }

        return resetTranscript;
    }, [transcript]);

    function resetActionsState() {
        setActionsState({
            rotateAnimationIsOn: false,
            menuIsShown: false,
        });
    }
    [0, 1, 2];

    function resetAllState() {
        resetActionsState(); // Close Menu
        resetTranscript();
        dispatch({ type: "RESET_STATE" });
        SpeechRecognition.abortListening();
    }

    function setRotateAnimation(icon, value) {
        setActionsState((prevState) => ({
            ...prevState,
            [`${icon}Animation`]: value,
        }));
    }

    // This function fetches a new word for the WordDisplay Component
    function dispatchNewWord() {
        if (actionState.menuIsShown) {
            setActionsState((prevState) => ({
                ...prevState,
                menuIsShown: false,
                menuAnimation: true,
            }));
        }

        if (appState.activeButtons.length > 0) {
            if (!appState.muted) {
                playAudio();
            }
            dispatch({ type: "CHOOSE_WORD" });
        }
    }

    return (
        <ActionsWrapper>
            <Menu
                actionState={actionState}
                resetAllState={resetAllState}
                browserSupportsSpeechRecognition={
                    browserSupportsSpeechRecognition
                }
            />
            <ActionsBar>
                <ButtonsWrapper>
                    <AnimationButton
                        disabled={
                            Object.keys(appState.chosenWord).length < 1 ||
                            actionState.redoAnimation
                        }
                        rotateAnimationIsOn={actionState.redoAnimation}
                        onClick={() => {
                            dispatch({ type: "REDO_LAST_WORD" });
                            setRotateAnimation("redo", true);
                        }}
                        title='Redo Last Word'>
                        <svg
                            onAnimationEnd={() =>
                                setRotateAnimation("redo", false)
                            }
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'>
                            <path d='M479.492,318.447a233.557,233.557,0,0,1-82.025,121.445A232.008,232.008,0,0,1,24,256,231.861,231.861,0,0,1,421.839,93.807l-2.976,53.576-18.549-5.456a184.564,184.564,0,0,0-32.139-31.792A182.241,182.241,0,0,0,256,72C154.542,72,72,154.542,72,256s82.542,184,184,184a182.236,182.236,0,0,0,112.174-38.135,185.25,185.25,0,0,0,65.083-96.312,24,24,0,1,1,46.235,12.894Zm-9.652-98.84a24,24,0,0,0,10.123-18.276l8-144a24,24,0,1,0-47.924-2.662l-6.32,113.761L326.777,136.976a24,24,0,1,0-13.543,46.048l136,40a23.991,23.991,0,0,0,20.611-3.417Z' />
                        </svg>
                    </AnimationButton>
                    <AnimationButton
                        rotateAnimationIsOn={actionState.menuAnimation}
                        reverse={true}
                        menuIsShown={actionState.menuIsShown}
                        onClick={() => {
                            setActionsState((prevState) => ({
                                ...prevState,
                                menuIsShown: !prevState.menuIsShown,
                            }));
                            setRotateAnimation("menu", true);
                        }}
                        title='Open Menu'>
                        <svg
                            onAnimationEnd={() =>
                                setRotateAnimation("menu", false)
                            }
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z' />
                            <path d='m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z' />
                        </svg>
                    </AnimationButton>
                    <NextButtonVoid aria-hidden='true'>
                        <NextButton
                            title='Next Word'
                            onClick={dispatchNewWord}
                            listening={listening}>
                            {appState.voiceRecognitionIsOn ? (
                                <svg
                                    viewBox='0 0 512 512'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='m134.879 240.074c-5.857-5.857-15.355-5.857-21.213 0-51.508 51.508-51.508 135.316 0 186.824 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213-39.811-39.811-39.811-104.588 0-144.398 5.859-5.857 5.859-15.355.001-21.213z' />
                                    <path d='m191.15 286.345c-5.857-5.857-15.355-5.857-21.213 0-25.994 25.994-25.994 68.289 0 94.283 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213-14.297-14.297-14.297-37.561 0-51.857 5.859-5.858 5.859-15.356.001-21.213z' />
                                    <path d='m78.458 216.276c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-76.326 76.327-76.326 200.52 0 276.846 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213-64.628-64.629-64.628-169.79.001-234.42z' />
                                    <path d='m497 0h-214.982c-4.355 0-8.495 1.893-11.344 5.187-2.85 3.294-4.126 7.663-3.5 11.973l3.879 26.666c2.438 16.761-.955 34.028-9.552 48.621l-56.521 95.938c-4.209 7.145-4.586 15.877-1.008 23.357 3.579 7.481 10.613 12.669 18.82 13.877l29.654 4.359c3.142.463 5.885 2.142 7.725 4.729s2.526 5.729 1.933 8.847l-5.827 30.589c-2.231 11.708 3.726 23.468 14.485 28.596.371.177.749.339 1.133.484l45.046 17.09-30.14 18.959c-.438.275-.861.574-1.269.893-9.104 7.139-13.183 18.467-10.391 28.859 1.839 6.846 5.653 11.652 8.717 15.516 4.052 5.107 6.086 7.672 5.333 15.2-1.299 12.99 2.272 24.977 10.055 33.75 5.618 6.333 16.084 13.956 34.041 14.312 16.69.331 49.4-.162 76.033-.627 7.593-.143 14.572 4.271 17.71 11.219l20.224 44.781c2.426 5.373 7.775 8.826 13.67 8.826h36.076c8.284 0 15-6.716 15-15v-482.001c0-8.284-6.716-15-15-15z' />
                                </svg>
                            ) : (
                                <svg
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 192.689 192.689'>
                                    <g>
                                        <path
                                            d='M188.527,87.755l-83.009-84.2c-4.692-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.54,75.61
                                    l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179c4.704,4.74,12.319,4.74,17.011,0l82.997-84.2
                                    C193.05,100.375,193.062,92.327,188.527,87.755z'
                                        />
                                        <path
                                            d='M104.315,87.755l-82.997-84.2c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.528,75.61
                                    l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179s12.319,4.74,17.011,0l82.997-84.2C108.838,100.375,108.85,92.327,104.315,87.755
                                    z'
                                        />
                                    </g>
                                </svg>
                            )}
                        </NextButton>
                    </NextButtonVoid>
                </ButtonsWrapper>
            </ActionsBar>
        </ActionsWrapper>
    );
}
