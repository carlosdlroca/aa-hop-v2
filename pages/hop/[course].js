import HOP from "../../components/hop";
import Link from "next/link";

export default function Course({ course, file }) {
    return (
        <div className='h-screen bg-teal-200'>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h1 className='text-5xl text-black'>Course: {course}</h1>
            <HOP file={file} />
        </div>
    );
}

export async function getStaticProps(ctx) {
    let { course } = ctx.params;
    const file = await require(`../../public/${course}.json`);
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
