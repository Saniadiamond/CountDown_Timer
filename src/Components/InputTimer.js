import React from 'react'

const InputTimer = ({HandleInput,handlestartbtn}) => {
  return (
    <div>
      <div className="input-container">
          <div className="input-box">
            <input
              type="text"
              id="hour"
              placeholder="HH"
              onChange={HandleInput}
            />
            <input
              type="text"
              id="minute"
              placeholder="MM"
              onChange={HandleInput}
            />
            <input
              type="text"
              id="second"
              placeholder="SS"
              onChange={HandleInput}
            />
          </div>
          <button className="btn-start" onClick={handlestartbtn}>
            Start
          </button>
        </div>
    </div>
  )
}

export default InputTimer
