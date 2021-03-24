import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="keywords" content="yui540" />
      <meta
        name="description"
        content=""
      />
      <meta property="og:title" content="『神神化身』公式サイト" />
      <meta property="og:image" content="https://yui540.graphics/ogp.jpg" />
      <meta property="og:url" content="https://yui540.graphics" />
      <meta
        property="og:description"
        content=""
      />
      <meta property="og:site_name" content="yui540.graphics" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yui540" />
      <meta name="twitter:title" content="" />
      <meta
        name="twitter:description"
        content=""
      />
      <meta
        name="twitter:image"
        content="https://yui540.graphics/ogp.jpg"
      />
      <link
        rel="shortcut icon"
        href=""
        type="image/vnd.microsoft.icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href=""
      />
      <link
        rel="icon"
        href=""
        type="image/vnd.microsoft.icon"
      />
      <title></title>
    </Head>
    <Component {...pageProps} />
  </>
}
