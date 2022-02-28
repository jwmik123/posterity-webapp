import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className=" text-slate-100 z-50" data-aos="fade-up">
        <div className="mx-5 px-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 py-20 bg-gradient-to-r from-rose-900 to-rose-700 rounded-3xl">
        <h1 className="text-7xl font-bebas" data-aos="fade-up">Roadmap</h1>
        <div className="flex flex-row justify-between">
          <div className="py-14"  data-aos="fade-up">
            <h2 className="text-4xl pb-4 font-bebas">&#47;&#47;01 first launch.</h2>
            <p className="text-lg font-light">- Growing the community.</p>
            <p className="text-lg font-light">- Launching the first 10k NFT collection.</p>
          </div>
          <div className="py-14"  data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl pb-4 font-bebas text-slate-900">&#47;&#47;02 The clock&apos;s ticking.</h2>
            <div className="text-slate-900">
              <p className="text-lg font-light">- Making the Watches wearable.</p>
              <p className="text-lg font-light">- Finding the best metaverse for Posterity.</p>
              <p className="text-lg font-light">- Merch.</p>
            </div>
          </div>
          <div className="py-14"  data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl pb-4 font-bebas text-slate-900">&#47;&#47;03 We&apos;re in.</h2>
            <div className="text-slate-900">
              <p className="text-lg font-light">- Exploring the metaverse.</p>
              <p className="text-lg font-light">- Dropping our 2nd collection.</p>
            </div>
          </div>
          <div className="py-14"  data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-4xl pb-4 font-bebas text-slate-900">&#47;&#47;04 We go forever.</h2>
            <div className="text-slate-900">
              <p className="text-lg font-light">- TBA</p>
            </div>  
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Roadmap