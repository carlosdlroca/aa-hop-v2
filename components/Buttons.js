import styled from "styled-components";

const ButtonsList = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.button`
    font-size: var(--text-large);
    font-weight: 500;

    background-color: white;
    color: var(--course-color, black);

    border: 2px solid var(--course-color);
    border-radius: var(--border-radius, 1rem);

    padding: 1rem 5.4rem;
    margin-right: 1rem;
    margin-bottom: 1rem;

    transition: background-color 0.2s ease;
    user-select: none;

    &:hover,
    &:focus {
        background-color: var(--course-color-light, #fff);
        cursor: pointer;
    }

    &.active {
        background: var(--course-color, steelblue);
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

export default function Buttons({ keys, dispatch, activeButtons }) {
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
