import React from "react";
import { S } from "./style";
import volunmateLogo from "../../assets/Logo/volunmate.svg";

function HelpCard() {
    return (
        <S.CardContainer>
            <S.CardImg />
            <S.TextContainer>
                <S.BoldFont>목도리 뜨기 봉사 팀원 모집</S.BoldFont>
                <S.LightFont>봉자 일자 | 2023. 11. 13</S.LightFont>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    <S.LocationIcon />
                    서울특별시 중구 장충동
                </p>
                <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    <S.ClockIcon />
                    4시간 전
                </p>
            </S.TextContainer>
            <S.TemperContainer>급해요</S.TemperContainer>
        </S.CardContainer>
    );
}
export default HelpCard;