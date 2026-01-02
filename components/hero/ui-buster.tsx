"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { OrbitControls, type PerspectiveCameraProps, Plane } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { linearInterpolate } from "@/lib/linear-interpolate";
import Box from "./box";
import { cn } from "@/lib/utils";


const Hero = dynamic(() => import("./hero"), { ssr: false });

export interface Mouse {
  x: number;
  y: number;
}

const lookAtPos = new THREE.Vector3();

type CameraProps = PerspectiveCameraProps;
const Camera = (props: CameraProps) => {
  const { set } = useThree();
  const [sideView] = useState(false);

  const cameraRef = useRef<$TSFixme>(null);
  const controlsRef = useRef<$TSFixme>(null);

  useEffect(() => set(cameraRef.current), [set]);
  useFrame(({ camera }) => {
    if (sideView) {
      camera.position.x = linearInterpolate(camera.position.x, -0.2, 0.1);
      camera.position.y = linearInterpolate(camera.position.y, 1, 0.1);
      camera.position.z = linearInterpolate(camera.position.z, 2.3, 0.1);
      controlsRef.current.enablePan = false;
      controlsRef.current.enableZoom = false;

      lookAtPos.x = linearInterpolate(lookAtPos.x, 1.2, 0.1);
      lookAtPos.y = linearInterpolate(lookAtPos.y, -0.4, 0.1);
      lookAtPos.z = linearInterpolate(lookAtPos.z, -1, 0.1);
    } else {
      camera.position.x = linearInterpolate(camera.position.x, -0.8, 0.1);
      camera.position.y = linearInterpolate(camera.position.y, 1, 0.1);
      camera.position.z = linearInterpolate(camera.position.z, 2.7, 0.1);

      controlsRef.current.enablePan = true;
      controlsRef.current.enableZoom = true;

      lookAtPos.x = linearInterpolate(lookAtPos.x, 0, 0.1);
      lookAtPos.y = linearInterpolate(lookAtPos.y, 0, 0.1);
      lookAtPos.z = linearInterpolate(lookAtPos.z, 0, 0.1);
    }
    camera.lookAt(lookAtPos);
    camera.updateMatrixWorld();
  });

  const handleControlUpdate = (e: unknown) => {
    console.log("control update", e);
  };

  return (
    <>
      <perspectiveCamera ref={cameraRef} {...props} />
      <OrbitControls
        ref={controlsRef}
        // eslint-disable-next-line react-hooks/refs
        camera={cameraRef.current}
        onUpdate={handleControlUpdate}
      />
    </>
  );
};

const Scene = ({ mouse }: { mouse: Mouse }) => {
  return (
    <>
      <hemisphereLight args={[0xffffff, 0xffffff]} intensity={0.4} />

      <directionalLight
        intensity={1}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-darkness={0.5}
        position={[-1, 2, 1]}
      />

      <pointLight intensity={0.2} position={[-30, 30, 50]} color="#94dcdd" />
      <pointLight intensity={2.5} position={[-10, 0, -20]} color="red" />
      <pointLight intensity={2} position={[10, 0, -20]} color="skyblue" />
      <pointLight intensity={1.5} position={[0, -10, 0]} color="#fef1be" />

      {/* <Box position={[-1, -0.5, 0]} castShadow receiveShadow /> */}
      {/* <Box position={[1, -0.5, 0]} castShadow receiveShadow /> */}
      <Hero mouse={mouse} />
      {/* <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
      >
        <shadowMaterial
          attach="material"
          color="#e0dacd"
          transparent
          opacity={0.4}
        />
      </Plane> */}
    </>
  );
};

const UIBuster = ({
  className
}: {
  className?: string;
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      className={cn("bg-transparent", className)}
      id="quill-nest-hero"
      shadows
      style={{ width: "300px", height: "300px" }}
    >
      <Camera position={[0, 2, 3]} zoom={1} />
      <fog attach="fog" args={["#ecf4f3", 0, 40]} />
      <Scene mouse={mouse} />
    </Canvas>
  );
};

export default UIBuster;
