import { useReducer, useState } from "react";
import Buttons from "./Buttons";

const initialState = {
    activeButtons: [],
    words: {},
    count: 0,
};

export default function HOP({ file }) {
    const [state, dispatch] = useReducer(reducerWithFile(file), initialState);
    return (
        <div className='py-5'>
            <Buttons
                color={file.color}
                keys={Object.keys(file.sounds)}
                dispatch={dispatch}
                activeButtons={state.activeButtons}
            />
        </div>
    );
}

function reducerWithFile(file) {
    return function reducer(state, action) {
        switch (action.type) {
            case "TOGGLE_BUTTON":
                const [newActiveButtons, removeWords] = addOrRemoveKey(
                    state.activeButtons,
                    action.key
                );

                if (removeWords) {
                    const { [action.key]: omitKey, ...rest } = state.words;
                    return {
                        ...state,
                        words: rest,
                        activeButtons: newActiveButtons,
                    };
                }

                return {
                    ...state,
                    activeButtons: newActiveButtons,
                    words: {
                        ...state.words,
                        [action.key]: file.sounds[action.key],
                    },
                };

            case "UPDATE_COUNT":
                return { ...state };
            case "RESET_COUNT":
                return { ...state, count: 0 };
            case "RESET_STATE":
                return initialState;
            default:
                return state;
        }
    };

    function addOrRemoveKey(array, value) {
        var index = array.indexOf(value);
        if (index === -1) {
            return [[...array, value], false];
        } else {
            return [array.filter((arrValue) => arrValue !== value), true];
        }
    }
}
