import { useState } from "react";
import Cake3d from "./Cake3d";
import Cupcake3d from "./Cupcake3d";
import classes from "./WhatWeDo.module.scss";
import IceCream3d from "./IceCream3d";
import Milkshake3d from "./Milkshake3d";
import Cookies3d from "./Cookies3d";
function WhatWeDo() {
  let data = ["cupcake", "ice cream", "cake", "milkshake", "cookies"];
  const [work, setWork] = useState("cupcake");
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.titles}>
          {data.map((el) => (
            <button
              className={classes.title}
              text={el}
              onClick={() => setWork(el)}
            >
              {el}
            </button>
          ))}
        </h1>
        {work === "cake" ? (
          <Cake3d />
        ) : work === "ice cream" ? (
          <IceCream3d />
        ) : work === "milkshake" ? (
          <Milkshake3d />
        ) : work === "cookies" ? (
          <Cookies3d />
        ) : (
          <Cupcake3d />
        )}
      </div>
    </div>
  );
}

export default WhatWeDo;
