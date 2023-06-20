import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
function Cupcake() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Nav />
        <div className={classes.content}>
          <div className={classes.info}>
            <h1 className={classes.cupcake__title}>
              Welcome to
              <br />
              The Candy Shop..
            </h1>
            <h2 className={classes.cupcake__subtitle}>
              Indulge your taste buds and satisfy your sweet tooth at our
              brand-new online candy shop! We cordially invite you to experience
              a world of confectionery delights like never before.
            </h2>
            <button className={classes.cupcake__button}>
              See our Products
            </button>
          </div>
          <div className={classes.cupcake}>
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/10/Delicious-pink-cupcake-on-transparent-background-PNG.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cupcake;
