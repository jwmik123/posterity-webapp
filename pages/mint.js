import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from '../components/Footer';

export default function Mint() {
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
      </main>
      <Footer />
    </div>
  )}
