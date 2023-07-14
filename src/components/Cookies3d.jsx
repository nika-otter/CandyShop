import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cookies from "./3djsx/Cookies.jsx";
const Cookies3d = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <Cookies />
        <OrbitControls enableZoom={false} autoRotate />
      </Stage>
    </Canvas>
  );
};

export default Cookies3d;
