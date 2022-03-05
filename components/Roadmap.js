import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className="bg-slate-500 text-slate-100 z-50 mx-5 px-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 py-20 rounded-xl" data-aos="fade-up">
        <h1 className="font-bebas text-slate-300 text-7xl mb-10">Roadmap.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="roadmap-piece" data-aos="fade-up">
            <h2 className="font-bebas text-5xl w-1/2 mb-5">01 First launch.</h2>
            <p>- Hit 100k community members before first launch.</p>
            <p>- Launching the first 10k collection.</p>
          </div>
          {/* <div className="spacing"></div>
          <div className="spacing"></div> */}
          <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="50">
            <h2 className="font-bebas text-5xl w-1/2 mb-5">02 The clock&apos;s ticking.</h2>
            <p>- Finding the most suitable Metaverse for our project.</p>
            <p>- Monthly airdrops for our holders.</p>
            <p>- Setting up the staking platform.</p>
            </div>
          <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="100">
            <h2 className="font-bebas text-5xl w-1/2 mb-5">03 We&apos;re in.</h2>
            <p>- Joining the Metaverse.</p>
            <p>- Launching the $POSTERITY coin on the Ethereum Blockchain.</p>
          </div>
          {/* <div className="spacing"></div>
          <div className="spacing"></div> */}
          <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="150">
            <h2 className="font-bebas text-5xl w-1/2 mb-5">04 We&apos;re here to stay.</h2>
            <p>To be announced.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap