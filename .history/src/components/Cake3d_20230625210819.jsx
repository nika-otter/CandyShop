import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cake from "./3djsx/Cake";
const Cube = () => {
  return (
    <Canvas>
      <Cake />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Cube;
