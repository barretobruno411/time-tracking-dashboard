import PersonalReport from "./components/PersonalReport";
import "./App.css";

import data from "./data/data.json";
import ReportTitles from "./components/ReportTitles";
import {useEffect, useState} from 'react';

function App() {

  const timeTrack = [
    {
      name: "Daily",
      selected: false,
    },
    {
      name: "Weekly",
      selected: true,
    },
    {
      name: "Monthly",
      selected: false,
    }
  ];

  const [selected, setSelected] = useState(timeTrack);

  const updateState = (e, item) => {
    setSelected((prev) => prev.map(item => ChangeTimeTrack(e,item)))
  }

  const ChangeTimeTrack = (e, item) => {
    
      if(item.name === e.target.innerHTML){
        item.selected = true;
      } else {
        item.selected = false;
      }
      
      return item;
  }

  const ListMap = () => {
    return selected.map(item => (
      <li className={item.selected ? "active" : ""} onClick={(e)=>{updateState(e, item)}}>{item.name}</li>)
    )
  }

  function renderCards(value){
    return data.map((frame) => (
      <ReportTitles
        title={frame.title}
        timeFrame={frame.timeframes[value].current}
        timeFramePrev={frame.timeframes[value].previous}
      />
    ))
  }

  return (
    <div className="App">

      <div className="container">
      <PersonalReport ListMap={ListMap} ChangeTimeTrack={ChangeTimeTrack}/>
      <div className="cards">
      {selected[0].selected === true && renderCards("daily")}
      {selected[1].selected === true && renderCards("weekly")}
      {selected[2].selected === true && renderCards("monthly")}
      </div>
      </div>
      
      

    </div>
  );
}

export default App;
