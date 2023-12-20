import React from "react";
//import backImg from "../../assets/button/back.svg";
import crtLocImg from "../../assets/button/currentLocation.svg";
import retryButton from "../../assets/button/retry.svg";
import locationIcon from "../../assets/Icon/location2.svg";
import saveButton from "../../assets/button/save.svg";
import "./modify.css"; // CSS 파일 import

function Modify() {

    return (
        <div className="Containner1-modify">
            {/*<img src={backImg} alt="Back Img" className="back-img" />
            <img src={volunmateImg} alt="Volunmate Logo" className="volunmate-img" />*/}
            <div className="Containner2-modify">
                <div className="Containner6-modify">
                    <p className="styled-paragraph">이름</p>
                </div>
                <input type="text" placeholder="   김온도" />
            </div>
            <div className="Containner2-modify">
                <div className="Containner6-modify">
                    <p className="styled-paragraph">카카오톡 아이디</p>
                </div>
                <input type="text" placeholder="    dgu1234" />
            </div>
            <div className="Containner3-modify">
                <div className="Containner5-modify">
                    <p className="styled-paragraph">설정된 위치</p>
                </div>
                <div className="address">
                    <img src={locationIcon}></img>서울특별시 중구 장충동 1가
                </div>
            </div>
            <div className="Containner4-modify">
                <div className="Containner5-modify">
                    <p className="styled-paragraph">위치 수정하기</p>
                    <img src={retryButton}></img>
                </div>
                <img src={crtLocImg} alt="Location Set Button"></img>
            </div>
            <div className="Containner7-modify">
                <img src={saveButton} alt="Save Logo" />
            </div>

        </div>
    );
}

export default Modify;