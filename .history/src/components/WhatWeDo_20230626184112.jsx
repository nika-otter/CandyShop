import { useState } from "react";
import Cake3d from "./Cake3d";
import Cupcake3d from "./Cupcake3d";
import classes from "./WhatWeDo.module.scss";
import IceCream3d from "./IceCream3d";
function WhatWeDo() {
  let data = ["cake", "ice cream", "cupcake", "milkshake", "cookies"];
  const [work, setWork] = useState("cake");
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
        ) : work === "ice cream" ? (
          <></>
        ) : (
          <Cupcake3d />
        )}
      </div>
    </div>
  );
}

export default WhatWeDo;
