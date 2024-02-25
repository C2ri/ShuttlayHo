// import logo from "../src/assets/logo.svg";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import SmallBus from "../../../assets/Main/SmallBus.png";
import "./styles.css";

function MainRoute() {
  return (
    <div>
      <h1 className="main-h1">출퇴근 노선을 선택해주세요</h1>
      <div className="bus-way-button">
        <div className="route-link-button">
          <button className="big-button" id="selected-button">
            출근
            <div>
              <img src={SmallBus} alt="" className="small-bus" />
            </div>
          </button>
        </div>

        <div className="route-link-button">
          <button className="big-button" id="selected-button">
            퇴근
            <div>
              <img src={SmallBus} alt="" className="small-bus" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainRoute;
