import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/TheWatchSite.gltf");

  const glass = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    thickness: 0.1,
  })

  const [smallHand, setSmallHand] = useState(0);
  const [bigHand, setBigHand] = useState(0);
  const [secondHand, setSecondHand] = useState(0);

  useEffect(() => {
    // Get the current date.
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const interval = setInterval(() => {
      // Converting current time to 360 degree scale
      let hr_rotation = -(30 * hours + minutes / 2); 
      let min_rotation = -(6 * minutes);
      let sec_rotation = (6 * seconds) + 180;

      let radianHr = degrees_to_radians(hr_rotation);
      let radianMin = degrees_to_radians(min_rotation);
      let radianSec = degrees_to_radians(sec_rotation);

      //Set the state for each hand.
      setSmallHand(radianHr);
      setBigHand(radianMin);
      setSecondHand(radianSec);
    }, 1000)

    // Converting the degree scale to the radian scale.
    function degrees_to_radians(degrees) {
      const pi = Math.PI;
      return degrees * (pi/180);
    }

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

    <group scale={75} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty"
          rotation={[0, 0.19635, 0]}
          scale={[0.490183, 0.490183, 0.490183]}
          userData={{ name: "Empty" }}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-0.000186, 0.000023, 0.000068]}
          scale={0.490183}
          userData={{ name: "Cube" }}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.RoseGold}
          scale={0.490183}
          userData={{ name: "Cylinder" }}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          userData={{ name: "Cylinder.001" }}
        />
        <group
          name="BigHand"
          position={[0, 0.000717, 0]}
          rotation={[0, bigHand, 0]}
          scale={0.490183}
          userData={{ name: "BigHand" }}
        >
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={nodes.Plane002.material}
          />
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={nodes.Plane002_1.material}
          />
        </group>
        <group
          name="SmallHand"
          position={[0, 0.000717, 0]}
          rotation={[0, smallHand, 0]}
          scale={0.490183}
          userData={{ name: "SmallHand" }}
        >
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={nodes.Plane009.material}
          />
          <mesh
            name="Plane009_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={nodes.Plane009_1.material}
          />
        </group>
        <mesh
          name="SecondHand"
          castShadow
          receiveShadow
          geometry={nodes.SecondHand.geometry}
          material={nodes.SecondHand.material}
          position={[0, 0.000717, 0]}
          rotation={[-Math.PI, secondHand, Math.PI]}
          scale={0.490183}
          userData={{ name: "SecondHand" }}
        />
        <mesh
          name="MidPoint"
          castShadow
          receiveShadow
          geometry={nodes.MidPoint.geometry}
          material={nodes.MidPoint.material}
          position={[0, 0.000717, 0]}
          scale={0.490183}
          userData={{ name: "MidPoint" }}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          userData={{ name: "Cylinder.003" }}
        />
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[0, -0.001681, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text" }}
        >
          <mesh
            name="Text001"
            castShadow
            receiveShadow
            geometry={nodes.Text001.geometry}
            material={nodes.Text001.material}
            rotation={[0, -0.539633, 0]}
            scale={[0.921987, 1, 1.172444]}
            userData={{ name: "Text.001" }}
          />
        </mesh>
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={nodes.Text002.material}
          position={[0, -0.001681, 0]}
          rotation={[0, -Math.PI / 3, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.002" }}
        />
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={nodes.Text003.material}
          position={[0, -0.001681, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.003" }}
        />
        <mesh
          name="Text004"
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={nodes.Text004.material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.004" }}
        />
        <mesh
          name="Text005"
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={nodes.Text005.material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, -Math.PI / 6, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.005" }}
        />
        <mesh
          name="Text006"
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={nodes.Text006.material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.006" }}
        />
        <mesh
          name="Text007"
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={nodes.Text007.material}
          position={[0, -0.001681, 0]}
          rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.007" }}
        />
        <mesh
          name="Text008"
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={nodes.Text008.material}
          position={[0, -0.001681, 0]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.008" }}
        />
        <mesh
          name="Text009"
          castShadow
          receiveShadow
          geometry={nodes.Text009.geometry}
          material={nodes.Text009.material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.009" }}
        />
        <mesh
          name="Text010"
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={nodes.Text010.material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.010" }}
        />
        <mesh
          name="Text011"
          castShadow
          receiveShadow
          geometry={nodes.Text011.geometry}
          material={nodes.Text011.material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 6, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "Text.011" }}
        />
        <mesh
          name="Wheel2"
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={nodes.Wheel2.material}
          scale={0.490183}
          userData={{ name: "Wheel2" }}
        />
        <mesh
          name="Dial2"
          castShadow
          receiveShadow
          geometry={nodes.Dial2.geometry}
          material={materials.Sapphire}
          position={[0, 0.000084, 0]}
          scale={0.490183}
          userData={{ name: "Dial2" }}
        />
      </group>
    </group>
    // THE REAL DEAL!
    // <group scale={35} ref={group} {...props} dispose={null}>
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
  );
}

useGLTF.preload("/TheWatchSite.gltf");