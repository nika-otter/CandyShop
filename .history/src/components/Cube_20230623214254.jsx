import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[5, 5, 5]} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
