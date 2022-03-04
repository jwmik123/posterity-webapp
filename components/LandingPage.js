import React, {Suspense, useState, useEffect} from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import Loader from "./Loader";
import Object from "./object";

function LandingPage() {
  return (
    <div className="px-5 md:px-20 lg:px-48 h-[100vh] font-poppins flex items-center relative text-slate-100">
      <div className="z-10 relative w-full lg:w-1/2 flex flex-col">
        <h1 className="text-6xl lg:text-[180px] xl:text-[220px] font-bebas leading" data-aos="fade-up"  data-aos-delay="400">Posterity Watches</h1>
        <h3 className="text-2xl text-slate-500 font-poppins font-light"  data-aos="fade-up" data-aos-delay="500">&#47;&#47; A Metaverse Luxury Brand &#47;&#47;</h3>
        <div className="w-52 h-14 mt-10 bg-rose-600 flex items-center justify-center rounded-md cursor-pointer hover:bg-gradient-to-br from-rose-600 to-rose-500 transition duration-300" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-xl text-slate-100">Connect wallet</h2>
        </div>
      </div>
      <div className={`relative md:absolute h-full w-1/2 right-0`}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Object/>
            <OrbitControls enableZoom={false} />
            <Environment
            background={false}
            path="/"
            scene={undefined}
            preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default LandingPage