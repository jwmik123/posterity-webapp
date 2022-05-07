import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import Canvas from "./atoms/Canvas";

// Als je iets wilt importeren dat client side moet werken, moet je op deze manier importen met NextJS.
const isMobile = dynamic(() => import("react-device-detect"));

const Roadmap = () => {
  return (
    <div className="h-[8000px] relative flex justify-center">
      {/* <ParallaxRoadmap /> */}
      <Canvas className="sticky left-[50%] top-[0%] max-h-[100vh] max-w-[100vw]" />
      {/* <div className="roadmap pt-24 -mt-24 mx-5 md:mx-10 md:px-10 xl:mx-24 xl:px-24 md:pb-20 lg:pb-20">
        <h1
          className="text-7xl text-gray font-staat text-center"
          data-aos="fade-up"
        >
          Roadmap.
        </h1>
        <h4 className="text-xl text-gray mb-5 text-center" data-aos="fade-up">
          We have one main goal - to create the largest decentralized wearables
          brand in the metaverse combined with an engaging and involved
          community.
        </h4>

        <div className="grid-container w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-10 relative text-gray">
            <div className="py-10 px-5 border-b-2">
              <h1 className="font-staat text-9xl text-sky">01</h1>
              <h2 className="text-4xl uppercase font-bold">
                The Clock&apos;s Ticking.
              </h2>
              <ul className="text-lg">
                <li>- Build the community to 50.000 members.</li>
                <li>- Launch our first 10.000 collection.</li>
                <li>- Unlock our sell-out giveaway.</li>
              </ul>
            </div>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <div
              className="border-b-2 py-10 px-5"
              data-aos={isMobile ? "fade-up" : "fade-left"}
              data-aos-delay="300"
            >
              <h1 className="font-staat text-9xl text-sky">02</h1>
              <h2 className="text-4xl uppercase font-bold">Post Launch.</h2>
              <ul className="text-lg">
                <li>- Quarterly airdrops for Posterity NFT holders.</li>
                <li>- Finding the most suitable Metaverse for our watches.</li>
                <li>- Involving the community in our decision making.</li>
              </ul>
            </div>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <div
              className="border-b-2 py-10 px-5"
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-delay="300"
            >
              <h1 className="font-staat text-9xl text-sky">03</h1>
              <h2 className="text-4xl uppercase font-bold">We&apos;re In.</h2>
              <ul className="text-lg">
                <li>- Expanding the team, creating a movement.</li>
                <li>
                  - Joining the selected Metaverse and make watches available to
                  wear.
                </li>
                <li>- Second launch of limited premium collection.</li>
              </ul>
            </div>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <div
              className="border-b-2 py-10 px-5"
              data-aos={isMobile ? "fade-up" : "fade-left"}
              data-aos-delay="300"
            >
              <h1 className="font-staat text-9xl text-sky">04</h1>
              <h2 className="text-4xl uppercase font-bold">
                The Posterity Coin.
              </h2>
              <ul className="text-lg">
                <li>
                  - Launching the $POSTERITY cryptocurrency on the Ethereum
                  Blockchain.
                </li>
                <li>
                  - Staking the NFT&apos;s to create passive income for the
                  community.
                </li>
              </ul>
            </div>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <div
              className="border-b-2 py-10 px-5"
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-delay="300"
            >
              <h1 className="font-staat text-9xl text-sky">05</h1>
              <h2 className="text-4xl uppercase font-bold">The Bridge.</h2>
              <ul className="text-lg">
                <li>- Create real life events for Posterity NFT holders.</li>
                <li>- Release Posterity watch &amp; clothing collection.</li>
                <li>
                  - Expanding the team even more to carry on with the journey.
                </li>
                <li>- To be continued...</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Roadmap;
