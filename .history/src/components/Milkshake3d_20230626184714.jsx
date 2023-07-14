import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Milkshake from "./3djsx/Milkshake.jsx";
const Milkshake3d = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <Milkshake />
        <OrbitControls enableZoom={false} autoRotate />
      </Stage>
    </Canvas>
  );
};

export default Milkshake3d;
