import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import HacekrRoom from "../components/HacekrRoom";

const Hero = () => {
  return (
    <section>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Albin Lamichhane <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Full Stack Developer & Data Scienctist
        </p>
      </div>
      <div>
        <Canvas className="w-full h-full ">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HacekrRoom />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
