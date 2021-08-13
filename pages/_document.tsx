import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { RenderPage, RenderPageResult } from 'next/dist/shared/lib/utils';

import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {

    public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {

        const sheet: ServerStyleSheet = new ServerStyleSheet()
        const originalRenderPage: RenderPage = ctx.renderPage;

        try {

            ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ),
            };

        } finally {
            sheet.seal();
        }
        
    }

    public render(): JSX.Element {
        return (
            <Html lang="de">
                <Head>

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <meta name="robots" content="none" />
                    <meta name="googlebot" content="index,noarchive,noimageindex" />

                    <link rel="canonical" href="https://krahforst.dev/" />
    
                    <meta name="description" content="Webseite von Steven Krahforst" />

                    <meta property="og:description" content="Webseite von Steven Krahforst" />
                    <meta property="og:title" content="Steven Krahforst Webseite" />
                    <meta property="og:site_name" content="Steven Krahforst Webseite" />

                    <meta name="twitter:site" content="@StevenKrahforst" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
                    
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
                    
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    
                    <meta name="msapplication-TileColor" content="#1952BE" />
                    <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
                    <meta name="msapplication-config" content="/browserconfig.xml" />
                    
                    <link rel="manifest" href="/manifest.json" />
                    
                    <meta name="theme-color" content="#1952BE" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument