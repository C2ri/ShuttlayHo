import { Link } from "react-router-dom";
import RidingTime from "../../../components/Reservation/TimeSelect/RidingTime";

function TimeSelect() {
  return (
    <div>
      <RidingTime></RidingTime>
      <div className="center-location">
        <Link to="/reservation-seats" className="next-button">
          다음
        </Link>
      </div>
    </div>
  );
}

export default TimeSelect;
