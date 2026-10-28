// /* CSS */

// .progress-bar-component-tabs {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }

// .progress-bar-component-add-button {
//   width: 100px;
//   background-color: #5893ff;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   border-radius: 8px;
//   padding: 6px;
//   margin-bottom: 10px;
// }

// .progress-bar {
//   width: 100%;
//   height: 20px;
//   background-color: #e0e0e0;
//   border-radius: 4px;
// }

// .progress-bar-fill {
//   width: 0%;
//   height: 100%;
//   border-radius: 4px;
//   background-color: #4caf50;
//   animation: fillProgress 4000ms linear forwards;
// }

// @keyframes fillProgress {
//   from {
//     width: 0%;
//   }
//   to {
//     width: 100%;
//   }
// }

import React, { useEffect, useState } from "react";

const ProgressBarComponent = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill"></div>
    </div>
  );
}

const ProgressBar = () => {
  const [progressBars, setProgressBars] = useState([])

  const handleAddProgressBar = () => {
    setProgressBars([...progressBars, Date.now().toString()])
  }
  return (
    <div className="progress-bar-component">
      <div className="progress-bar-component-tabs">
        <button className="progress-bar-component-add-button" onClick={() => handleAddProgressBar()}>Add +</button>
        {progressBars.map((progressBar, index) => {
          return <ProgressBarComponent key={progressBar} />
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
