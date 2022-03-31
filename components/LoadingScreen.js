import React from 'react'
import Lottie from 'lottie-react'

import loader from '../assets/lotties/Posterity-LoadingIcon.json'

function LoadingScreen() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-ketic">
        <Lottie className="w-64 h-64" animationData={loader} />
    </div>
  )
}

export default LoadingScreen