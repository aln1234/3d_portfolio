"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Shapes = () => {
  return (
    <div className="row-span-1 relative row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger className="md:h-[640px] md:w-[640px] h-[100px] w-[100px]">
            <Canvas
              className="z-0"
              shadows
              gl={{ antialias: false }}
              dpr={[1, 1.5]}
              camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
            >
              <Suspense fallback={null}>
                <Geometries />
                <ContactShadows
                  position={[0, -3.5, 0]}
                  opacity={0.65}
                  scale={40}
                  blur={1}
                  far={9}
                />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </TooltipTrigger>
          <TooltipContent className="absolute -bottom-[35rem] -left-[2rem] ">
            <p className="text-2xl text-white  font-bold">Click Me!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Shapes;

function Geometries() {
  const geometries = [
    {
      position: [0, 0, -1],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3.5), // Gem
    },
    {
      position: [1, -1, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
    },
    {
      position: [-1.4, 2, -1],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
    },
    {
      position: [-0.8, -1, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    },
    {
      position: [1.6, 2, -1],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), // Diamond
    },
  ];

  const soundEffects = [
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
    new Audio("/sounds/hit4.ogg"),
    new Audio("/sounds/hit1.ogg"),
    new Audio("/sounds/hit6.ogg"),
    new Audio("/sounds/hit7.ogg"),
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x1289a7, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xffc312, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xee5a24, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x9980fa, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xb53471, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.7,
      color: 0x1b1464,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa3cb38,
      roughness: 0.8,
      metalness: 0.7,
    }),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}
