import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';


export default function Ship() {
  const { nodes, materials } = useGLTF("/static/Ship.glb");
  const texture_ship = useLoader(TextureLoader, '/static/ship_diffuse.jpg');
  return (
    <group scale={0.001}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.mat0}>
            <meshStandardMaterial color={'brown'}/>
        </mesh>       
    </group>
    //Necesito que me sirvan las texturas aaaaa
  );
}

useGLTF.preload("/static/Ship.glb");