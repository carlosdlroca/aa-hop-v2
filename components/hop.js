import { useReducer } from "react";
import Buttons from "./Buttons";
import WordDisplay from "./WordDisplay";
import { reducer, initialState } from "../utils/hooks/stateReducer";

export default function HOP({ file, playAudio }) {
    const [state, dispatch] = useReducer(reducer(file), initialState);
    return (
        <div className='py-5'>
            <Buttons
                color={file.color}
                keys={Object.keys(file.words)}
                dispatch={dispatch}
                activeButtons={state.activeButtons}
            />
            <WordDisplay chosenWord={state.chosenWord} color={file.color} />
            <button
                className={`block text-3xl py-3 px-8 mx-auto my-8 rounded-md bg-gray-100 hover:bg-gray-200 text-${file.color}-500`}
                onClick={() => {
                    playAudio();
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
