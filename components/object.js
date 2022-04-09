import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/TheWatchSite.gltf");

  const [smallHand, setSmallHand] = useState(0);
  const [bigHand, setBigHand] = useState(0);
  const [secondHand, setSecondHand] = useState(0);

  // Get the current date.
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let hr_rotation, min_rotation, sec_rotation, radianHr, radianMin, radianSec;

  // Converting the degree scale to the radian scale.
  function degrees_to_radians(degrees) {
    const pi = Math.PI;
    return degrees * (pi/180);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Converting current time to 360 degree scale
      hr_rotation = -(30 * hours + minutes / 2) - 50; 
      min_rotation = -(6 * minutes) - 306;
      sec_rotation = (6 * seconds) - 30;

      radianHr = degrees_to_radians(hr_rotation);
      radianMin = degrees_to_radians(min_rotation);
      radianSec = degrees_to_radians(sec_rotation);

      //Set the state for each hand.
      setSmallHand(radianHr);
      setBigHand(radianMin);
      setSecondHand(radianSec);
    }, 1000)

    // We have to clear the interval in order for the hands to update correctly
    return () => clearInterval(interval);
  })

  useFrame(({ clock }) => {
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
          name="Logo"
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={nodes.Logo.material}
          position={[-0.000186, 0.000023, 0.000068]}
          scale={0.490183}
          userData={{ name: "Logo" }}
        />
        <mesh
          name="Case"
          castShadow
          receiveShadow
          geometry={nodes.Case.geometry}
          material={nodes.Case.material}
          userData={{ name: "Case" }}
        />
        <mesh
          name="CaseCon"
          castShadow
          receiveShadow
          geometry={nodes.CaseCon.geometry}
          material={nodes.CaseCon.material}
          userData={{ name: "CaseCon" }}
        />
        <mesh
          name="Bottom"
          castShadow
          receiveShadow
          geometry={nodes.Bottom.geometry}
          material={materials.RoseGold}
          position={[0, -0.006147, 0]}
          scale={0.838996}
          userData={{ name: "Bottom" }}
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
          name="12"
          castShadow
          receiveShadow
          geometry={nodes["12"].geometry}
          material={nodes["12"].material}
          position={[0, -0.001681, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "12" }}
        />
        <mesh
          name="1"
          castShadow
          receiveShadow
          geometry={nodes["1"].geometry}
          material={nodes["1"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, -Math.PI / 6, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "1" }}
        />
        <mesh
          name="2"
          castShadow
          receiveShadow
          geometry={nodes["2"].geometry}
          material={nodes["2"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, -Math.PI / 3, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "2" }}
        />
        <mesh
          name="3"
          castShadow
          receiveShadow
          geometry={nodes["3"].geometry}
          material={nodes["3"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "3" }}
        />
        <mesh
          name="4"
          castShadow
          receiveShadow
          geometry={nodes["4"].geometry}
          material={nodes["4"].material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "4" }}
        />
        <mesh
          name="5"
          castShadow
          receiveShadow
          geometry={nodes["5"].geometry}
          material={nodes["5"].material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, -Math.PI / 6, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "5" }}
        />
        <mesh
          name="6"
          castShadow
          receiveShadow
          geometry={nodes["6"].geometry}
          material={nodes["6"].material}
          position={[0, -0.001681, 0]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "6" }}
        />
        <mesh
          name="7"
          castShadow
          receiveShadow
          geometry={nodes["7"].geometry}
          material={nodes["7"].material}
          position={[0, -0.001681, 0]}
          rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "7" }}
        />
        <mesh
          name="8"
          castShadow
          receiveShadow
          geometry={nodes["8"].geometry}
          material={nodes["8"].material}
          position={[0, -0.001681, 0]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "8" }}
        />
        <mesh
          name="9"
          castShadow
          receiveShadow
          geometry={nodes["9"].geometry}
          material={nodes["9"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "9" }}
        />
        <mesh
          name="10"
          castShadow
          receiveShadow
          geometry={nodes["10"].geometry}
          material={nodes["10"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "10" }}
        />
        <mesh
          name="11"
          castShadow
          receiveShadow
          geometry={nodes["11"].geometry}
          material={nodes["11"].material}
          position={[0, -0.001681, 0]}
          rotation={[0, Math.PI / 6, 0]}
          scale={[0.003314, 0.003314, 0.005239]}
          userData={{ name: "11" }}
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
  );
}

useGLTF.preload("/TheWatchSite.gltf");