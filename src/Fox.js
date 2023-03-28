import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Fox() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/Fox.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group scale={0.05}
    position={[0, -1, -2]}>
      <group>
        <group name="root">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Fox.glb");




