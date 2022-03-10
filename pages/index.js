import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
import Creators from "../components/Creators";
import Banner from "../components/Banner";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

export default function Home() {
  return (
   <>
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900">
        <Header />
        <LandingPage />
        <Banner />
        <Roadmap id="roadmap" />
        <Creators />
      </main>
      <footer className="bg-slate-500 flex flex-col md:flex-row gap-5 text-center md:text-left justify-between items-center px-5 md:px-20 lg:px-44 py-5">
        <div className={ "text-slate-900 font-bebas text-5xl py-2 px-4 rounded h-18"}>Posterity.</div>
        <div>
          <p className="text-xl">&copy;2022 POSTERITY.</p>
        </div>
        <div className="text-lg flex flex-col">
          <a href='#'>Terms of Service</a>
          <a href='#'>Privacy Policy</a>
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-slate-900 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><FaTwitter className="w-6 h-6"/></button>
          <button className="bg-slate-900 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><FaDiscord className="w-6 h-6"/></button>
          <button className="bg-slate-900 text-slate-100 p-2 rounded-xl hover:scale-110 duration-100"><AiFillInstagram className="w-6 h-6"/></button>
        </div>
      </footer>
      </>
  )}
