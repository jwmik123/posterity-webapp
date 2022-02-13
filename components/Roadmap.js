import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className="px-10 md:px-20 py-20 bg-gradient-to-r from-rose-900 to-rose-700 text-slate-100 z-50">
        <h1 className="text-7xl font-bebas" data-aos="fade-up">Roadmap</h1>
        <div className="flex flex-col border-l-4 border-l-rose-400 pl-10 mt-10">
          <div className="py-14"  data-aos="fade-up">
            <h2 className="text-5xl pb-4">01 // Launch 1st NFT collection</h2>
            <h3 className="text-3xl"></h3>
            <p>This is the first part of the roadmap.</p>
          </div>
          <div className="py-14" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-5xl pb-4">02 // Launch 1st NFT collection</h2>
            <p>This is the second part of the roadmap.</p>
          </div>
         <div className="py-14" data-aos="fade-up" data-aos-delay="150">
           <h2 className="text-5xl pb-4">03 // Launch 1st NFT collection</h2>
           <p>This is the third part of the roadmap.</p>
           </div>
         <div className="py-14" data-aos="fade-up" data-aos-delay="200">
           <h2 className="text-5xl pb-4">04 // Launch 1st NFT collection</h2>
           <p>This is the fourth part of the roadmap.</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap