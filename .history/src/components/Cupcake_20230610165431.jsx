import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
function Cupcake() {
  return (
    <div className={classes.container}>
      <Nav />
      <div className={classes.content}>
        <div className={classes.info}>
          <h1 className={classes.cupcake__title}>
            Welcome to 
            {\n}The Candy Shop..
          </h1>
          <h2 className={classes.cupcake__subtitle}>
            Indulge your taste buds and satisfy your sweet tooth at our
            brand-new online candy shop! We cordially invite you to experience a
            world of confectionery delights like never before.
          </h2>
        </div>
        <div className={classes.cupcake}>img</div>
      </div>
    </div>
  );
}

export default Cupcake;
