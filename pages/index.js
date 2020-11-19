import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Adventures Ahead Phonics</title>
            </Head>
            <div className='pageTitle'>
                <h1 className='bg-gray-100 '>
                    Adventures Ahead: Hooked on Phonics
                </h1>
            </div>

            <section className='cards md:grid-cols-2 lg:grid-cols-3'>
                <Link href='/hop/vowels'>
                    <a className='card card-purple'>Vowels</a>
                </Link>
                <Link href='/hop/beginning-digraphs'>
                    <a className='card card-orange'>Beginning Digraphs</a>
                </Link>
                <Link href='/hop/beginning-sblends'>
                    <a className='card card-orange'>Beginning S-Blends</a>
                </Link>
                <Link href='/hop/beginning-lblends'>
                    <a className='card card-orange'>Beginning L-Blends</a>
                </Link>
                <Link href='/hop/beginning-rblends'>
                    <a className='card card-orange'>Beginning R-Blends</a>
                </Link>
                <Link href='/hop/ending-digraphs'>
                    <a className='card card-red'>Ending Digraphs</a>
                </Link>
                <Link href='/hop/ending-blends'>
                    <a className='card card-red'>Ending Blends</a>
                </Link>
                <Link href='/hop/suffixes'>
                    <a className='card card-red'>Suffixes</a>
                </Link>
            </section>
        </div>
    );
}
