import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
import Creators from "../components/Creators";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Faq from "../components/FaqPage";

export default function Home() {
  return (
    <div className="bg-ketic">
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#030315]">
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
