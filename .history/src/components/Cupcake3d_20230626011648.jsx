import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cupcake from "./3djsx/Cupcake.jsx";
const Cupcake3d = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <Cupcake />
        <OrbitControls enableZoom={false} autoRotate />
      </Stage>
    </Canvas>
  );
};

export default Cupcake3d;
