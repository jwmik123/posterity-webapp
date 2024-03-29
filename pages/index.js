import Head from "next/head";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
import Creators from "../components/Creators";
import Banner from "../components/Banner";
import MailingBanner from "../components/MailingBanner";
import Footer from "../components/Footer";
import Faq from "../components/FaqPage";

export default function Home() {
  return (
    <div className="bg-ketic">
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="font"
          href="/fonts/Staatliches-Regular.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main className="bg-ketic ">
        <Header />
        <LandingPage />
        <Banner />
        <Roadmap id="roadmap" />
        <MailingBanner />
        <Creators />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
