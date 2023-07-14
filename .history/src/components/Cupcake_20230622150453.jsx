import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
function Cupcake() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Nav />
        <div className={classes.helper}>
          <div className={classes.content}>
            <div className={classes.info}>
              <span className={classes.cupcake__title}>
                Welcome to
                <br />
                The Candy Shop..
              </span>
              <p className={classes.cupcake__subtitle}>
                Indulge your taste buds and satisfy your sweet tooth at our
                brand-new online candy shop! We cordially invite you to
                experience a world of confectionery delights like never before.
              </p>
              <button className={classes.cupcake__button}>
                See our Products
              </button>
            </div>
            <div className={classes.cupcake}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/165/502/original/3d-pink-cupcake-transparent-background-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cupcake;