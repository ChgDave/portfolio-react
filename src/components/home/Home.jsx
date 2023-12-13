// import "../assets/css/main.css";
// import "../assets/css/noscript.css";
// import "../assets/css/fontawesome-all.min.css";
import style from "./Home.module.scss";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <div className={style.body}>
      <div>
        <CgProfile size={60} style={{ color: "lightblue" }} />
        <h1>About me</h1>
      </div>
      <div>
        <header>
          <h2>
            My name is Hailong Zhou
            <br />I am a full stack web developer
          </h2>
          <p>
            I have been a full time electrical engineer for the past 12 years.
            But I have recently started full-stack coding bootcamp at
            Northwestern University. This is my portfolio website where I will
            be adding on all my coding projects. I am looking forward to
            collaborate with industry experts on future projects to learn more
            about coding and explore the limitless potential in technology. You
            can also find my contact in the contact secion if you want to reach
            out to me.
          </p>
        </header>
      </div>
    </div>
  );
}
