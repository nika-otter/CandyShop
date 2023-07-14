import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Cube from "./3djsx/Cube";
function Cube3d() {
  return (
    <>
      {/* <div className={classes.block}> */}
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Cube3d;
