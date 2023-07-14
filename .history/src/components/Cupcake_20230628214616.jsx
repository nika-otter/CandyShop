import { Canvas } from "@react-three/fiber";
import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
import { Suspense } from "react";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import Sphere from "./3djsx/Spheree";
import Sphere3d from "./Sphere3d";
function Cupcake() {
  return (
    <div className={classes.main}>
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
            <button className={classes.cupcake__button}>
              See our Products
            </button>
          </div>

          {/* <div className={classes.cupcake}> */}
          {/* <div className={classes.sphere}>
                <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={1.5}>
                      <MeshDistortMaterial
                        color="#ffb9c5"
                        attach="material"
                        distort={0.5}
                        speed={2}
                      />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate />
                  </Suspense>
                </Canvas>
              </div> */}
          <Sphere3d />
          <img
            className={classes.cupcakeimg}
            src="https://static.vecteezy.com/system/resources/previews/019/165/502/original/3d-pink-cupcake-transparent-background-png.png"
            alt=""
          />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cupcake;
