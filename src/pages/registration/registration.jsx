// Registration.jsx

import React from "react";
import volunmateImg from "../../assets/Logo/volunmate.svg";
import signinImg from "../../assets/button/signIn.svg";
import backImg from "../../assets/button/back.svg";
import "./registration.css"; // CSS 파일 import

function Registration() {

    return (
        <div className="container">
            <img src={backImg} alt="Back Img" className="back-img" />
            <img src={volunmateImg} alt="Volunmate Logo" className="volunmate-img" />
            <p className="styled-paragraph">이름을 입력해주세요</p>
            <input type="text" placeholder="전체 이름 입력" />
            <p className="styled-paragraph">카카오톡 아이디를 입력해주세요</p>
            <input type="text" placeholder="본인의 카카오톡 아이디만 작성" />
            <img src={signinImg} alt="Signin Logo" />
        </div>
    );
}

export default Registration;





