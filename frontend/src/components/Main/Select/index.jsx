// import logo from "../src/assets/logo.svg";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import SmallBus from "../../../assets/Main/SmallBus.png";
import "./styles.css";

function MainSelect(props) {
  return (
    <div>
      <h1>어떤 노선을 찾고 계신가요?</h1>
      <div className="bus-way-button">
        <Link to="/route" className="route-link-button">
          <button className="big-button">
            출근
            <div>
              <img src={SmallBus} alt="" className="small-bus" />
            </div>
          </button>
        </Link>

        <Link to="/route" className="route-link-button">
          <button className="big-button">
            퇴근
            <div>
              <img src={SmallBus} alt="" className="small-bus" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainSelect;
