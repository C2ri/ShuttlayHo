import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/welcome/main.png";
import team from "../../assets/welcome/c2ri.png";
import copy from "../../assets/welcome/001.png";
import kakaoLogin from "../../assets/welcome/kakaoLogin.png";
import googleLogin from "../../assets/welcome/googleLogin.png";
import "./styles.css";

function welcome() {
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
      <div className="login-module">
        <div className="login-button">
          <img className="login" alt="iPhone_01" src={kakaoLogin} />
        </div>
        <div className="login-button">
          <img className="login" alt="iPhone_01" src={googleLogin} />
        </div>
        <div className="login-button">
          <Link to="/" className="login">
            <div className="login" id="no-login">
              로그인 없이 둘러보기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default welcome;
