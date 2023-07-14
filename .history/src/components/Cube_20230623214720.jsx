import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
