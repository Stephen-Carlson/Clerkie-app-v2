import '../styles/globals.css'
import Layout from '../components/layout'
import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
  return(<Layout>
      <Component {...pageProps} />
  </Layout>)
}

export default MyApp
