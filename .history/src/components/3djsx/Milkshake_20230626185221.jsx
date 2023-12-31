/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 milkshake.gltf --transform
Author: Felix Yadomi (https://sketchfab.com/felixyadomi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-milkshake-3ba52a41b4b248df953684861d9e7a20
Title: Cute milkshake
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/milkshake-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.043, 0]}
        scale={0.043}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 0.043, 0]}
        scale={0.043}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.001, 0.115, 0.012]}
        rotation={[0.414, 0, 0]}
        scale={[0.004, 0.005, 0.004]}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.009, 0.164, 0.061]}
        rotation={[0.845, 0.48, -0.365]}
        scale={0.011}
      />
    </group>
  );
}

useGLTF.preload("/milkshake-transformed.glb");
