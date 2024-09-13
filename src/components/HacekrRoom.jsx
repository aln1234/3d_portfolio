import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker_room.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={21.2766}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Final_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/hacker_room.gltf");

export default HackerRoom;
