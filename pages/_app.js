import Footer from '../src/components/Footer'
import Navebar from '../src/components/Navebar'
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
   <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navebar/>
   <Component {...pageProps} />
   <Footer/>
   </>
}

export default MyApp
