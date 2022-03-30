import React from 'react';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Roadmap = () => {
  return (
    <div className="mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 md:pb-20 lg:pb-0">
      <h1 className="text-7xl text-gray font-staat text-left" data-aos="fade-up">Roadmap.</h1>
      <h4 className="text-xl text-gray mb-5" data-aos="fade-up">We have one main goal  - to create the largest decentralized wearables brand in the metaverse combined with an engaging and involved community. </h4>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 grid-flow-row gap-2 lg:gap-4 min-h-[600px] relative transition-transform duration-300">
        <div className={"relative flex flex-col rounded"} data-aos="flip-up" data-aos-duration="1000">
          <Spline className="hidded lg:block" scene="https://prod.spline.design/JwyCLVV9Ema1SDDc/scene.spline" />
        </div>

        <div className={" relative flex flex-col rounded"} data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
          <Spline className="hidded lg:block" scene="https://prod.spline.design/sTKGGd5CJ3H73rsn/scene.spline" />
        </div>

        <div className={" relative flex flex-col rounded"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="100">
          <Spline className="hidded lg:block" scene="https://prod.spline.design/TMv9R8syr730v37V/scene.spline" />
        </div>

        <div className={"relative flex flex-col rounded"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="150">
          <Spline className="hidded lg:block" scene="https://prod.spline.design/oSNnrCXN6BXl1KsX/scene.spline" />
        </div>

        <div className={" relative flex flex-col rounded"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="200">
          <Spline className="hidded lg:block" scene="https://prod.spline.design/kVczn188Oyapf-Ec/scene.spline" />
        </div>
      </div>
    </div>
  )
}

export default Roadmap