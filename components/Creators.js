import React from 'react'
import Image from 'next/image'
import watch from "../public/rendered1.png"
import { FaTwitter } from "react-icons/fa";

const Creators = () => {
  const teamUrl = 'https://posterity.mypinata.cloud/ipfs/bafybeigstlzsx2suta33xpoakdepdeg6ya2d5jblcxaypo45odaetasuuy/posterity1920_';
  return (
    <div className="py-20 mt-20 text-slate-100 flex flex-col items-center">
      <h1 className="text-7xl font-bebas text-center mb-10" data-aos="fade-up">The team.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4">
  
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Tyler.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br /> Community Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Tyler</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}2.png`} quality={100} alt="tyler"/>
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Marc.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br/> Marketing Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Marc</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}1.png`} quality={100} alt="marc" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Jalla.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br/> Blockchain Developer</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Jalla</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}3.png`} quality={100} alt="jalla" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Wessa.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Blockchain Developer</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Wessa</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}4.png`} quality={100} alt="wessa" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Kev.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">3D Design Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Kev</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}5.png`} quality={100} alt="kev" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Luke.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">3D Motion Design</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@LukeLuke</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}6.png`} quality={100} alt="Luke" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Tom.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Sales</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Tom</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}7.png`} quality={100} alt="Tom" />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Join us.</h2>
              {/* <h5 className="font-poppins text-xl group-hover:hidden">Co-founder / Community Lead</h5> */}
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
              </p>     
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2"><FaTwitter className="w-10 h-10 bg-blue-500 text-slate-100 p-2 rounded-xl"/> <p>@Tyler</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75 group-hover:opacity-50" layout="fill" objectFit="cover" priority src={`${teamUrl}10.png`} quality={100} alt="joinus" />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Creators