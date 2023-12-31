import React from "react";
import { S } from "./style";
import volunmateLogo from "../../assets/Logo/volunmate.svg";

function HelpCard() {
    return (
        <S.CardContainer>
            <S.CardImg src="../../src/assets/img/helpcard1.png" />
            <S.TextContainer>
                <S.BoldFont>우리 집 앞에 눈이 쌓였어요.</S.BoldFont>
                <S.LightFont>봉자 일자 | 2023. 12. 20</S.LightFont>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    <S.LocationIcon />
                    서울특별시 중구 장충동
                </p>
                <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    <S.ClockIcon />
                    4시간 전
                </p>
            </S.TextContainer>
            <S.TemperContainer>
                <S.HurryImg src="../../src/assets/img/hurry.png" />
                급해요</S.TemperContainer>
        </S.CardContainer>
    );
}
export default HelpCard;