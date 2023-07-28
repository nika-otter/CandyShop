import CreatorInfo from "./CreatorInfo";
import classes from "./Map.module.scss";
import MapChart from "./MapChart";
function Map() {
  return (
    <section id="location" className={classes.main}> </section>
    <div  className={classes.container}>
      <CreatorInfo />
      {/* <MapChart /> */}
    </div>
  );
}

export default Map;
