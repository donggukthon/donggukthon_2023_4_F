// Registration.jsx

import React from "react";
import volunmateImg from "../../assets/Logo/volunmate.svg";
import signinImg from "../../assets/button/signIn.svg";
import backImg from "../../assets/button/back.svg";
import crtLocImg from "../../assets/button/currentLocation.svg";
import retryButton from "../../assets/button/retry.svg";
import locationIcon from "../../assets/Icon/location2.svg";
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
            <p className="styled-paragraph">위치를 설정해주세요</p>
            <p className="stmt">내 주변에서 봉사를 실천할 수 있을 거예요</p>
            <img src={crtLocImg} alt="Location Set Button"></img>

            <p className="styled-paragraph">이 주소가 맞나요?</p>
            <img src={retryButton}></img>
            <div className="address">
                <img src={locationIcon}></img>서울특별시 중구 장충동 1가</div>
            <img src={signinImg} alt="Signin Logo" />
        </div>
    );
}

export default Registration;





