import Head from "next/head";
import PageWrapper from "../components/Layout/PageWrapper";
import GlobalStyles from "../components/Layout/GlobalStyles";

const APP_NAME = "Adventures Ahead Phonics App";
const APP_DESCRIPTION = "Phoncis application for making learning fun";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='application-name' content={APP_NAME} />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='default'
                />
                <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                <meta name='description' content={APP_DESCRIPTION} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='theme-color' content='#1F2937' />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, user-scalable=no'
                />
                <meta name='apple-mobile-web-app-capable' content='yes' />
            </Head>
            <PageWrapper>
                <Component {...pageProps} />
            </PageWrapper>
            <GlobalStyles />
        </>
    );
}

export default MyApp;
