import '../styles/globals.css'
import Layout from '../components/Layout'

import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { UserProvider } from '@auth0/nextjs-auth0'

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
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
