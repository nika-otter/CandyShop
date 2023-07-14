import classes from "./Nav.module.scss";
function Nav() {
  return (
    <nav className={classes.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1888/1888765.png"
        alt=""
      />
      <div>
        {" "}
        <button>HOME</button>
        <button>WE</button>
        <button>PRODUCTS</button>
        <button>MAP</button>
      </div>
    </nav>
  );
}

export default Nav;
