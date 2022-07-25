import React from "react";
import "./PersonalReport.css";
import image from "../images/image-jeremy.png";

const PersonalReport = ({ChangeTimeTrack, ListMap}) => {
  return (
    <div className="personalReport">
      <div className="main">
        <img src={image} alt="person" />
        <div className="textContent">
          <h2>Report for</h2>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="timeFrames">
        <ul className="timeFramesList">
          {ListMap()}
          {/* <li onClick={ChangeTimeTrack}>Daily</li>
          <li onClick={ChangeTimeTrack}>Weekly</li>
          <li onClick={ChangeTimeTrack}>Montly</li> */}
        </ul>
      </div>
    </div>
  );
};

export default PersonalReport;
