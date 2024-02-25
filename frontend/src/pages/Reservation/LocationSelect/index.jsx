import SelectWay from "../../../components/Reservation/LocationSelect/SelectWay";
import { Link } from "react-router-dom";
import "./styles.css";

function LocationSelect() {
  return (
    <div>
      <SelectWay></SelectWay>
      <div className="center-location">
        <Link to="/reservation-time" className="next-button">
          다음
        </Link>
      </div>
      <div className="center-location">
        <Link to="/reservation-location" className="next-button" id="no-select">
          원하는 노선이 없어요!
        </Link>
      </div>
    </div>
  );
}

export default LocationSelect;
