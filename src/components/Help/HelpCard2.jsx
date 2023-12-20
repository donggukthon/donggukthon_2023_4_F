import React from "react";
import { S } from "./style";
import volunmateLogo from "../../assets/Logo/volunmate.svg";

function HelpCard2() {
    return (
        <S.CardContainer>
            <S.CardImg src="../../src/assets/img/helpcard2.png" />
            <S.TextContainer>
                <S.BoldFont>강아지 먹이 대신 주실 분</S.BoldFont>
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
        </S.CardContainer>
    );
}
export default HelpCard2;