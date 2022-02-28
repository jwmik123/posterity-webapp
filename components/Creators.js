import React from 'react'
import Image from 'next/image'

import watch from "../assets/watch3.png"

const Creators = () => {
  return (
    <div className="px-10 md:px-20 lg:px-48 py-20 text-slate-100 z-50">
    <h1 className="text-7xl font-bebas text-center" data-aos="fade-up">The team.</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="creator text-white" data-aos="fade-up">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Jalla</h3>
          <h4 className="text-lg font-poppins">Co-founder // Blockchain Developer</h4>
        </div>
      </div>
      <div className="creator text-white grow" data-aos="fade-up"  data-aos-delay="100">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Mitta</h3>
          <h4 className="text-lg font-poppins">Co-founder // Community Manager</h4>
        </div>
      </div>
      <div className="creator text-white" data-aos="fade-up"  data-aos-delay="150">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Cryptiano</h3>
          <h4 className="text-lg font-poppins">Co-founder // Marketing Lead</h4>
        </div>
      </div>
      <div className="creator text-white" data-aos="fade-up"  data-aos-delay="200">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Kev</h3>
          <h4 className="text-lg font-poppins">Designer</h4>
        </div>
      </div>
      <div className="creator text-white" data-aos="fade-up"  data-aos-delay="250">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Wessa</h3>
          <h4 className="text-lg font-poppins">Blockchain Developer</h4>
        </div>
      </div>
      <div className="creator text-white" data-aos="fade-up"  data-aos-delay="300">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Woetroe</h3>
          <h4 className="text-lg font-poppins">Animator // Marketing</h4>
        </div>
      </div>
      <div className="creator text-white" data-aos="fade-up"  data-aos-delay="150">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Tomski</h3>
          <h4 className="text-lg font-poppins">Sales // Marketing</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Creators