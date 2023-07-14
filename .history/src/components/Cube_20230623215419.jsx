import { OrbitControls, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
          <RenderTexture attach="map">
            <color attach="background" args={["pink"]} />
            <Text>sugar</Text>
          </RenderTexture>
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
