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
  // useEffect(() => {
  //   setTimeout(() => setPageLoading(true), 1500);
  // }, []);

  // useEffect(() => {
  //   const body = document.body,
  //     scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  //     height = scrollWrap.getBoundingClientRect().height - 1,
  //     speed = 0.04;

  //   let offset = 0;

  //   body.style.height = Math.floor(height) + "px";

  //   const smoothScroll = () => {
  //     offset += (window.scrollY - offset) * speed;
  //     let scroll = "translateY(-" + offset + "px) translateZ(0)";
  //     scrollWrap.style.transform = scroll;
  //     requestAnimationFrame(smoothScroll);
  //   };

  //   smoothScroll();
  // }, []);

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
