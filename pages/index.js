import Head from 'next/head'

import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Roadmap from "../components/Roadmap";
export default function Home() {
  return (
    <>
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 w-full">
        <Header />
        <LandingPage />
        <Roadmap />
      </main>

      <footer>
      </footer>
    </>
  )
}
