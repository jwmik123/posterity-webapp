import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className="px-10 md:px-20 py-20 bg-slate-300 text-slate-900 z-50">
        <h1 className="text-7xl font-bebas">Roadmap</h1>
        <div className="flex gap-10 border-b-4 border-b-slate-900">
          <div className="py-14">
          <h2 className="text-5xl pb-4">01</h2>
          <p>This is the first part of the roadmap.</p>
          </div>
         <div className="py-14">
           <h2 className="text-5xl pb-4">02</h2>
           <p>This is the second part of the roadmap.</p>
           </div>
         <div className="py-14">
           <h2 className="text-5xl pb-4">03</h2>
           <p>This is the third part of the roadmap.</p>
           </div>
         <div className="py-14">
           <h2 className="text-5xl pb-4">04</h2>
           <p>This is the fourth part of the roadmap.</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap