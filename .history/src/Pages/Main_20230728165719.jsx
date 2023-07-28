import Cupcake from "../components/Cupcake";
import Map from "../components/Map";

import We from "../components/We";
import WhatWeDo from "../components/WhatWeDo";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.container}>
      <Cupcake />
      <We />
      <WhatWeDo />

      <Map />
    </div>
  );
}

export default Main;
