import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../utils/hooks/Context";

const ButtonsList = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.button.attrs(props => ({className: "clay"}))`
    font-size: var(--text-large);
    font-weight: 500;

    --clay-background: white;
    --clay-border-radius: var(--border-radius, 1rem);
    color: var(--course-color, black);

    padding: 1rem 5.4rem;
    margin-right: 1rem;
    margin-bottom: 1rem;

    transition: background-color 0.2s ease;
    user-select: none;

    &:hover,
    &:focus {
        --clay-background: var(--course-color-light, #fff);
        cursor: pointer;
    }

    &.active {
        --clay-background: var(--course-color, steelblue);
        color: #fff;
    }

    // At most 1000px
    @media screen and (max-width: 62.5em) {
        font-size: var(--text-large);
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 1rem 3.5rem;
    }

    // At most 768px
    @media screen and (max-width: 48em) {
        font-size: var(--text-medium);
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;

        padding: 0.5rem 2rem;
    }

    // At most 300px
    @media screen and (max-width: 18.75em) {
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 1rem 2rem;
    }
`;

export default function Buttons({ keys }) {
    const [appState, dispatch] = useContext(StateContext);
    const { activeButtons } = appState;

    return (
        <ButtonsList>
            {keys.map((key) => (
                <Button
                    className={`${activeButtons.includes(key) ? "active" : ""}`}
                    key={key}
                    aria-label={`Letter ${key}`}
                    onClick={() => dispatch({ type: "TOGGLE_BUTTON", key })}>
                    {key}
                </Button>
            ))}
        </ButtonsList>
    );
}
