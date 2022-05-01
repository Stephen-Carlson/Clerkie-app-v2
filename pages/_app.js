import '../styles/globals.css'
import Layout from '../components/layout'
import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
  return(
      <main>
      <Component {...pageProps}/>
      </main>)
}

export default MyApp
