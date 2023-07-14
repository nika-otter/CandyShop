import Cake3d from "./Cake3d";
import Cupcake3d from "./Cupcake3d";
import classes from "./WhatWeDo.module.scss";
function WhatWeDo() {
  let data = ["cake", "ice cream", "cupcake", "milkshake", "cookies"];
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.titles}>
          {data.map((el) => (
            <button className={classes.title} text={el}>
              {el}
            </button>
          ))}
        </h1>
        <Cupcake3d />
      </div>
    </div>
  );
}

export default WhatWeDo;
