// import logo from "../src/assets/logo.svg";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import SmallBus from "../../../assets/Main/SmallBus.png";
import "./styles.css";

function MainDate(props) {
  return (
    <div>
      <h1 className="main-h2">이용 날짜를 선택해주세요</h1>
      <p className="main-span">
        부정 예약을 막기 위해 <br />
        예약 가능 일정을 3일로 제한하고 있어요!
      </p>
      <button className="small-button" id="selected-button">
        오늘 <br /> 1.23
      </button>
      <button className="small-button" id="selected-button">
        내일 <br /> 1.24
      </button>
      <button className="small-button" id="selected-button">
        내일 모레 <br /> 1.25
      </button>
    </div>
  );
}

export default MainDate;
