import Cube from "./Cube";
import classes from "./We.module.scss";
function We() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {/* <div className={classes.block}> */}
        <Cube />
        {/* </div> */}
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
