import React, {useEffect, useState} from 'react'
import Image from 'next/image';

import { VscChromeClose } from "react-icons/vsc";

import watch2 from "../public/images/posterity_10.png";

const Roadmap = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  return (
    <div className="mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 pb-40 md:pb-20 lg:pb-0">
      <h1 className="text-7xl text-gray font-bebas text-left" data-aos="fade-up">Roadmap.</h1>
      <h4 className="text-xl text-gray mb-5">We have one main goal  - to create the largest decentralized wearables brand in the metaverse combined with an engaging and involved community. </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-2 lg:gap-4 h-[600px] relative transition-transform duration-300">
        <div className={"bg-slate-700 relative flex flex-col p-5 rounded"} data-aos="flip-up" data-aos-duration="1000">
              <Image src={watch2} layout="fill" objectFit="cover" className="opacity-40 rounded" />
              <div className="grid cursor-pointer h-full relative" onClick={() => setClick(true)}>
                <h1 className="font-bebas text-9xl text-gray">01</h1>
                <h2 className="self-end text-2xl text-gray pb-2">The Clock is Ticking.</h2>
                <ul className="text-gray">
                  <li>- Build the community to 50.000/100.000 members. </li>
                  <li>- Launch the first 10k collection.</li>
                </ul>
              </div>
        </div>

        <div className={"bg-gray relative flex flex-col p-5 rounded"} data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
          <div className="grid cursor-pointer h-full" onClick={() => setClick1(true)}>
            <h1 className="font-bebas text-9xl text-ketic">02</h1>
            <h2 className="self-end text-2xl text-ketic pb-2">First Launch.</h2>
            <ul className="text-ketic">
              <li>- 1/4ly airdrops.</li>
              <li>- Finding the most suitable Metaverse for our watches.</li>
            </ul>
          </div>
        </div>

        <div className={"bg-gray relative flex flex-col p-5 rounded lg:row-span-2"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="100">
            <div className="grid cursor-pointer h-full" onClick={() => setClick2(true)}>
              <h1 className="font-bebas text-9xl text-ketic">03</h1>
              <h2 className="self-end text-2xl text-ketic pb-2">We&apos;re in!</h2>
              <ul className="text-ketic">
               <li>- Expanding the team.</li>
               <li>- Joining the Metaverse.</li> 
               <li>- Second launch of collection.</li> 
                </ul>
            </div>
        </div>

        <div className={"bg-gray relative flex flex-col lg:col-span-2 lg:row-span-2 p-5 rounded"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="150">
            <div className="grid cursor-pointer h-full" onClick={() => setClick3(true)}>
              <h1 className="font-bebas text-9xl text-ketic">04</h1>
              <h2 className="self-end text-2xl text-ketic pb-2">$Posterity.</h2>
              <ul className="text-ketic">
             <li>- Launching the $POSTERITY cryptocurrency on the Ethereum Blockchain.</li> 
              <li>- Staking the NFT&apos;s.</li> 

                </ul>
            </div>
        </div>

        <div className={"bg-gray relative flex flex-col p-5 rounded"} data-aos="flip-up" data-aos-duration="1000"  data-aos-delay="200">
            <div className="grid cursor-pointer h-full" onClick={() => setClick4(true)}>
              <h1 className="font-bebas text-9xl text-ketic">05</h1>
              <h2 className="self-end text-2xl text-ketic pb-2">The Bridge.</h2>
              <ul className="text-ketic">
                <li>- Real life events</li> 
                <li>- Merch & release watch collection</li>
                <li>- Expanding the team even more</li>
              </ul>
            </div>
        </div>

        {/* fullscreen version */}
        <div className={!click ? "hidden" :"bg-slate-400 flex p-5 rounded w-full h-full absolute z-10"}>
            <div className="flex w-full justify-between">
              <h2>First Launch.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick(false)} />
            </div>  
        </div>
        <div className={!click1 ? "hidden" :"bg-slate-400 flex p-5 rounded w-full h-full absolute z-10"}>
            <div className="flex w-full justify-between">
              <h2>The clock is ticking.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick1(false)} />
            </div>  
        </div>
        <div className={!click2 ? "hidden" :"bg-slate-400 flex p-5 rounded w-full h-full absolute z-10"}>
            <div className="flex w-full justify-between">
              <h2>We're in.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick2(false)} />
            </div>  
        </div>
        <div className={!click3 ? "hidden" :"bg-slate-400 flex p-5 rounded w-full h-full absolute z-10"}>
            <div className="flex w-full justify-between">
              <h2>We are here to stay.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick3(false)} />
            </div>  
        </div>
        <div className={!click4 ? "hidden" :"bg-slate-400 flex p-5 rounded w-full h-full absolute z-10"}>
            <div className="flex w-full justify-between">
              <h2>Contact us.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick4(false)} />
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Roadmap