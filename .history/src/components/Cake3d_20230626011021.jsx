import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cake from "./3djsx/Cake.jsx";
const Cake3d = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Cake />
        <OrbitControls enableZoom={false} autoRotate />
      </Stage>
    </Canvas>
  );
};

export default Cake3d;
