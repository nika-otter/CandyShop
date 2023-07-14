import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
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
            <PerspectiveCamera makeDefault position={[0, 0, 2]} />
            <color attach="background" args={["pink"]} />
            <Text fontSize={3} color="#555">
              sugar
            </Text>
          </RenderTexture>
        </mesh>
      </Canvas>
    </>
  );
};

export default Cube;
