import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Spheree from "./3djsx/Spheree";
import classes from "./SphereCupcake.module.scss";

const Sphere3d = () => {
  return (
    <>
      <Spheree />
      <img
        className={classes.cupcake}
        src="https://static.vecteezy.com/system/resources/previews/019/165/502/original/3d-pink-cupcake-transparent-background-png.png"
        alt=""
      />
    </>
  );
};

export default Sphere3d;
