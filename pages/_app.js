import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import theme from "@/src/theme"
import createEmotionCache from "@/src/cache"
import "@/styles/globals.css"

const cache = createEmotionCache()

const App = ({ Component, emotionCache = cache, pageProps }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next.js OMDb api</title>

        <meta name="description" content="Next.js/OMDb api playground" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
