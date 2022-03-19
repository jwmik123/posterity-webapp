import '../styles/globals.css'

import {useEffect} from "react";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import { ThirdwebProvider } from "@3rdweb/react";
const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

// import barba from '@barba/core';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    // barba.init({});
  })
  return ( 
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider> 
  )
}

export default MyApp
