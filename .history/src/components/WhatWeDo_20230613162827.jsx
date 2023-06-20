import classes from "./WhatWeDo.module.scss";
function WhatWeDo() {
  let data = ["cake", "cupcake", "cookies", "macaron", "cakepops"];
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.titles}>
          {data.map((el) => (
            <h2 className={classes.title}>{el}</h2>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default WhatWeDo;
