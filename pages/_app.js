import '../styles/globals.css'
import Layout from '../components/Layout'

import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache'
import darkTheme from '../styles/theme/darkTheme'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props


  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
