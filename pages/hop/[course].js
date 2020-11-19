import { useRef, useCallback } from "react";
import HOP from "../../components/hop";
import Link from "next/link";
import Head from "next/head";

export default function Course({ course, file }) {
    const audioRef = useRef(null);

    function playAudio() {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.15;
        audioRef.current.play();
    }

    return (
        <div className='h-screen'>
            <Head>
                <title>{course.split("-").join(" ")}</title>
            </Head>
            <Link href='/'>
                <a
                    className={`block bg-arrow bg-contain bg-no-repeat bg-${file.color}-500 w-12 h-12 rounded-full`}
                ></a>
            </Link>
            <div className='pageTitle course md:text-4xl'>
                <h1 className={`bg-${file.color}-500`}>
                    {course.split("-").join(" ")}
                </h1>
            </div>
            <HOP file={file} playAudio={playAudio} />
            <audio ref={audioRef} src='/new-word.mp3'>
                Your browser does not support the <code>audio</code> element.
                Please upgrade!
            </audio>
        </div>
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
        ],
        fallback: false,
    };
}
