import { createContext, useReducer } from "react";
import { initialState, reducer } from "./stateReducer";

export const StateContext = createContext({});

export default function State({ children, file }) {
    const [state, dispatch] = useReducer(reducer(file), initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
}
