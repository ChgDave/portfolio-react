import { Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2>Hailong Zhou</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Info</Link>
      </div>
    </nav>
  );
}
