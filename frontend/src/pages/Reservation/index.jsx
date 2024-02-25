// import logo from "../src/assets/logo.svg";
import { Link } from "react-router-dom";
import MainSelect from "../../components/Main/Select";
import MainDate from "../../components/Reservation/MainDate";
import MainRoute from "../../components/Reservation/MainRoute";
import "./styles.css";

function Reservation() {
  return (
    <div>
      <MainRoute></MainRoute>
      <MainDate></MainDate>
      <div className="center">
        <Link to="/reservation-location" className="next-button">
          다음
        </Link>
      </div>
    </div>
  );
}

export default Reservation;
