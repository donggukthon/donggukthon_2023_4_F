import React from "react";
import "./loginError.css";
import errorImg from "../../assets/Icon/error.svg";

function LoginError() {
    return (
        <div className="errorBox">
            <img src={errorImg} alt="error Img" className="errorLogo" />
            <p className="message">
                에러 메시지 <br></br><br></br>다시 입력해주세요!
            </p>
            <div className="confirmButton">확인</div>
        </div>
    );
}

export default LoginError;