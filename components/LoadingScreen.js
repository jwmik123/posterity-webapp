import React from 'react'
import Lottie from 'lottie-react'

import loader from '../assets/lotties/Posterity-LoadingIcon.json'

function LoadingScreen() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-6 bg-ketic">
        <Lottie className="w-44 h-44" animationData={loader} />
        <h1 className="font-staat text-3xl text-gray">Loading...</h1>
    </div>
  )
}

export default LoadingScreen