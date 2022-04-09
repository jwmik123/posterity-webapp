import React from 'react'

import { filterData } from '../assets/data/filterData';

function Filter() {
    filterData.map((elem, i) => {
        console.log(elem.title)
    })
  return (
    <div className="pt-24 -mt-24 mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 md:pb-20 lg:pb-0">
        <h1 className="text-4xl text-gray font-staat">Filter</h1>
        <div>
            { filterData.map((elem, i) => {
                <div key={elem.id} className="text-gray text-2xl">
                   <h1>{elem.title}</h1>
                </div>
            }) }
        </div>
    </div>
  )
}

export default Filter