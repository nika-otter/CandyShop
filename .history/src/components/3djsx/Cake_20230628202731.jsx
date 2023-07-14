/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 cake.gltf --transform
Author: Sakthivel G (https://sketchfab.com/velsakthi562)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/birthday-cake-29eb6a4e7bf8403fb05cc2495bfc2dd9
Title: Birthday Cake
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cake-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.pSphere550_1001_0.geometry}
        material={materials["1001"]}
        position={[-0.006, 0.012, -0.006]}
        rotation={[-Math.PI, 0.698, -Math.PI]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.pCylinder5_1002_0.geometry}
        material={materials["1002"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.pCylinder3_1003_0.geometry}
        material={materials["1003"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.pCylinder29_1004_0.geometry}
        material={materials["1004"]}
        position={[0, 0.038, 0]}
        scale={0.012}
      />
      <mesh
        geometry={nodes.Candle_1005_0.geometry}
        material={materials["1005"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Candle_1006_0.geometry}
        material={materials["1006"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/cake-transformed.glb");
