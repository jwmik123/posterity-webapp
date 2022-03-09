import React, {useEffect, useState} from 'react'

const Roadmap = () => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    document.addEventListener("click", () => {
      setClick(true);
    })
  })

  return (
    <div className="mx-5 px-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 py-20">
      <div className="grid grid-cols-3 grid-flow-row gap-4 h-[600px] relative">
        <div className={!click ? "bg-slate-400 relative flex p-5 rounded cursor-pointer w-full h-full"
        : "bg-red-500 flex p-5 rounded cursor-pointer w-full h-full absolute z-50 transition-all duration-300"}>
          <h1 className="font-bebas text-9xl absolute -left-10 text-slate-100 -top-10">01</h1>
          <h2 className="self-end">First Launch.</h2>
        </div>
        <div className="bg-slate-400 relative flex p-5 rounded">
          <h1 className="font-bebas text-9xl absolute -left-10 text-slate-100 -top-10">02</h1>
          <h2 className="self-end">First Launch.</h2>
        </div>
        <div className="row-span-2 bg-slate-400 relative flex p-5 rounded">
          <h1 className="font-bebas text-9xl absolute -left-10 text-slate-100 -top-10">04</h1>
          <h2 className="self-end">First Launch.</h2>
        </div>
        <div className="col-span-2 row-span-2 bg-slate-400 relative flex p-5 rounded">
          <h1 className="font-bebas text-9xl absolute -left-10 text-slate-100 -top-10">03</h1>
          <h2 className="self-end">First Launch.</h2>
        </div>
         <div className="bg-slate-400 relative flex p-5 rounded">
          <h1 className="font-bebas text-9xl absolute -left-10 text-slate-100 -top-10">05</h1>
          <h2 className="self-end">First Launch.</h2>
        </div>
        {/*
        <div className="bg-slate-400">
          <h1 className="font-bebas text-7xl">02</h1>
          <h2>The clock's ticking.</h2>  
        </div>
        <div className="bg-slate-400 row-span-2">
          <h1 className="font-bebas text-7xl">04</h1>
          <h2>We're in.</h2>  
        </div> 
        <div className="bg-slate-400 col-span-2 row-span-2">
          <h1 className="font-bebas text-7xl">03</h1>
          <h2>We're here to stay.</h2>  
        </div>
        <div className="bg-slate-400">
          <h1 className="font-bebas text-7xl">05</h1>
          <h2>Get in touch.</h2>  
        </div> */}
      </div>
    </div>
    // <>
    //   <div className="bg-slate-500 text-slate-100 z-50 mx-5 px-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 py-20 rounded-xl" data-aos="fade-up">
    //     <h1 className="font-bebas text-slate-300 text-7xl mb-10">Roadmap.</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    //       <div className="roadmap-piece" data-aos="fade-up">
    //         <h2 className="font-bebas text-5xl w-1/2 mb-5">01 First launch.</h2>
    //         <p>- Hit 100k community members before first launch.</p>
    //         <p>- Launching the first 10k collection.</p>
    //       </div>
    //       {/* <div className="spacing"></div>
    //       <div className="spacing"></div> */}
    //       <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="50">
    //         <h2 className="font-bebas text-5xl w-1/2 mb-5">02 The clock&apos;s ticking.</h2>
    //         <p>- Finding the most suitable Metaverse for our project.</p>
    //         <p>- Monthly airdrops for our holders.</p>
    //         <p>- Setting up the staking platform.</p>
    //         </div>
    //       <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="100">
    //         <h2 className="font-bebas text-5xl w-1/2 mb-5">03 We&apos;re in.</h2>
    //         <p>- Joining the Metaverse.</p>
    //         <p>- Launching the $POSTERITY coin on the Ethereum Blockchain.</p>
    //       </div>
    //       {/* <div className="spacing"></div>
    //       <div className="spacing"></div> */}
    //       <div className="roadmap-piece"  data-aos="fade-up" data-aos-delay="150">
    //         <h2 className="font-bebas text-5xl w-1/2 mb-5">04 We&apos;re here to stay.</h2>
    //         <p>To be announced.</p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

export default Roadmap