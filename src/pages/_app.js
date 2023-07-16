import { ThemeProvider } from '@emotion/react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'
import { persistor, store } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Router, useRouter } from 'next/router'
import withYM from 'next-ym'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default withYM('91789172', Router)(MyApp)
