import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Spheree = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]}>
          <MeshDistortMaterial
            color="#ffb9c5"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/165/502/original/3d-pink-cupcake-transparent-background-png.png"
          alt=""
        />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default Spheree;
