import React from 'react'
import Image from 'next/image'
import watch from "../public/images/rendered1.png"

const Creators = () => {
  return (
    <div className=" py-20 mt-20 text-slate-100 flex flex-col items-center">
      <h1 className="text-7xl font-bebas text-center mb-10" data-aos="fade-up">The team.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2  px-10 ">
              <h2 className="font-bebas">Jalla.</h2>
              <span className="font-poppins text-xl">Blockchain Developer</span>
          </div>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 px-10 ">
              <h2 className="font-bebas">Mars.</h2>
              <span className="font-poppins text-xl">Marketing Lead</span>
            </div>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 bg- rounded-b-2xl">
              <h2 className="font-bebas">Tyler.</h2>
              <span className="font-poppins text-xl">Community Lead</span>
            </div>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 px-10 ">
              <h2 className="font-bebas">Kev.</h2>
              <span className="font-poppins text-xl">3D Head of Design</span>
            </div>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 px-10">
              <h2 className="font-bebas">Luke.</h2>
              <span className="font-poppins text-xl">Animator</span>
            </div>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 bg- px-10 ">
              <h2 className="font-bebas">Wessa.</h2>
              <span className="font-poppins text-xl">Blockchain Developer</span>
               </div>
               <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, vero quidem deleniti nam cupiditate.</p>
           
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-64  relative">
            <Image className="rounded-3xl" layout="fill" objectFit="cover" src={watch} quality={100} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center pt-2 bg- px-10 ">
              <h2 className="font-bebas">Tom.</h2>
              <span className="font-poppins text-xl">Sales</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Creators