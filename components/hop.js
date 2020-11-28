import { useReducer } from "react";
import Buttons from "./Buttons";
import WordDisplay from "./WordDisplay";
import { reducer, initialState } from "../utils/hooks/stateReducer";

export default function HOP({ file, playAudio }) {
    const [state, dispatch] = useReducer(reducer(file), initialState);
    return (
        <div className='pb-24 relative'>
            <div className='options absolute bottom-8 right-20'>
                <button
                    className='bg-yellow-300 hover:bg-yellow-400 text-white text-2xl px-5 py-2'
                    onClick={() => {
                        dispatch({ type: "RESET_STATE" });
                    }}
                >
                    reset
                </button>
            </div>
            <Buttons
                color={file.color}
                keys={Object.keys(file.words)}
                dispatch={dispatch}
                activeButtons={state.activeButtons}
            />
            <WordDisplay chosenWord={state.chosenWord} color={file.color} />
            <section className='counter grid place-items-center'>
                <span className='text-2xl'>Word Counter</span>
                <h2 className='text-gray-600 inline-block text-6xl'>
                    {state.count}{" "}
                </h2>
            </section>
            <button
                className={`block text-3xl py-3 px-8 mx-auto my-8 rounded-md bg-gray-100 hover:bg-gray-200 text-${file.color}-500`}
                onClick={() => {
                    if (state.activeButtons.length > 0) {
                        playAudio();
                    }
                    dispatch({ type: "CHOOSE_WORD" });
                }}
            >
                {Object.keys(state.chosenWord).length < 1
                    ? "Begin"
                    : "Next Word"}
            </button>
        </div>
    );
}
