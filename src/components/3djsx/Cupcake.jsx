/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 cupcake.gltf --transform
Author: Scritta (https://sketchfab.com/scritta)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-to-download-handpainted-stylized-cupcake-35d7f5a5bec54e8fa1002db547ed060f
Title: Free to download handpainted stylized cupcake
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cupcake-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder_cupcake_mat_0.geometry}
        material={materials.cupcake_mat}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/cupcake-transformed.glb");
