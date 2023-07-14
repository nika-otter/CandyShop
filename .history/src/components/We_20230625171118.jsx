import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import classes from "./We.module.scss";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
function We() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.block}>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className={classes.info}>
          <h1>What we are</h1>
          <h4>
            At our candy shop, we take pride in using only the finest natural
            and eco-friendly ingredients. From organic cane sugar to sustainably
            sourced cocoa beans, we prioritize ingredients that are free from
            artificial additives and promote a healthier, more environmentally
            conscious indulgence in our delectable treats.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default We;
