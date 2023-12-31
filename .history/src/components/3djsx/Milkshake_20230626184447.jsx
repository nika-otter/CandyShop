/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 milkshake.gltf --transformke.gltf
Author: StormyChalice (https://sketchfab.com/StormyChalice)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/strawberry-drink-2f9045ee1bd641eba6f78f86de6b61ae
Title: Strawberry Drink
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/milkshake.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Table} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Straw} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Pink} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Green} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Pink_Drink} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Stawberry} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Stawberry} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Strawberry_Inside} />
      </group>
    </group>
  )
}

useGLTF.preload('/milkshake.gltf')
