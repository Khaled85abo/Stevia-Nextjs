import React from 'react'
import document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from '@material-ui/core/styles'

export default class MyDocument extends Document{


    render(){
        return (
            <Html lang="en">
                <Head>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getIntialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRnderPage = ctx.renderPage;
    ctx.renderPage = () =>
    originalRnderPage({
        enhaceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });
    const initialProps = await Document.getIntialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement()
        ],
    }
}

