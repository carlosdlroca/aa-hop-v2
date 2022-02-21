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

    height: var(--button-void-size);
    width: var(--button-void-size);
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }

    33% {
        transform: scale(.8);
    }

    66% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.25);
    }
`;

export const NextButton = styled(Button).attrs(props=>({className:"clay"}))`
    height: var(--next-button-size);
    width: var(--next-button-size);

    --clay-background: var(--course-color);
    border-radius: 50%;

    transition: background-color 0.2s ease;

    animation: ${({ listening }) => (listening ? pulse : "null")} 0.6s linear
        infinite;

    svg path {
        fill: var(--color-white);
        transition: fill 0.2s ease;
    }

    &:hover,
    &:focus {
        --clay-background: var(--color-white);

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
