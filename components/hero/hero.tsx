"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";


import Box from "./box";
import Sphere from "./sphere";
import type { Mouse } from "./ui-buster";
import { linearInterpolate } from "@/lib/linear-interpolate";

type EyeProps = React.ComponentProps<typeof Box>;
const Eye = React.forwardRef<EyeProps, any>(({ ...props }, ref) => {
  return (
    <group {...props}>
      <Box
        args={[0.09, 0.09, 0.05]}
        color="#4c4e4f"
        emissive={null}
        position={[0, 0.28, 0.5]}
        ref={ref as any}
      />
      <Box
        args={[0.15, 0.15, 0.05]}
        color="#ffffff"
        emissive={null}
        position={[0, 0.3, 0.48]}
      />
    </group>
  );
});

Eye.displayName = "Eye";

const Lips = () => {
  return (
    <Box
      args={[0.15, 0.05, 0.05]}
      color="#4c4e4f"
      emissive={null}
      position={[0, 0.25, 0.5]}
    />
  );
};

const Face = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const faceRef = useRef<any>();
  const eyeRefL = useRef<any>();
  const eyeRefR = useRef<any>();
  const { size } = useThree();

  useFrame(() => {
    const H = (mouse.x - size.width / 2) / 200;
    const V = (mouse.y - size.height / 2) / 200;
    const hAngle = Math.min(Math.max(H, -Math.PI / 3), Math.PI / 3);
    const vAngle = Math.min(Math.max(V, -Math.PI / 3), Math.PI / 3);
    if (eyeRefL.current) {
      eyeRefL.current.position.x = -0.0058 + hAngle * 0.0167;
      eyeRefL.current.position.y = 0.3 - vAngle * 0.04;
      // eyeRefL.current.position.z = 0 + hAngle * 0.3
    }
    if (eyeRefR.current) {
      eyeRefR.current.position.x = -0.0058 + hAngle * 0.0167;
      eyeRefR.current.position.y = 0.3 - vAngle * 0.04;
      // eyeRefR.current.position.z = 0 - hAngle * 0.3
    }
  });

  return (
    <group ref={faceRef}>
      <Eye position={[-0.15, 0.1, 0]} ref={eyeRefL} />
      <Eye position={[0.15, 0.1, 0]} ref={eyeRefR} />
      <Lips />
      <Sphere
        position={[0, 0.3, 0]}
        scale={[1, 1, 1]}
        castShadow
        receiveShadow
        color="#f3f3f3"
      />
    </group>
  );
};

interface BodyProps {
  color: string;
}

const Body = ({ color }: BodyProps) => {
  return (
    <>
      {/* <Sphere
        position={[0.2, -0.4, 0]}
        scale={[0.5, 0.5, 0.5]}
        castShadow
        receiveShadow
      />
      <Sphere
        position={[0.3, -0.75, 0]}
        scale={[0.2, 0.2, 0.2]}
        castShadow
        receiveShadow
      /> */}
      {/* Front */}
      {/* <RoundedBox args={[0.5, 0.5, 0.5]} smoothness={5}>
        <meshStandardMaterial
          attach="material"
          color="#ffffff"
          emissive="#8ab7d6"
          roughness={0}
          metalness={0.1}
        />
      </RoundedBox> */}

      <Sphere
        position={[0.28, 0.15, 0.28]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, 0.78, 0]}
        castShadow
        receiveShadow
        color={color}
      />
      <Sphere
        position={[0, 0.15, 0.4]}
        scale={[0.35, 0.55, 0.1]}
        castShadow
        receiveShadow
        color={color}
      />
      <Sphere
        position={[-0.28, 0.15, 0.28]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, -0.78, 0]}
        castShadow
        receiveShadow
        color={color}
      />
      {/* Right */}
      <Sphere
        position={[0.39, 0.15, 0]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, -1.57, 0]}
        castShadow
        receiveShadow
        color={color}
      />

      {/* Back */}
      <Sphere
        position={[0.28, 0.15, -0.28]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, -0.78, 0]}
        castShadow
        receiveShadow
        color={color}
      />
      <Sphere
        position={[0, 0.15, -0.4]}
        scale={[0.35, 0.55, 0.1]}
        castShadow
        receiveShadow
        color={color}
      />
      <Sphere
        position={[-0.28, 0.15, -0.28]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, 0.78, 0]}
        castShadow
        receiveShadow
        color={color}
      />
      {/* Left */}
      <Sphere
        position={[-0.39, 0.15, 0]}
        scale={[0.35, 0.55, 0.1]}
        rotation={[0, 1.57, 0]}
        castShadow
        receiveShadow
        color={color}
      />
    </>
  );
};

interface HeroProps {
  mouse: Mouse;
}
const Hero = ({ mouse }: HeroProps) => {
  const { size } = useThree();
  const heroRef = useRef<any>();

  // Scale hero based on canvas size to fill viewport
  const scale = Math.min(size.width, size.height) / 200;

  useFrame((state) => {
    // const pos = {
    //   x: ((mouse.x - size.left) / size.width) * 2 - 1,
    //   y: -((mouse.y - size.top) / size.height) * 2 + 1,
    // };
    const H = (mouse.x - size.width / 2) / 200;
    const V = (mouse.y - size.height / 2) / 200;
    const hAngle = Math.min(Math.max(H, -Math.PI / 3), Math.PI / 3);
    const vAngle = Math.min(Math.max(V, -Math.PI / 3), Math.PI / 3);

    if (heroRef.current) {
      heroRef.current.rotation.y = linearInterpolate(
        heroRef.current.rotation.y,
        hAngle * 0.1,
        0.1
      );
      heroRef.current.rotation.x = linearInterpolate(
        heroRef.current.rotation.x,
        vAngle * 0.1,
        0.1
      );
      heroRef.current.rotation.z = linearInterpolate(
        heroRef.current.rotation.x,
        -hAngle * 0.1,
        0.1
      );
      heroRef.current.position.y =
        0.1 + Math.sin(state.clock.getElapsedTime() * 0.85) * 0.1;
      // heroRef.current.position.x = linearInterpolate(heroRef.current.position.x, pos.x, 0.1)
      // heroRef.current.position.y = linearInterpolate(heroRef.current.position.y, pos.y, 0.1)
    }
  });

  return (
    <group ref={heroRef} scale={scale}>
      <Face mouse={mouse} />
      <Body color="#f3f3f3" />
    </group>
  );
};

export default Hero;
