import React from 'react'

const ShowTimer = (props) => {
    let {hour,minute,second,handlePause,handleReset,handleResume,ispaused}=props;
  return (
    <div>
      <div className="show-container">
          <div className="timer-box">
            <div>{hour < 10 ? `0${hour}` : hour}</div>
            <span>:</span>
            <div>{minute < 10 ? `0${minute}` : minute}</div>
            <span>:</span>
            <div>{second < 10 ? `0${second}` : second}</div>
          </div>
          <div className="action-box">
            {!ispaused && (
              <div className="timer-button" onClick={handlePause}>
                Pause
              </div>
            )}
            {ispaused && (
              <div className="timer-button" onClick={handleResume}>
                Resume
              </div>
            )}

            <div className="timer-button" onClick={handleReset}>
              Reset
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShowTimer
