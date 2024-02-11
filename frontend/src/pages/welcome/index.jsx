import logo from "../../assets/welcome/main.png";
import team from "../../assets/welcome/c2ri.png";
import copy from "../../assets/welcome/001.png";
import kakaoLogin from "../../assets/welcome/kakaoLogin.png";
import googleLogin from "../../assets/welcome/googleLogin.png";
import "./styles.css";

function welcome() {
  return (
    <div className="Welcome">
      <div className="fadeout">
        <img className="main-logo" alt="iPhone_01" src={copy} />
        <img className="main-logo" alt="iPhone_01" src={logo} />
        <img className="team-logo" alt="iPhone_01" src={team} />
      </div>

      <div className="fadein">
        <img className="main-logo" alt="iPhone_01" src={copy} />
        <div className="login-module">
          <button>
            <img className="login" alt="iPhone_01" src={kakaoLogin} />
          </button>
          <button>
            <img className="login" alt="iPhone_01" src={googleLogin} />
          </button>
          <button>
            <div>로그인 없이 둘러보기</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default welcome;
