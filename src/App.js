import PersonalReport from './components/PersonalReport';
import './App.css';

import data from './data/data.json'
import ReportTitles from './components/ReportTitles';

function App() {
  return (
    <div className="App">
      <PersonalReport />

      {data.map(frame => (<ReportTitles title={frame.title} timeFrame={frame.timeframes.daily.current} timeFramePrev={frame.timeframes.daily.previous}/>))}
      
      
    </div>
  );
}

export default App;
