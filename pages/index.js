import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";

const Cards = styled.section`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20rem;

    margin: 0 auto;
    width: min(90vw, 100rem);
    padding: 10rem 0;

    @media screen and (max-width: 46.25em) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 31.25em) {
        grid-template-columns: 1fr;
        padding: 5rem 0;
        grid-auto-rows: 10rem;
    }
`;

const Card = styled.a.attrs(props => ({className:"clay"}))`
    display: grid;
    place-items: center;

    color: var(--color-white);
    --clay-background: var(--card-color, currentColor); // changes the background-color of the
    --clay-border-radius: 4rem;

    font-size: var(--text-large);
    font-weight: 500;
    text-align: center;
    text-decoration: none;

    padding: 1.6rem;
    transition: transform .1s linear;

    &:hover,
    &:focus {
        cursor: pointer;
        transform: translateY(-5px);
    }
`;

const CenterItems = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
`;

const PageTitle = styled.h1`
    font-size: var(--text-2xl);
    color: var(--color-white);
    text-align: center;
    padding-top: 8rem;

    @media screen and (max-width: 46.25em) {
        font-size: var(--text-large);
    }
`;

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Adventures Ahead Phonics</title>
            </Head>

            <PageTitle>Adventures Ahead: Hooked on Phonics</PageTitle>

            <CenterItems>
                <Cards>
                    <Link passHref href='/hop/vowels'>
                        <Card style={{ "--card-color": "var(--color-purple)" }}>
                            Vowels
                        </Card>
                    </Link>
                    <Link passHref href='/hop/beginning-digraphs'>
                        <Card style={{ "--card-color": "var(--color-orange)" }}>
                            Beginning Digraphs
                        </Card>
                    </Link>
                    <Link passHref href='/hop/beginning-sblends'>
                        <Card style={{ "--card-color": "var(--color-orange)" }}>
                            Beginning S-Blends
                        </Card>
                    </Link>
                    <Link passHref href='/hop/beginning-lblends'>
                        <Card style={{ "--card-color": "var(--color-orange)" }}>
                            Beginning L-Blends
                        </Card>
                    </Link>
                    <Link passHref href='/hop/beginning-rblends'>
                        <Card style={{ "--card-color": "var(--color-orange)" }}>
                            Beginning R-Blends
                        </Card>
                    </Link>
                    <Link passHref href='/hop/ending-digraphs'>
                        <Card style={{ "--card-color": "var(--color-red)" }}>
                            Ending Digraphs
                        </Card>
                    </Link>
                    <Link passHref href='/hop/ending-blends'>
                        <Card style={{ "--card-color": "var(--color-red)" }}>
                            Ending Blends
                        </Card>
                    </Link>
                    <Link passHref href='/hop/suffixes'>
                        <Card style={{ "--card-color": "var(--color-red)" }}>
                            Suffixes
                        </Card>
                    </Link>
                    <Link passHref href='/hop/silent-e'>
                        <Card style={{ "--card-color": "var(--color-green)" }}>
                            Silent E
                        </Card>
                    </Link>
                    <Link passHref href='/hop/vowel-digraphs'>
                        <Card style={{ "--card-color": "var(--color-green)" }}>
                            Vowel Digraphs
                        </Card>
                    </Link>
                    <Link passHref href='/hop/r-controlled-vowels'>
                        <Card style={{ "--card-color": "var(--color-green)" }}>
                            R-controlled Vowels
                        </Card>
                    </Link>
                    <Link passHref href='/hop/digraphs-and-dipthongs'>
                        <Card style={{ "--card-color": "var(--color-blue)" }}>
                            Digraphs & Dipthongs
                        </Card>
                    </Link>
                    <Link passHref href='/hop/3-letter-beginning-blends'>
                        <Card style={{ "--card-color": "var(--color-blue)" }}>
                            3 Letter Beginning Blends
                        </Card>
                    </Link>
                    <Link passHref href='/hop/silent-letter-and-soft-C-G'>
                        <Card style={{ "--card-color": "var(--color-blue)" }}>
                            Silent Letter and Soft C/G
                        </Card>
                    </Link>
                </Cards>
            </CenterItems>
        </>
    );
}
