import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
import Creators from "../components/Creators";
import Banner from "../components/Banner";

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
        <Roadmap />
        <Creators />
      </main>
      <footer className="bg-rose-600 flex justify-between items-center px-5 md:px-20 lg:px-48 py-5">
      <div className={ "bg-rose-600 text-slate-900 font-bebas text-5xl py-2 px-4 rounded h-18"}>Posterity.</div>
        <div>
          <p className="text-2xl">&copy; Posterity.</p>
        </div>
        <div>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </>
  )}
