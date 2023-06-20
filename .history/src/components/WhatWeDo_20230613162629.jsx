import classes from "./WhatWeDo.module.scss";
function WhatWeDo() {
  let data = ["cake", "cupcake", "cookies", "macaron", "cakepops"];
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {data.map((el) => (
          <h2>{{ el }}</h2>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
