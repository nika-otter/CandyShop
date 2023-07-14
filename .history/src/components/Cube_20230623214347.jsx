import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
