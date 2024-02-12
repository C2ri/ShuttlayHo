import logo from "../../assets/welcome/main.png";
import team from "../../assets/welcome/c2ri.png";
import copy from "../../assets/welcome/001.png";
import kakaoLogin from "../../assets/welcome/kakaoLogin.png";
import googleLogin from "../../assets/welcome/googleLogin.png";
import "./styles.css";

function welcome() {
  return (
    <div className="Welcome">
      <div className="fadein">
        {/* <img className="main-logo" alt="iPhone_01" src={copy} /> */}
        <img className="main-logo" alt="iPhone_01" src={logo} />
      </div>

      <div className="fadein">
        <div className="login-module">
          <div className="login-button">
            <img className="login" alt="iPhone_01" src={kakaoLogin} />
          </div>
          <div className="login-button">
            <img className="login" alt="iPhone_01" src={googleLogin} />
          </div>
          <div className="login-button">
            <div className="login" id="no-login">
              로그인 없이 둘러보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
