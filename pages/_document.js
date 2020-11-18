import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='196x196'
                        href='favicon-196.png'
                    />

                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='apple-icon-180.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='167x167'
                        href='apple-icon-167.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='apple-icon-152.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='120x120'
                        href='apple-icon-120.png'
                    />

                    <meta name='apple-mobile-web-app-capable' content='yes' />

                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-2048-2732.png'
                        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1668-2388.png'
                        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1536-2048.png'
                        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1668-2224.png'
                        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1620-2160.png'
                        media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1242-2688.png'
                        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1125-2436.png'
                        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-828-1792.png'
                        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-1242-2208.png'
                        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-750-1334.png'
                        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
                    />
                    <link
                        rel='apple-touch-startup-image'
                        href='apple-splash-640-1136.png'
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

export default MyDocument;
