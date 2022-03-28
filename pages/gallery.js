import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <div className="bg-ketic">
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-ketic">
        <Header />
        <LandingPage />
      </main>
      <Footer />
    </div>
  )}
