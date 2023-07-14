import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "./3djsx/Sphere";

const Sphere3d = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere />
    </Canvas>
  );
};

export default Sphere3d;
