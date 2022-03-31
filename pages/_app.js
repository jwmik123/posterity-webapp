import '../styles/globals.css'
import {useEffect, useState} from "react";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import { ThirdwebProvider } from "@3rdweb/react";

import LoadingScreen from '../components/LoadingScreen';

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    // barba.init({});
  })
  
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setPageLoading(true), 5500);
  }, []);

  return ( 
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
      >
      {!pageLoading ? (
      <LoadingScreen />
    ) : (
      <Component {...pageProps} />
      )
    }   
    </ThirdwebProvider> 
  )
}

export default MyApp
