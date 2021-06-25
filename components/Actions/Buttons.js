import styled, { keyframes } from "styled-components";

const Button = styled.button`
    display: grid;
    place-items: center;

    border-radius: var(--border-radius);
    padding: 1rem;
    svg {
        height: 3.2rem;
        width: 3.2rem;
        transition: background-color 0.2s ease;

        path {
            fill: var(--course-color);
            transition: fill 0.2s ease;
        }
    }

    &:hover {
        background-color: var(--course-color-light);
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
        svg path {
            fill: var(--color-gray-dark);
        }

        &:hover {
            background: none;
        }
    }

    @media screen and (max-width: 45em) {
        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`;

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimationButton = styled(Button)`
    svg {
        animation: ${({ rotateAnimationIsOn }) =>
                rotateAnimationIsOn ? rotate : "null"}
            var(--animation-speed) linear
            ${({ reverse, menuIsShown }) =>
                reverse && menuIsShown ? "reverse" : null};
    }
`;

export const NextButtonVoid = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    place-items: center;

    background: var(--bg-color);
    border-radius: 50%;
    border-bottom: 2px solid var(--course-color);

    height: var(--button-void-size);
    width: var(--button-void-size);
`;

export const NextButton = styled(Button)`
    height: var(--next-button-size);
    width: var(--next-button-size);

    background-color: var(--course-color);
    border: 2px solid var(--course-color);
    border-radius: 50%;

    transition: background-color 0.2s ease;

    svg path {
        fill: var(--color-white);
        transition: fill 0.2s ease;
    }

    &:hover,
    &:focus {
        background-color: var(--color-white);

        svg path {
            fill: var(--course-color);
        }
    }

    &:active {
        background-color: var(--course-color-light);
    }

    @media screen and (max-width: 40em) {
        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`;