import "../styles/globals.css";
import { useEffect, useState } from "react";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import { ThirdwebProvider } from "@3rdweb/react";

import LoadingScreen from "../components/LoadingScreen";

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    // barba.init({});
  });

  const [pageLoading, setPageLoading] = useState(true);

  return (
    <>
      {!pageLoading ? (
        <LoadingScreen />
      ) : (
        <ThirdwebProvider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
        >
          <div className="smooth-scroll-wrapper">
            <Component {...pageProps} />
          </div>
        </ThirdwebProvider>
      )}
    </>
  );
}

export default MyApp;
