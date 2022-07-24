import React from "react";
import "./ReportTitle.css";
import dots from "../images/icon-ellipsis.svg";

const ReportTitles = ({ title, timeFrame, timeFramePrev }) => {

    //dinamic return a className to especify css class acording with title
    const classShow = (title) => {
        switch (title){
            case "Work":
                return "Work";
            case "Play":
                return "Play";
            case "Study":
                return "Study";
            case "Exercise":
                return "Exercise";
            case "Social":
                return "Social";
            case "Self Care":
                return "Self Care";
            default:
                return "";
        }
    }
  return (
    <div className="reportTitles">
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
