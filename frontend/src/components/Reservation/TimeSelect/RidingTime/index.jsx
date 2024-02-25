import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { InputHTMLAttributes, ChangeEvent } from "react";
import "./styles.css";

function RidingTime() {
  const times = [
    { text: "7:40 ~ 8:00", value: 0, seats: "14" },
    { text: "8:40 ~ 9:00", value: 1, seats: "12" },
    { text: "9:40 ~ 10:00", value: 2, seats: "25" },
  ];
  const [selectedFruit, setSelectedFruit] = useState(null);
  const onChangeRadio = (e) => {
    setSelectedFruit(Number(e.target.value));
  };
  return (
    <div className="riding">
      <h1>원하는 도착 시간을 선택해주세요</h1>
      <div>
        {times.map((time, idx) => (
          <div className="radio-box">
            <label key={idx}>
              <div>
                <input
                  type="radio"
                  name="times"
                  value={time.value}
                  onChange={onChangeRadio}
                  checked={idx === selectedFruit}
                />
                <span className="fruit">{time.text}</span>
              </div>
            </label>
            <div className="remain-seats">
              <p className="remain-p">잔여 좌석</p>
              <p className="remain-p">{time.seats} / 34</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RidingTime;
