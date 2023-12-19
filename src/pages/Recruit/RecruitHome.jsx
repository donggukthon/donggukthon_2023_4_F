import React from "react";
import { S } from "./style";
import RecruitCard from "../../components/Recruit/RecruitCard.jsx";

function RecruitHome() {
  return (
    <S.Container>
      <S.RecruitTitleBox>
        <S.BoldFont>팀원모집</S.BoldFont>
        <S.LightFont>
          모집 중인 봉사에 참여하고 온도계의 온도를 높여주세요!
        </S.LightFont>
      </S.RecruitTitleBox>
      <S.CardBox>
        <RecruitCard />
        <RecruitCard />
        <RecruitCard />
      </S.CardBox>
    </S.Container>
  );
}

export default RecruitHome;
