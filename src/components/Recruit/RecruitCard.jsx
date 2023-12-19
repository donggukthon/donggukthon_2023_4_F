import React from "react";
import { S } from "./style";
import volunmateLogo from "../../assets/Logo/volunmate.svg";

function RecruitCard() {
  return (
    <S.CardContainer>
      <S.CardImg src={volunmateLogo} />
      <S.TextContainer>
        <S.BoldFont>목도리 뜨기 봉사 팀원 모집</S.BoldFont>
        <S.LightFont>봉자 일자 | 2023. 11. 13</S.LightFont>
        <p>
          <S.LocationIcon />
          서울특별시 중구 장충동
        </p>
        <p>
          <S.ClockIcon />
          23.11.11 모집 마감
        </p>
      </S.TextContainer>
    </S.CardContainer>
  );
}

export default RecruitCard;
