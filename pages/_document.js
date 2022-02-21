import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();

        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='en' dir='ltr'>
                <Head>
                    <link rel='manifest' href='/manifest.json' />
                    <link
                        rel='icon'
                        type='image/jpeg'
                        sizes='196x196'
                        href='/icons/favicon-196.jpg'
                    />

                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/icons/apple-icon-180.jpg'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='167x167'
                        href='/icons/apple-icon-167.jpg'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='/icons/apple-icon-152.jpg'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='120x120'
                        href='/icons/apple-icon-120.jpg'
                    />

                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-2048-2732.jpg'
                        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1668-2388.jpg'
                        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1536-2048.jpg'
                        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1668-2224.jpg'
                        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1620-2160.jpg'
                        media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1242-2688.jpg'
                        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1125-2436.jpg'
                        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-828-1792.jpg'
                        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-1242-2208.jpg'
                        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-750-1334.jpg'
                        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='/icons/apple-splash-640-1136.jpg'
                        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />

                    <link
                    rel="stylesheet"
                    href="https://unpkg.com/claymorphism-css/dist/clay.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
