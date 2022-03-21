import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
import Creators from "../components/Creators";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Faq from "../components/FaqPage";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-slate-900">
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
        <Faq />
      </main>
<<<<<<< HEAD
      <Footer />
    </div>
=======
      <footer className="bg-black flex flex-col md:flex-row gap-5 text-center md:text-left justify-between items-center px-5 md:px-20 lg:px-44 py-5">
        <div className={ "text-slate-100 font-bebas text-5xl py-2 px-4 rounded h-18"}>Posterity.</div>
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
      </div>
>>>>>>> development
  )}
