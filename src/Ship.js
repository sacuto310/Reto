
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Ship() {
  const { nodes, materials } = useGLTF("/static/Barquito.glb");
  return (
    <group dispose={null} scale={0.01} position={[ 0, -1.1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ship.geometry}
        material={materials["Material.001"]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/static/Barquito.glb");