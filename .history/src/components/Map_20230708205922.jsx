import classes from "./Map.module.scss";
import MapChart from "./MapChart";
function Map() {
  return (
    <section id="location" className={classes.container}>
      <MapChart />
    </section>
  );
}

export default Map;
