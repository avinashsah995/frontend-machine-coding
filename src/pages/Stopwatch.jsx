import React, { useEffect, useState } from "react";

const StopwatchComponent = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [time, setTime] = useState(0);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handlePlay = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval || null);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-component-item">
      <div className="stopwatch-component-item-time">{formatTime(time)}</div>
      <div className="stopwatch-component-item-buttons">
        <button
          className="stopwatch-component-item-start-button"
          onClick={handleReset}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6680/6680865.png"
            alt="Reset"
            width={16}
            height={16}
          />
        </button>
        {isRunning ? (
          <button
            className="stopwatch-component-item-stop-button"
            onClick={handlePause}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/16/16427.png"
              alt="Pause"
              width={16}
              height={16}
            />
          </button>
        ) : (
          <button
            className="stopwatch-component-item-play-button"
            onClick={handlePlay}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/375.png"
              alt="Play"
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
    </div>
  );
};

const Stopwatch = () => {
  const [stopwatches, setStopwatches] = useState([]);

  const handleAddStopwatch = () => {
    setStopwatches((prevStopwatches) => [
      ...prevStopwatches,
      { id: Date.now() },
    ]);
  };

  const handleRemoveAll = () => {
    setStopwatches([]);
  };

  return (
    <div className="stopwatch-component">
      <div className="stopwatch-component-tabs">
        <div className="stopwatch-component-tabs-header">
          <button
            className="stopwatch-component-add-button"
            onClick={() => handleAddStopwatch()}
          >
            Add Stopwatch +
          </button>

          {stopwatches.length > 0 && (
            <button
              className="stopwatch-component-reset-all-button"
              onClick={() => handleRemoveAll()}
            >
              Remove All
            </button>
          )}
        </div>

        <div className="stopwatch-component-items">
          {stopwatches.map((stopwatch) => (
            <StopwatchComponent key={stopwatch.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
