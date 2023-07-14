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
          <a href="#home">HOME</a>
        </button>
        <button>
          <a href="#we">WE</a>
        </button>
        <button>
          <a href="#products">PRODUCTS</a>
        </button>
        <button>
          <a href="#location">LOCATION</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
