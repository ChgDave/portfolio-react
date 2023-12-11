import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="./index.html">Home</Link>
        </li>
        <li>
          <Link to="#main">About me</Link>
        </li>
        <li>
          <Link to="./resume.html">Resumé</Link>
        </li>
        <li>
          <Link to="#projects">My work</Link>
        </li>
        <li>
          <Link to="#footer">Get in touch</Link>
        </li>
      </ul>
    </nav>
  );
}
