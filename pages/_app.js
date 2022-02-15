import '../styles/globals.css'

import {useEffect} from "react";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

// import barba from '@barba/core';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    // barba.init({});
  })
  return <Component {...pageProps} />
}

export default MyApp
