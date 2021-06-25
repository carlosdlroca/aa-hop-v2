import { useRef } from "react";
import Head from "next/head";
import HOP from "../../components/hop";
import { useRouter } from "next/router";
import useComputedStyle from "../../utils/hooks/useComputedStyle";

import styled from "styled-components";

const CourseWrapper = styled.div`
    --position: 16px;
    --button-size: 32px;
    --button-padding: 1rem;

    position: relative;
    isolation: isolate;

    height: 100%;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 45em) {
        position: env(safe-area-inset-bottom);
        --position: 16px;
        --button-size: 32px;
    }

    @media screen and (max-width: 38em) {
        --position: 15px;
        --button-size: 24px;
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: var(--position);
    left: var(--position);

    top: calc(1rem + env(safe-area-inset-top));
    left: calc(1rem + env(safe-area-inset-left));

    display: grid;
    place-items: center;

    background: var(--color-white);
    padding: var(--button-padding);
    border-radius: 50%;

    transition: background 0.2s linear;

    svg {
        height: var(--button-size);
        width: var(--button-size);
        path {
            fill: var(--course-color, currentColor);
            transition: fill 0.2s linear;
        }
    }

    &:hover,
    &:focus {
        background: var(--course-color, rebeccapurple);

        cursor: pointer;
        svg path {
            fill: var(--color-white);
        }
    }
`;

const CourseTitle = styled.h1`
    color: var(--color-white);
    font-size: var(--text-2xl);
    text-transform: capitalize;
    text-align: center;

    padding: calc(var(--position) + var(--button-size) + var(--button-padding));
    padding-top: calc(var(--position));

    padding-bottom: 0;

    @media screen and (max-width: 50em) {
        font-size: var(--text-xl);
    }

    @media screen and (max-width: 40em) {
        font-size: var(--text-large);
    }
`;

export default function Course({ course, file }) {
    const audioRef = useRef(null);
    const router = useRouter();

    useComputedStyle(file.color);

    function playAudio() {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.4;
        audioRef.current.play();
    }

    return (
        <>
            <Head>
                <title>{course.split("-").join(" ")}</title>
            </Head>

            <CourseWrapper
                style={{
                    "--course-color": `var(--color-${file.color})`,
                    "--course-color-light": `var(--color-${file.color}-light)`,
                }}>
                <BackButton
                    onClick={() => router.push("/")}
                    aria-label='View Courses'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'>
                        <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z' />
                    </svg>
                </BackButton>

                <CourseTitle>{course.split("-").join(" ")}</CourseTitle>
                <HOP file={file} playAudio={playAudio} />
                <audio ref={audioRef} src='/new-word.mp3'>
                    Your browser does not support the <code>audio</code>{" "}
                    element. Please upgrade!
                </audio>
            </CourseWrapper>
        </>
    );
}

export async function getStaticProps(ctx) {
    let { course } = ctx.params;
    const file = await require(`../../public/words/${course}.json`);
    return { props: { course, file } };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { course: "vowels" } },
            { params: { course: "beginning-digraphs" } },
            { params: { course: "beginning-sblends" } },
            { params: { course: "beginning-lblends" } },
            { params: { course: "beginning-rblends" } },
            { params: { course: "ending-digraphs" } },
            { params: { course: "ending-blends" } },
            { params: { course: "suffixes" } },
            { params: { course: "silent-e" } },
            { params: { course: "vowel-digraphs" } },
            { params: { course: "r-controlled-vowels" } },
            { params: { course: "digraphs-and-dipthongs" } },
            { params: { course: "3-letter-beginning-blends" } },
            { params: { course: "silent-letter-and-soft-C-G" } },
        ],
        fallback: false,
    };
}
