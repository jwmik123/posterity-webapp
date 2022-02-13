import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import Loader from "./Loader";
import Object from "./object";

function LandingPage() {
  return (
    <div className="px-5 lg:px-20 h-[90vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 font-poppins flex items-center relative text-slate-100">
      <div className="z-10 relative w-full">
      <h1 className="text-6xl md:text-[180px] font-bebas pointer-events-none" data-aos="fade-up"  data-aos-delay="400">Posterity Watches</h1>
      <h3 className="text-3xl font-poppins font-light pointer-events-none"  data-aos="fade-up" data-aos-delay="500">A Metaverse Luxury Brand</h3>
      </div>
      <div className="absolute h-5/6 w-1/2 right-0">
        <Canvas>
          <Suspense fallback={<Loader/>}>
            <Object/>
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default LandingPage