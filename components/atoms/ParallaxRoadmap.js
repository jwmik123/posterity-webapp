import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function ParallaxRoadmap() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer sticky={{ start: 1, end: 3 }}>Im sticky</ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1.5}>
          Im not
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1.5}>
          Neither am I
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxRoadmap;
