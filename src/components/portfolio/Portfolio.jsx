import style from "./Portfolio.module.scss";
import DnD1 from "../../assets/images/DnD1.png";
import ArtBlockBreaker from "../../assets/images/artblockbreaker1.png";
import PigGame from "../../assets/images/piggame.png";
import TechBlog from "../../assets/images/techblog.png";
import WeatherBoard from "../../assets/images/weatherdashboard.png";
import WorkDayScheduler from "../../assets/images/workdayscheduler.png";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.body}>
      <div className={style.title}>
        <h1>Portfolio</h1>
      </div>
      <div className={style["project-container"]}>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={DnD1} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>D&D Character Generator</h4>
              <a
                href="https://github.com/ChgDave/DnD-Character-Generator"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={ArtBlockBreaker} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Art Block Breaker</h4>
              <a
                href="https://github.com/ChgDave/art-block-breaker"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={PigGame} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Pig Game</h4>
              <a
                href="https://github.com/ChgDave/Pig-Game"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>{" "}
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={TechBlog} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>The Tech Blog</h4>
              <a
                href="https://github.com/ChgDave/CMS-Blog"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={WeatherBoard} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Weather Dash Board</h4>
              <a
                href="https://github.com/ChgDave/Weather-Dashboard"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={WorkDayScheduler} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Work Day Scheduler</h4>
              <a
                href="https://github.com/ChgDave/Work-Day-Scheduler"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
