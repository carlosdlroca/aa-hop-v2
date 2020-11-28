import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Adventures Ahead Phonics</title>
            </Head>
            <div className='pageTitle md:text-4xl'>
                <h1 className='bg-gray-100 '>
                    Adventures Ahead: Hooked on Phonics
                </h1>
            </div>

            <section className='cards'>
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
                <Link href='/hop/silent-e'>
                    <a className='card card-green'>Silent E</a>
                </Link>
                <Link href='/hop/vowel-digraphs'>
                    <a className='card card-green'>Vowel Digraphs</a>
                </Link>
                <Link href='/hop/r-controlled-vowels'>
                    <a className='card card-green'>R-controlled Vowels</a>
                </Link>
                <Link href='/hop/digraphs-and-dipthongs'>
                    <a className='card card-blue'>Digraphs & Dipthongs</a>
                </Link>
                <Link href='/hop/3-letter-beginning-blends'>
                    <a className='card card-blue'>3 Letter Beginning Blends</a>
                </Link>
                <Link href='/hop/silent-letter-and-soft-C-G'>
                    <a className='card card-blue'>Silent Letter and Soft C/G</a>
                </Link>
            </section>
        </div>
    );
}
