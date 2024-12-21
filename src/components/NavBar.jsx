import { Link } from "react-router";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default NavBar;
