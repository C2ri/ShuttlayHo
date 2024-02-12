import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import kakaoLogin from "../../../assets/welcome/kakaoLogin.png";
import googleLogin from "../../../assets/welcome/googleLogin.png";
import { loginApi } from "../../../apis/welcome";
import "./styles.css";

function LoginModule() {
  return (
    <div className="fadein">
      <div className="login-module">
        <div className="login-button" onClick={loginApi}>
          <img className="login" alt="iPhone_01" src={kakaoLogin} />
        </div>
        <div className="login-button" onClick={loginApi}>
          <img className="login" alt="iPhone_01" src={googleLogin} />
        </div>
        <div className="login-button" onClick={loginApi}>
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

export default LoginModule;
