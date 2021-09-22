import Head from "next/head"
import "@/styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next.js OMDb api</title>
        <meta name="description" content="Next.js/OMDb api playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
