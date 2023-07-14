import classes from "./CreatorInfo.module.scss";
function CreatorInfo() {
  return (
    <div className={classes.card}>
      <h3>Creator info</h3>
      <div className={classes.link}>
        <img
          src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
          alt=""
        />
        <div>
          <a href="">
            <span>@tiastaa</span>
          </a>
        </div>
      </div>
      <div className={classes.link}>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
        <a href="">
          <span>@nika.otter</span>
        </a>
      </div>
    </div>
  );
}

export default CreatorInfo;
