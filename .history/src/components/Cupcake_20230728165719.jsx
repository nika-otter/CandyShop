import { Canvas } from "@react-three/fiber";
import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
import { Suspense } from "react";
import { MeshDistortMaterial, OrbitControls, Stage } from "@react-three/drei";

function Cupcake() {
  return (
    <section className={classes.main} id="home">
      <div className={classes.container}>
        <Nav />
        <div className={classes.helper}>
          {/* <div className={classes.content}> */}
          <div className={classes.info}>
            <span className={classes.cupcake__title}>
              Welcome to
              <br />
              The Candy Shop..
            </span>
            <p className={classes.cupcake__subtitle}>
              Indulge your taste buds and satisfy your sweet tooth at our
              brand-new online candy shop! We cordially invite you to experience
              a world of confectionery delights like never before.
            </p>

            <a href="#products">
              <button className={classes.cupcake__button}>
                See our Products
              </button>
            </a>
          </div>

          <img
            className={classes.cupcakeimg}
            src="https://static.vecteezy.com/system/resources/previews/019/165/502/original/3d-pink-cupcake-transparent-background-png.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Cupcake;
