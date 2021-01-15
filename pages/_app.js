import React, {useEffect} from 'react'
import { StoreProvider } from '../components/Store'
import '../styles/globals.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

Router.events.on('routeChangeStart', ()=> NProgress.start())
Router.events.on('routeChangeComplete', ()=> NProgress.done())
Router.events.on('routerChangeError', ()=> NProgress.done())

function MyApp({ Component, pageProps }) {


  useEffect(() => {
   // Remove the server-side injected css.
   const jssStyles = document.querySelector('#jss-server-side');
   if(jssStyles){
     jssStyles.parentElement.removeChild(jssStyles)
   }
  }, [])

  return (
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>

  )
}

export default MyApp


MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublickey: process.env.COMMERCE_PUBLIC_KEY,
    },
  }
}