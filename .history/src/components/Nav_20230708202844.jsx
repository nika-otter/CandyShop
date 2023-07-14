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
        <a href="#home">
          <button>HOME </button>
        </a>
        <a href="#we">
          <button>WE</button>
        </a>
        <a href="#products">
          <button>PRODUCTS</button>
        </a>
        <a href="#location">
          <button>LOCATION</button>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
