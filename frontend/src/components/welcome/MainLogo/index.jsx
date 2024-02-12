import logo from "../../../assets/welcome/main.png";
import copy from "../../../assets/welcome/001.png";
import "./styles.css";

function MainLogo() {
  return (
    <div className="fadein">
      <div>
        <img className="main-copy" src={copy} alt="" />
      </div>
      <div className="sub-copy">
        <p>더 간편하게 이용하는 출퇴근 셔틀버스</p>
      </div>
      <div className="logo">
        <img className="main-logo" alt="iPhone_01" src={logo} />
      </div>
    </div>
  );
}

export default MainLogo;
