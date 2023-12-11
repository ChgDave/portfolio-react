import "./footer.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <FaGithub style={{ color: "lightblue" }} size={40} />
      </div>
      <div>
        <FaLinkedin style={{ color: "lightblue" }} size={40} />
      </div>
    </div>
  );
}
