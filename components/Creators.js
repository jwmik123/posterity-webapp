import React from 'react'
import Image from 'next/image'

import watch from "../assets/watch3.png"

const Creators = () => {
  return (
    <div className="px-10 md:px-20 lg:px-48 py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-slate-100 z-50">
    <h1 className="text-7xl font-bebas" data-aos="fade-up">Creators</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="creator text-white">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Jalla</h3>
          <h4 className="text-lg font-poppins">Co-founder // Blockchain Developer</h4>
        </div>
      </div>
      <div className="creator text-white grow">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Mitta</h3>
          <h4 className="text-lg font-poppins">Co-founder // Community Manager</h4>
        </div>
      </div>
      <div className="creator text-white">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Cryptiano</h3>
          <h4 className="text-lg font-poppins">Co-founder // Marketing</h4>
        </div>
      </div>
      <div className="creator text-white">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Kev</h3>
          <h4 className="text-lg font-poppins">Designer</h4>
        </div>
      </div>
      <div className="creator text-white">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Wessa</h3>
          <h4 className="text-lg font-poppins">Blockchain Developer</h4>
        </div>
      </div>
      <div className="creator text-white">
        <div className="w-64 h-64"><Image src={watch} layout="fill" objectFit="contain" quality={100} /></div>
        <div className="relative">
          <h3 className="text-2xl font-bebas">Woetroe</h3>
          <h4 className="text-lg font-poppins">Animator // Marketing</h4>
        </div>
      </div>
      <div className="creator text-white">
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