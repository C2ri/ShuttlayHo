import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import KakaoLogin from "../../../assets/Welcome/KakaoLogin.png";
import GoogleLogin from "../../../assets/Welcome/GoogleLogin.png";
import { loginApi } from "../../../apis/Welcome";
import "./styles.css";

function LoginModule() {
  return (
    <div className="fade-in">
      <div className="login-module">
        <div className="login-button" onClick={loginApi}>
          <img className="login" alt="Kakao Login" src={KakaoLogin} />
        </div>
        <div className="login-button" onClick={loginApi}>
          <img className="login" alt="Google Login" src={GoogleLogin} />
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
