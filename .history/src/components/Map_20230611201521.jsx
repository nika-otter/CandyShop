import classes from "./Map.module.scss";
import MapChart from "./MapChart";
function Map() {
  return (
    <div className={classes.container}>
      <MapChart />
    </div>
  );
}

export default Map;
