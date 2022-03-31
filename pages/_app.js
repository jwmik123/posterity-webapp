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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    // barba.init({});
  })
  
  useEffect(() => {
    setTimeout(() =>  setLoading(true), 4000);
  }, [])

  return ( 
    <>
    {loading ? (
      <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider> 
    ) : (
      <LoadingScreen />
    )}
    </> 
  )
}

export default MyApp
