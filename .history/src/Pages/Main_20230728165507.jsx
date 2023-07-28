import Cupcake from "../components/Cupcake";
import Map from "../components/Map";
// import Reviews from "../components/Reviews";
import We from "../components/We";
import WhatWeDo from "../components/WhatWeDo";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.container}>
      <Cupcake />
      <We />
      <WhatWeDo />
      {/* <Reviews /> */}
      <Map />
    </div>
  );
}

export default Main;
