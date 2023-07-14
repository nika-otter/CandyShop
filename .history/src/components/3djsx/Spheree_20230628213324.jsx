import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Spheree = () => {
  return (
    <Sphere args={[1, 100, 200]}>
      <MeshDistortMaterial
        color="#ffb9c5"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

export default Spheree;
