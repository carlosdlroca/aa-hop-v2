import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "Adventures Ahead Phonics App";
const APP_DESCRIPTION = "Phoncis application for making learning fun";

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang='en' dir='ltr'>
                <Head>
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta
                        name='apple-mobile-web-app-status-bar-style'
                        content='default'
                    />
                    <meta
                        name='apple-mobile-web-app-title'
                        content={APP_NAME}
                    />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#FFFFFF' />
                    <meta
                        name='viewport'
                        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
                    />

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

                    <meta name='apple-mobile-web-app-capable' content='yes' />

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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
