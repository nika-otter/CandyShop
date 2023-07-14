import classes from "./Map.module.scss";
import MapChart from "./MapChart";
function Map() {
  return (
    <section className={classes.container}>
      <MapChart />
    </section>
  );
}

export default Map;
