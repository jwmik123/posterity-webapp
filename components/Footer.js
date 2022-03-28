import React, {useState, useEffect} from 'react'
import { FaTwitter, FaDiscord } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

function Footer() {

  return (
    <footer className="bg-black flex flex-col md:flex-row gap-5 text-center md:text-left justify-between items-center px-5 md:px-20 lg:px-44 py-5">
      <div className={ "text-slate-100 font-staat text-5xl py-2 px-4 rounded h-18"}>Posterity.</div>
      <div>
        <p className="text-xl text-slate-100">&copy;2022 POSTERITY.</p>
      </div>
      <div className="text-lg text-slate-100 flex flex-col">
        <a href='#'>Terms of Service</a>
      </div>
      <div className="flex flex-row gap-4">
        <button className="bg-slate-700 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><a href="https://discord.gg/puSCbueBbq" target="_blank"><FaDiscord className="w-6 h-6"/></a></button>
          <button className="bg-slate-700 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><a href="https://twitter.com/PosterityNFT" target="_blank"><FaTwitter className="w-6 h-6"/></a></button>
          <button className="bg-slate-700 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><a href="https://www.instagram.com/posteritywatches/" target="_blank"><AiFillInstagram className="w-6 h-6"/></a></button>
        </div>
    </footer>
  )
}

export default Footer