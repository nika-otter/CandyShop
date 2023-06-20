import classes from "./Cupcake.module.scss";
import Header from "./Header";
function Cupcake() {
  return (
    <div className={classes.container}>
      <Header />
      Cupcake
    </div>
  );
}

export default Cupcake;
