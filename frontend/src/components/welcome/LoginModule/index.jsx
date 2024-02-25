import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import KakaoLogin from "../../../assets/Welcome/KakaoLogin.png";
import GoogleLogin from "../../../assets/Welcome/GoogleLogin.png";
import { loginApi } from "../../../apis/Welcome";
import "./styles.css";
import "../../../styles/common.css";
import axios from "axios";
import React, { state, useState } from "react";

function LoginModule() {
  state = {
    computers: [],
  };

  function componentDidMount() {
    axios.get(`/test`).then((res) => {
      const computers = res.data;
      console.log(computers);
    });
  }
  return (
    <div className="fade-in">
      <div className="login-module">
        <div className="login-button" onClick={loginApi}>
          <img className="login" alt="Kakao Login" src={KakaoLogin} />
        </div>
        <div className="login-button" onClick={componentDidMount}>
          <img className="login" alt="Google Login" src={GoogleLogin} />
        </div>
        <div className="login-button" onClick={loginApi}>
          <Link to="/" className="next-button">
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
