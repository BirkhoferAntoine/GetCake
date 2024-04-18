/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t -T C:\Users\abrka\PhpstormProjects\GetCake\public\models\cake_1_-_maison_alyzee\scene.gltf -o C:\Users\abrka\PhpstormProjects\GetCake\src\components\models\cake_1_-_maison_alyzee\Model.tsx 
Files: C:\Users\abrka\PhpstormProjects\GetCake\public\models\cake_1_-_maison_alyzee\scene.gltf [5.02KB] > C:\Users\abrka\PhpstormProjects\GetCake\src\components\models\cake_1_-_maison_alyzee\scene-transformed.glb [306.06KB] (-5997%)
Author: emm (https://sketchfab.com/edemaistre)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cake-1-maison-alyzee-c01b7abbedfa4e49bd25f14c4b2a756a
Title: Cake #1 - Maison Alyzée
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    material_1: THREE.MeshBasicMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/cake_1_-_maison_alyzee/scene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_1} rotation={[-Math.PI / 2, 0, 0]}  scale={4.5}/>
    </group>
  )
}

useGLTF.preload('/models/cake_1_-_maison_alyzee/scene-transformed.glb')