import Head from 'next/head'
import Filter from "../components/Filter";

export default function Gallery() {
  return (
    <div className="bg-ketic">
      <Head>
        <title>Posterity / Gallery</title>
        <meta name="description" content="A metaverse luxury brand" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" href="/fonts/Staatliches-Regular.ttf" type="font/ttf" crossOrigin="anonymous"></link>
      </Head>
      <main className="bg-ketic">
        {/* <Header /> */}
        <Filter />
      </main>
      {/* <Footer /> */}
    </div>
  )}
