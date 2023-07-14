/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 cookies.gltf --transformes
Author: Sujit mishra (https://sketchfab.com/sujitanshumishra)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oreo-cookies-74a009a5a3724552b8f3a711b6d03b21
Title: Oreo cookies
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cookies.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.022, 0]} rotation={[-Math.PI, -0.016, -Math.PI]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.creame} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.creame} />
      </group>
      <group
        position={[0.922, 0.326, -0.013]}
        rotation={[Math.PI, 0.074, -2.807]}
      >
        <mesh geometry={nodes.Object_10.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.brown} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.creame} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.creame} />
      </group>
    </group>
  );
}

useGLTF.preload("/cookies.gltf");