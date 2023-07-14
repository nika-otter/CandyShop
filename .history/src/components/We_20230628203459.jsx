import { Canvas } from "@react-three/fiber";

import classes from "./We.module.scss";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Cube from "./3djsx/Cube";
import Cube3d from "./Cube3d";
function We() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Cube3d />
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
