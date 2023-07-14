import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
