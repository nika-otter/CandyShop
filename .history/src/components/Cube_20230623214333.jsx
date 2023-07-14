import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
