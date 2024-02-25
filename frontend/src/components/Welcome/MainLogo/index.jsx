import MainChar from "../../../assets/Welcome/MainChar.png";
import MainCopy from "../../../assets/Welcome/MainCopy.png";
import "./styles.css";

function MainLogo() {
  return (
    <div className="fade-in">
      <div>
        <img className="main-copy" src={MainCopy} alt="셔를레이호" />
      </div>
      <div className="sub-copy">
        <p>더 간편하게 이용하는 출퇴근 셔틀버스</p>
      </div>
      <div className="logo">
        <img className="main-logo" alt="셔를레이호 캐릭터" src={MainChar} />
      </div>
    </div>
  );
}

export default MainLogo;
