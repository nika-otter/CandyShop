import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
