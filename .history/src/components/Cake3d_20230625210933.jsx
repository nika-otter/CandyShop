import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cake from "./3djsx/Cake.jsx";
const Cake3d = () => {
  return (
    <Canvas>
      <Cake />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Cake3d;
