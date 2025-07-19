import React, { useEffect, useState } from "react";
import "./App.css";
import InputTimer from "./Components/InputTimer";
import ShowTimer from "./Components/ShowTimer";
const Timer = () => {
  let [isstart, setIsstart] = useState(false);
  let [ispaused, setIspaused] = useState(false);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  let [hour, setHour] = useState(0);
  let [timerid, setTimerid] = useState(0);
  let HandleInput = (e) => {
    console.log(e.target.id, e.target.value);
    let value = parseInt(e.target.value);
    let id = e.target.id;
    if (id == "hour") {
      setHour(value);
    } else if (id == "minute") {
      setMinute(value);
    } else {
      setSecond(value);
    }
  };

  let handlestartbtn = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsstart(true);
    }
  };
  let handlePause = () => {
    setIspaused(true);
    clearInterval(timerid);
  };
  let handleResume = () => {
    setIspaused(false);
    runtimer(second, minute, hour);
  };
  let handleReset = () => {
    setIsstart(false);
    ResetTimer();
  };
  let ResetTimer = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(timerid);
  };
  let runtimer = (scnd, min, hor, tid) => {
    if (scnd > 0) {
      setSecond((s) => s - 1);
    } else if (scnd == 0 && min > 0) {
      setMinute((min) => min - 1);
      setSecond(59);
    } else {
      setHour((hor) => hor - 1);
      setSecond(59);
      setMinute(59);
    }
    if (second === 0 && minute === 0 && hour === 0) {
      handleReset();
      alert("Timer is Finished🎡");
      return;
    }
  };
  useEffect(() => {
    let tid;
    if (isstart) {
      tid = setInterval(() => {
        runtimer(second, minute, hour, tid);
      }, 1000);
      setTimerid(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isstart, hour, minute, second]);
  console.log(hour, minute, second);
  return (
    <div className="MainPart">
      <h1>CountDown timer</h1>
      {!isstart && (
        <InputTimer 
        handlestartbtn={handlestartbtn}
        HandleInput={HandleInput}
        />
      )}
      {/* secondpart */}
      {isstart && (
        <ShowTimer
        minute={minute}
        second={second}
        hour={hour}
        ispaused={ispaused}
        handleReset={handleReset}
        handlePause={handlePause}
        handleResume={handleResume}
        />
      )}
    </div>
  );
};

export default Timer;
