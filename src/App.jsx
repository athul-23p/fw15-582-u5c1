import {useState} from 'react';
import Status from './components/Status';
import './App.css';
function App() {

  const [score,setScore] = useState(76);
  const [wickets,setWicket] = useState(2);
  const [balls,setBalls] = useState(50);
  const handleScoreChange = (val) => {
    if(score>100){
      return;
    }
    setScore(score+val);
  }
  const handleWicketChange = () => {
    if(wickets+1 > 12 || score > 100){
      return;
    }
    setWicket(wickets+1);
  }

  const handleBallsChange = () => {
    if(score > 100){
      return ;

    }
    setBalls(balls + 1)
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wickets
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${Math.floor(balls / 6)}.${balls % 6}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore controls">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleScoreChange(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleScoreChange(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleScoreChange(6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket controls">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handleWicketChange}>Add 1 wicket</button>
      </div>

      <div className="addBall controls">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={handleBallsChange}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      {score > 100 && <Status />}
    </div>
  );
}

export default App;
