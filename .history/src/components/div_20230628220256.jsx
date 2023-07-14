import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Icecream from "./3djsx/Icecream.jsx";
const IceCream3d = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <Icecream />
        <OrbitControls enableZoom={false} autoRotate />
      </Stage>
    </Canvas>
  );
};

export default IceCream3d;
