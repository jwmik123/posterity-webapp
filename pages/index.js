import Head from 'next/head'
import Image from 'next/image'

import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import ObjectViewer from "../components/ObjectViewer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Posterity</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200  w-full">
        <Header />
        {/* <LandingPage /> */}
        {/* <ObjectViewer scale="40" modelPath="../assets/watch.glb"/> */}
      </main>

      <footer>
      </footer>
    </>
  )
}
