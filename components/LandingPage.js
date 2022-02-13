import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";

import Object from "./object";
import Loader from "./Loader";


function LandingPage() {
  return (
    <div className="px-5 lg:px-20 h-[90vh] font-poppins flex items-center relative text-slate-300">
      <div className="z-10 relative w-full pointer-events-none">
      <h1 className="text-[180px] font-bebas">Posterity Watches</h1>
      <h3 className="text-3xl font-poppin font-light -mt-10">A Metaverse Luxury Brand</h3>
      </div>
      <div className="absolute h-5/6 w-1/2 right-0">
        <Canvas>
          <Suspense fallback={<Loader/>}>
            <Object />
            <OrbitControls />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
      
    </div>
  )
}

export default LandingPage