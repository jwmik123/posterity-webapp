import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Loader from "./Loader";
import Object from "./object";
import { useWeb3 } from "@3rdweb/hooks"

function LandingPage() {
  const { address, connectWallet } = useWeb3();

  return (
    <div className="px-5 md:px-20 lg:px-48 lg:h-[100vh] font-roboto flex items-center relative text-slate-100">
      <div className={`hidden lg:block relative md:absolute h-full w-1/2 right-0`}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Object />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment
              background={false}
              path="/"
              scene={undefined}
              preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
      <div className="hidden z-10 relative w-full lg:w-3/4 lg:flex flex-col right-0">
        <h1 className="text-6xl lg:text-[120px] xl:text-[160px] font-staat text-gray leading" data-aos="fade-up"  data-aos-delay="400">Posterity Watches</h1>
        <h3 className="text-2xl text-slate-500 font-roboto font-light"  data-aos="fade-up" data-aos-delay="500">&#47;&#47; A Metaverse Luxury Brand &#47;&#47;</h3>
        {address 
          ? (
            <button className="w-52 h-14 mt-10 bg-sky flex items-center justify-center rounded-md cursor-pointer hover:scale-110 duration-100" data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-xl text-ketic">({address.substring(0,4)}...{address.substring(address.length - 4 ,address.length)})</h2>
            </button>
          )
          : (
            <button onClick={() => connectWallet("injected")} className="w-52 h-14 mt-10 bg-sky flex items-center justify-center rounded-md cursor-pointer hover:scale-110 duration-100" data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-xl text-ketic">Connect wallet</h2>
            </button>
          )
        }
      </div>
      <div className="bg-red-900 mt-36 w-full lg:hidden">
        <h1 className="text-6xl font-staat text-center">Posterity Watches</h1>
        <div className="flex justify-center">
        {address 
          ? (
            <button className="w-52 h-16 mt-10 bg-sky flex items-center justify-center rounded-md cursor-pointer hover:scale-110 duration-100">
              <h2 className="text-xl font-roboto font-bold text-ketic">({address.substring(0,4)}...{address.substring(address.length - 4 ,address.length)})</h2>
            </button>
          )
          : (
            <button onClick={() => connectWallet("injected")} className="w-52 h-14 mt-10 bg-sky flex items-center justify-center rounded-md cursor-pointer hover:scale-110 duration-100" data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-xl text-ketic">Connect Wallet</h2>
            </button>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default LandingPage