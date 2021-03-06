import Document, { Head, Main, NextScript } from 'next/document'

const resetCssUrl =
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'

class Root extends Document {
  static async getInitialProps (pageContext) {
    return pageContext.renderPage()
  }

  render () {
    return (
      <html>
        <Head>
          <title>Next Github auth example</title>
          <link rel='stylesheet' href={resetCssUrl} />
        </Head>

        <body style={{ margin: 20 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Root
