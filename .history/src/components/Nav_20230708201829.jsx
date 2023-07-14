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
        <button>
          <a href="#about">HOME</a>
        </button>
        <button>
          <a href="#about">WE</a>
        </button>
        <button>
          <a href="#about">PRODUCTS</a>
        </button>
        <button>
          <a href="#about">LOCATION</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
