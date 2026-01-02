"ues client";

import { Sphere as DreiSphere } from "@react-three/drei";

interface SphereProps extends React.ComponentProps<typeof DreiSphere> {
  color: string;
  emissive?: string;
}
const Sphere = ({ color, emissive = "#8ab7d6", ...props }: SphereProps) => {
  return (
    <DreiSphere args={[0.5, 32, 32]} {...props}>
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        roughness={0}
        metalness={0.1}
      />
    </DreiSphere>
  );
};

export default Sphere;
