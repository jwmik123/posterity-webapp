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
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-2 lg:gap-4 h-[600px] relative transition-transform duration-300">
        <div className={!click ? "bg-slate-700 relative flex flex-col p-5 rounded"
        : "bg-slate-400 flex p-5 rounded w-full h-full absolute z-50"} data-aos="flip-left" data-aos-duration="1000" >
          {!click ? (
            <>
              <Image src={watch2} layout="fill" objectFit="cover" className="opacity-60 rounded" />
              <div className="grid cursor-pointer h-full relative" onClick={() => setClick(true)}>
                <h1 className="font-bebas text-9xl text-slate-100">01</h1>
                <h2 className="self-end text-slate-100">First Launch.</h2>
              </div>
            </>
           
          ) : (
            <div className="flex w-full justify-between">
              <h2>First Launch.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick(false)} />
            </div>  
          )}
        </div>
        <div className={!click1 ? "bg-slate-500 relative flex flex-col p-5 rounded"
        : "bg-slate-400 flex p-5 rounded w-full h-full absolute z-50"} data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50">
          {!click1 ? (
            <div className="grid cursor-pointer h-full" onClick={() => setClick1(true)}>
              <h1 className="font-bebas text-9xl text-slate-100">02</h1>
              <h2 className="self-end text-slate-100">The clock is ticking.</h2>
            </div>
          ) : (
            <div className="flex w-full justify-between">
              <h2>The clock is ticking.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick1(false)} />
            </div>  
          )}
        </div>
        <div className={!click2 ? "bg-slate-500 relative flex flex-col p-5 rounded lg:row-span-2"
        : "bg-slate-400 flex p-5 rounded w-full h-full absolute z-50"} data-aos="flip-left" data-aos-duration="1000"  data-aos-delay="100">
          {!click2 ? (
            <div className="grid cursor-pointer h-full" onClick={() => setClick2(true)}>
              <h1 className="font-bebas text-9xl text-slate-100">03</h1>
              <h2 className="self-end text-slate-100">We&apos;re in.</h2>
            </div>
          ) : (
            <div className="flex w-full justify-between">
              <h2>We&apos;re in.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick2(false)} />
            </div>  
          )}
        </div>
        <div className={!click3 ? "bg-slate-500 relative flex flex-col lg:col-span-2 lg:row-span-2 p-5 rounded"
        : "bg-slate-400 flex p-5 rounded w-full h-full absolute z-50"} data-aos="flip-left" data-aos-duration="1000"  data-aos-delay="150">
          {!click3 ? (
            <div className="grid cursor-pointer h-full" onClick={() => setClick3(true)}>
              <h1 className="font-bebas text-9xl text-slate-100">04</h1>
              <h2 className="self-end text-slate-100">We are here to stay.</h2>
            </div>
          ) : (
            <div className="flex w-full justify-between">
              <h2>We are here to stay.</h2>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick3(false)} />
            </div>  
          )}
        </div>
        <div className={!click4 ? "bg-slate-500 relative flex flex-col p-5 rounded"
        : "bg-slate-400 flex p-5 rounded w-full h-full absolute z-50"} data-aos="flip-left" data-aos-duration="1000"  data-aos-delay="200">
          {!click4 ? (
            <div className="grid cursor-pointer h-full" onClick={() => setClick4(true)}>
              <h1 className="font-bebas text-9xl text-slate-100">05</h1>
              <h2 className="self-end text-slate-100">Contact us.</h2>
            </div>
          ) : (
            <div className="flex w-full justify-between">
              <h2>Contact us.</h2>
              <p>Is there anything you would like us to know?</p>
              <VscChromeClose className="w-8 h-8 cursor-pointer" onClick={() => setClick4(false)} />
            </div>  
          )}
        </div>
      </div>
    </div>
  )
}

export default Roadmap