import style from "./Portfolio.module.scss";
import DnD1 from "../../assets/images/DnD1.png";
import ArtBlockBreaker from "../../assets/images/artblockbreaker1.png";
import PigGame from "../../assets/images/piggame.png";
import TechBlog from "../../assets/images/techblog.png";
import WeatherBoard from "../../assets/images/weatherdashboard.png";
import WorkDayScheduler from "../../assets/images/workdayscheduler.png";

export default function Portfolio() {
  return (
    <div className={style.body}>
      <div className={style.title}>
        <h1>Portfolio</h1>
      </div>
      <div className={style["project-container"]}>
        <div>
          <img src={DnD1} />
        </div>
        <div>
          <img src={ArtBlockBreaker} />
        </div>
        <div>
          <img src={PigGame} />
        </div>
        <div>
          <img src={TechBlog} />
        </div>
        <div>
          <img src={WeatherBoard} />
        </div>
        <div>
          <img src={WorkDayScheduler} />
        </div>
      </div>
    </div>
  );
}
