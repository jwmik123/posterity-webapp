import React, {lazy, Suspense} from 'react';

// import dynamic from 'next/dynamic';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Roadmap = () => {
  return (
    <div className="mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 md:pb-20 lg:pb-0">
      <h1 className="text-7xl text-gray font-staat text-left" data-aos="fade-up">Roadmap.</h1>
      <h4 className="text-xl text-gray mb-5" data-aos="fade-up">We have one main goal - to create the largest decentralized wearables brand in the metaverse combined with an engaging and involved community. </h4>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 grid-flow-row gap-2 lg:gap-4 min-h-[600px] relative transition-transform duration-300">
        <div className={"relative flex flex-col rounded"} data-aos="fade-up">
          <Suspense fallback={<p>loading</p>}>
            <Spline className="hidded lg:block opacity-70" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" />
          </Suspense>
          <div className="text-gray font-roboto absolute pointer-events-none p-10 flex flex-col justify-center h-full w-full rounded-md">
            <h1 className="font-staat text-9xl text-sky">01</h1>
            <h2 className="text-4xl uppercase font-bold">The Clock&apos;s Ticking.</h2>
            <ul className="text-lg">
              <li>- Build the community to 50.000 members.</li>
              <li>- Launch our first 10.000 collection.</li>
              <li>- Unlock our sell-out giveaway.</li>
            </ul>
          </div>
        </div>

        <div className={" relative flex flex-col rounded"} data-aos="fade-in">
          <Suspense fallback={<p>loading</p>}>
            <Spline className="hidded lg:block" scene="https://prod.spline.design/sTKGGd5CJ3H73rsn/scene.spline" />
            {/* <Spline className="hidded lg:block" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" /> */}
          </Suspense>
          <div className="text-gray font-roboto absolute pointer-events-none p-5 flex flex-col justify-center h-full w-full rounded-md">
            <h1 className="font-staat text-9xl text-sky">02</h1>
            <h2 className="text-4xl uppercase font-bold">Pre Launch.</h2>
            <ul className="text-lg">
              <li>- Quarterly airdrops for Posterity NFT holders.</li>
              <li>- Finding the most suitable Metaverse for our watches.</li>
              <li>- Involving the community in our decision making.</li>
            </ul>
          </div>
        </div>

        <div className={" relative flex flex-col rounded"} data-aos="fade-in">
          <Suspense fallback={<p>loading</p>}>
            <Spline className="hidded lg:block" scene="https://prod.spline.design/TMv9R8syr730v37V/scene.spline" />
            {/* <Spline className="hidded lg:block" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" /> */}
          </Suspense>
          <div className="text-gray font-roboto absolute pointer-events-none p-10 flex flex-col justify-center h-full w-full rounded-md">
            <h1 className="font-staat text-9xl text-sky">03</h1>
            <h2 className="text-4xl uppercase font-bold">We&apos;re In.</h2>
            <ul className="text-lg">
              <li>- Expanding the team, creating a movement.</li>
              <li>- Joining the selected Metaverse and make watches available to wear.</li>
              <li>- Second launch of limited premium collection.</li>
            </ul>
          </div>
        </div>

        <div className={"relative flex flex-col rounded"} data-aos="fade-in">
          <Suspense fallback={<p>loading</p>}>
            <Spline className="hidded lg:block" scene="https://prod.spline.design/oSNnrCXN6BXl1KsX/scene.spline" />
            {/* <Spline className="hidded lg:block" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" /> */}
          </Suspense>
          <div className="text-gray font-roboto absolute pointer-events-none p-10 flex flex-col justify-center h-full w-full rounded-md">
            <h1 className="font-staat text-9xl text-sky">04</h1>
            <h2 className="text-4xl uppercase font-bold">The Posterity Coin.</h2>
            <ul className="text-lg">
              <li>- Launching the $POSTERITY cryptocurrency on the Ethereum Blockchain.</li>
              <li>- Staking the NFT&apos;s to create passive income for the community.</li>
            </ul>
          </div>
        </div>

        <div className={"relative flex flex-col rounded"} data-aos="fade-in">
          <Suspense fallback={<p>loading</p>}>
            <Spline className="hidded lg:block" scene="https://prod.spline.design/kVczn188Oyapf-Ec/scene.spline" />
            {/* <Spline className="hidded lg:block" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" /> */}
          </Suspense>
          <div className="text-gray font-roboto absolute pointer-events-none p-5 flex flex-col justify-center h-full w-full rounded-md">
            <h1 className="font-staat text-9xl text-sky">05</h1>
            <h2 className="text-4xl uppercase font-bold">The Bridge.</h2>
            <ul className="text-lg">
              <li>- Create real life events for Posterity NFT holders.</li>
              <li>- Release Posterity watch &amp; clothing collection.</li>
              <li>- Expanding the team even more to carry on with the journey.</li>
              <li>- To be continued...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap