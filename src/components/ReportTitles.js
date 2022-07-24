import React from "react";
import "./ReportTitle.css";
import dots from "../images/icon-ellipsis.svg";

const ReportTitles = ({ title, timeFrame, timeFramePrev }) => {
  //dinamic return a className to especify css class acording with title
  const classShow = (title) => {
    switch (title) {
      case "Work":
        return "topArt Work";
      case "Play":
        return "topArt Play";
      case "Study":
        return "topArt Study";
      case "Exercise":
        return "topArt Exercise";
      case "Social":
        return "topArt Social";
      case "Self Care":
        return "topArt SelfCare";
      default:
        return "";
    }
  };

  const classColorShow = (title) => {
    switch (title) {
      case "Work":
        return "reportTitles Work-color";
      case "Play":
        return "reportTitles Play-color";
      case "Study":
        return "reportTitles Study-color";
      case "Exercise":
        return "reportTitles Exercise-color";
      case "Social":
        return "reportTitles Social-color";
      case "Self Care":
        return "reportTitles SelfCare-color";
      default:
        return "";
    }
  };

  return (
    <div className={classColorShow(title)}>
      <div className={classShow(title)}>
        {/* <img src={Work} alt="work" className="iconHeader" /> */}
      </div>

      <div className="sumary">
        <div className="leftSpot">
          <h2>{title}</h2>
          <h1>{timeFrame}Hrs</h1>
        </div>
        <div className="rigthSpot">
          {/* put a dinamic render to verify if daily, weekly or montly */}
          <img src={dots} alt="dots" />
          <p>last week - {timeFramePrev} hrs</p>
        </div>
      </div>
    </div>
  );
};

export default ReportTitles;
