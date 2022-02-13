import React from 'react'
import {Html, useProgress} from "@react-three/drei";
const Loader = () => {
  // const {progress, loaded} = useProgress();
  return (
    <>
    <Html center><div className="h-5 w-5 animate-spin">-</div></Html>
    </>
    
  )
}

export default Loader