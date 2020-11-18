import HOP from "../../components/hop";
import Link from "next/link";
import Head from "next/head";

export default function Course({ course, file }) {
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
            <h1 className='text-3xl text-black capitalize'>
                {course.split("-").join(" ")}
            </h1>
            <HOP file={file} />
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
