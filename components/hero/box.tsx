"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { Box as DreiBox } from "@react-three/drei";

interface BoxProps extends ComponentProps<typeof DreiBox> {
  color?: string;
  emissive?: string;
}
const Box = forwardRef<BoxProps, any>(({ color, emissive, ...props }, ref) => {
  return (
    <DreiBox {...props} ref={ref as any}>
      {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
      {/* <meshPhongMaterial color={color} emissive="#8ab7d6" specular="#ffffff" /> */}
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        roughness={0}
        metalness={0.1}
      />
      {/* <meshLambertMaterial
        color={color}
        emissive="#8ab7d6"
        roughness={0}
        metalness={0.1}
      /> */}
    </DreiBox>
  );
});

Box.displayName = "Box";
export default Box;
