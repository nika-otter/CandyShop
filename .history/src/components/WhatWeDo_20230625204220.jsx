import classes from "./WhatWeDo.module.scss";
function WhatWeDo() {
  let data = ["cake", "ice cream", "cupcake", "milkshake", "cookies"];
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.titles}>
          {data.map((el) => (
            <span className={classes.title} text={el}>
              {el}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default WhatWeDo;
