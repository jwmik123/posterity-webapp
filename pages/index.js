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
      <footer className="bg-rose-600">
        Posterity
      </footer>
    </>
  )}
