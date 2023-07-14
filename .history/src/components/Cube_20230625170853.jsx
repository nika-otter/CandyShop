import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <mesh>
        <boxGeometry args={[2]} />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <color attach="background" args={["#dc9dcd"]} />
            <Text fontSize={1} color="#555">
              sugar
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </Canvas>
  );
};

export default Cube;
