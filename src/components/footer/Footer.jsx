import "./footer.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/ChgDave">
          <FaGithub style={{ color: "lightblue" }} size={40} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/hailong-zhou/">
          <FaLinkedin style={{ color: "lightblue" }} size={40} />
        </a>
      </div>
    </div>
  );
}
