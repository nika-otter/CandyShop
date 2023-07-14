import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Spheree from "./3djsx/Spheree";

const Sphere3d = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Spheree />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default Sphere3d;
