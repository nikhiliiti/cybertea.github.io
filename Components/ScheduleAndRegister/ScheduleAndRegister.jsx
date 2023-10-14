import React from "react";
import "./ScheduleAndRegister.css";
import Registration from "../Registration/Registration";

const NewsSchedule = () => {
  return (
    <div id="NewsSchedule">
      <div id="schedule">
        <div className="NewsSchedule-header">
          <h1>Schedule</h1>
        </div>
        <div className="NewsSchedule-body">
          <ul>
            <li>Coming soon...</li>
          </ul>
        </div>
      </div>
      <div id="news">
        <Registration />
      </div>
    </div>
  );
};

export default NewsSchedule;
