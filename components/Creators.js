import React from 'react'
import Image from 'next/image'
import watch from "../public/rendered1.png"
import { FaTwitterSquare } from "react-icons/fa";

const Creators = () => {
  const teamUrl = 'https://gateway.pinata.cloud/ipfs/';
  return (
    <div className="py-20 mt-20 text-slate-100 flex flex-col items-center">
      <h1 className="text-7xl font-bebas text-center mb-10" data-aos="fade-up">The team.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4">
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10 transition-all">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Jalla.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder / Development</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Mitta.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder / Community Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmUwRyhpJWNyeC5bdKUq9vySiv2b4gCtJK3XEhqDvwbUFs`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Marc.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder / Marketing Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Kev.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Design Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmcLW1CFHRosVJDTqimLgU3Kb3YzrCRX8ygJo1VZ6U2tHb`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Wessa.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Blockchain Developer</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Luke.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Animation Lead / Marketing</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Tom.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Sales Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat officiis provident asperiores dolores veniam labore veritatis doloribus, 
                vero quidem deleniti nam cupiditate.
                <FaTwitterSquare className="w-8 h-8 text-blue-400 cursor-pointer" />
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
        <div className="creator flex justify-center flex-col items-center">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left  px-5">Join us.</h2>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block"><br />
                We are always looking for new people to join our team. Do you think you have what it takes? <a href="mailto:info@posteritywatches.io" className="text-slate-100 bg-rose-600 rounded px-2 py-1">Email us!</a>
              </p>      
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={`${teamUrl}QmZyjU8RcX3EM7DVZH65ogk5BF2wqHCWVw67XwYwcdawnU`} quality={100} />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Creators