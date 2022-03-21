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
      <Footer />
    </div>
  )}
