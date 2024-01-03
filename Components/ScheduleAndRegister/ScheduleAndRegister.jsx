import "./ScheduleAndRegister.css";
import Registration from "../Registration/Registration";
import Schedule from "../../src/assets/CyberTEA-Schedule of the Workshop.jpg";

const NewsSchedule = () => {
  return (
    <div id="NewsSchedule">
      <div id="schedule">
        <div className="NewsSchedule-header">
          <h1>Schedule</h1>
        </div>
        <div className="NewsSchedule-body">
          <img src={Schedule} />
        </div>
      </div>
      <div id="news">
        <Registration />
      </div>
    </div>
  );
};

export default NewsSchedule;
