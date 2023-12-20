import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import signinImg from "../../assets/button/signIn.svg";
import crtLocImg from "../../assets/button/currentLocation.svg";
import retryButton from "../../assets/button/retry.svg";
import locationIcon from "../../assets/Icon/location2.svg";
import errorImg from "../../assets/Icon/error.svg";
import "./registration.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>,

        document.getElementById("modal-root")
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

function Registration() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달을 열기 위한 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달을 닫기 위한 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Containner1-registration">
            <div id="modal-root"></div>
            <div className="Containner2-registration">
                <div className="Containner6-registration">
                    <p className="styled-paragraph">이름을 입력해주세요</p>
                </div>
                <input type="text" placeholder="    전체 이름 입력" />
            </div>
            <div className="Containner2-registration">
                <div className="Containner6-registration">
                    <p className="styled-paragraph">카카오톡 아이디를 입력해주세요</p>
                </div>
                <input type="text" placeholder="    본인의 카카오톡 아이디만 작성" />
            </div>
            <div className="Containner3-registration">
                <div className="Containner5-registration">
                    <p className="styled-paragraph">위치를 설정해주세요</p>
                </div>
                <div className="Containner5-registration">
                    <p className="stmt">내 주변에서 봉사를 실천할 수 있을 거예요</p>
                </div>
                <img src={crtLocImg} alt="Location Set Button"></img>
            </div>
            <div className="Containner4-registration">
                <div className="Containner5-registration">
                    <p className="styled-paragraph">이 주소가 맞나요?</p>
                    <img src={retryButton}></img>
                </div>
                <div className="address">
                    <img src={locationIcon}></img>&nbsp;&nbsp;서울특별시 중구 장충동 1가</div>
            </div>
            <div className="Containner7-registration" onClick={openModal}>
                <img src={signinImg} alt="Signin Logo" />
            </div>

            {/* 모달 내용 */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="errorBox">
                    <img src={errorImg} alt="error Img" className="errorLogo" />
                    <p className="message">
                        에러 메시지 <br></br>
                        <br></br>다시 입력해주세요!
                    </p>
                    <div className="confirmButton" onClick={closeModal}>
                        확인
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Registration;

