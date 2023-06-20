import classes from "./Cupcake.module.scss";
import Nav from "./Nav";
function Cupcake() {
  return (
    <div className={classes.container}>
      <Nav />
      <div className={classes.cupcake}>
        <div className={classes.cupcake__title}>Cupcake</div>
        <div className={classes.cupcake__subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
      </div>
    </div>
  );
}

export default Cupcake;
