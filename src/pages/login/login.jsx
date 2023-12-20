import React from "react";
import BackToListImg from "../../assets/Button/googleLogin.svg";
import volunmateImg from "../../assets/Logo/volunmate2.svg";
import "./login.css";



function Login() {
  return (
    <div className="Containner1-login">
      <div className="Containner2-login">
        <div className="Containner4-login">
          <p className="introduction">
            집 앞에서 하는 내가 원하는 봉사,
          </p>
          <img src={volunmateImg} alt="Volunmate Logo"></img>
        </div>

        <div className="Containner3-login"></div>
        <img src={BackToListImg} alt="" className="volunmateImg"></img>
      </div>
    </div>
  );
}

export default Login;
