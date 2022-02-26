import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  // const { nodes, materials } = useGLTF("/compressedFirstWatch9.gltf");
  const { nodes, materials } = useGLTF("/watch12.gltf");

  const glass = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    thickness: 0.1,
  })

  const [smallHand, setSmallHand] = useState(0);
  const [bigHand, setBigHand] = useState(0);
  const [secondHand, setSecondHand] = useState(0);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    function degrees_to_radians(degrees) {
      const pi = Math.PI;
      return degrees * (pi/180);
    }

    const interval = setInterval(() => {
      // Converting current time to 360 degree scale
      let hr_rotation = -(30 * hours + minutes / 2); 
      let min_rotation = -(6 * minutes);
      let sec_rotation = (6 * seconds) + 180;

      let radianHr = degrees_to_radians(hr_rotation);
      let radianMin = degrees_to_radians(min_rotation);
      let radianSec = degrees_to_radians(sec_rotation);

      setSmallHand(radianHr);
      setBigHand(radianMin);
      setSecondHand(radianSec);
    }, 1000)

    // We have to clear the interval in order for the hands to update correctly
    return () => clearInterval(interval);
  })

  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    group.current.rotation.x = Math.PI / 1.75 + Math.cos(a / 4) / 8;
    group.current.rotation.y = Math.sin(a / 4) / 8;
    group.current.rotation.z = (1 + Math.sin(a / 1.5)) / 20;
    group.current.position.y = (1 + Math.sin(a / 1.5)) / 10;
  })
  return (
    // <group scale={45} ref={group} {...props} dispose={null}>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Wheel.geometry}
    //     material={nodes.Wheel.material}
    //     position={[0.05359986, 0.00167413, 0]}
    //     rotation={[40, 0, -Math.PI / 2]}
    //     scale={0.81800431}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Markings.geometry}
    //     material={nodes.Markings.material}
    //     position={[0, 0.01411833, -0.04028187]}
    //     scale={[0.00061711, 0.00044144, 0.0035175]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Dial_1.geometry}
    //     material={materials.Dial}
    //     position={[0, 0.00252606, 0]}
    //     scale={0.04486918}
    //   />

    //   {/* seconds hand */}
    //   <group
    //     position={[0, 0.00383926, 0]}
    //     rotation={[-Math.PI, secondHand, Math.PI]}
    //     scale={-0.00139732}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane004.geometry}
    //       material={nodes.Plane004.material}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane004_1.geometry}
    //       material={nodes.Plane004_1.material}
    //     />
    //   </group>

    //   {/* Minutes hand */}
    //   <group
    //     rotation={[0, bigHand, 0]}
    //     scale={[-0.00115023, -0.00115023, -0.01864257]}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane002.geometry}
    //       material={nodes.Plane002.material}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane002_1.geometry}
    //       material={nodes.Plane002_1.material}
    //     />
    //   </group>

    //   {/* Hours hand */}
    //   <group
    //     rotation={[0, smallHand, 0]}
    //     scale={[0.00127337, 0.00127337, 0.01301787]}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane003.geometry}
    //       material={nodes.Plane003.material}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Plane003_1.geometry}
    //       material={nodes.Plane003_1.material}
    //     />
    //   </group>

    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Dial_Wave.geometry}
    //     material={materials["Dial Wave"]}
    //     position={[0, 0.0216997, 0]}
    //     scale={-0.03296192}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Case_2.geometry}
    //     material={nodes.Case_2.material}
    //     scale={0.05066706}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Case_1.geometry}
    //     material={nodes.Case_1.material}
    //   />
    // </group>
    <group scale={45} ref={group} {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Case_1.geometry}
      material={nodes.Case_1.material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Case_2.geometry}
      material={nodes.Case_2.material}
      scale={0.0507}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wheel.geometry}
      material={nodes.Wheel.material}
      position={[0.0536, 0.0017, 0]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={0.818}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Markings.geometry}
      material={nodes.Markings.material}
      position={[0, 0.0141, -0.0403]}
      scale={[0.0006, 0.0004, 0.0035]}
    />
    <group
      position={[0, 0.0038, 0]}
      rotation={[-Math.PI, secondHand, -Math.PI]}
      scale={-0.0014}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_1.geometry}
        material={nodes.Plane004_1.material}
      />
    </group>
    <group rotation={[0, smallHand, 0]} scale={[0.0013, 0.0013, 0.013]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_1.geometry}
        material={nodes.Plane003_1.material}
      />
    </group>
    <group rotation={[0, bigHand, 0]} scale={[-0.0012, -0.0012, -0.0186]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_1.geometry}
        material={nodes.Plane002_1.material}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Dial_1.geometry}
      material={materials.Dial}
      position={[0, 0.0025, 0]}
      scale={0.0449}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Dial_Wave.geometry}
      material={materials["Dial Wave"]}
      position={[0, 0.0218, 0]}
      scale={-0.033}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Glass.geometry}
      material={glass}
      scale={0.0507}
    />
  </group>
  );
}

// useGLTF.preload("/Watch1.1.gltf.gltf");
useGLTF.preload("/watch12.gltf");