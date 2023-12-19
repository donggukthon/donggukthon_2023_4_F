import React from "react";
import { S, F } from "./style";
import Calendar from "../../components/Recruit/Calendar/Calendar";

function RecruitForm() {
  return (
    <S.Container>
      <S.CardBox>
        <div>
          <F.ColoredFormFont>봉사활동 기간</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={true} />
        <div>
          <F.ColoredFormFont>신청 마감 일자</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={false} />
        <div>
          <F.ColoredFormFont>활동 인원</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        <F.CalendarDiv />
        <div>
          <F.ColoredFormFont>활동 장소</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        <F.CalendarDiv />
        <F.CalendarDiv />
        <div>
          <F.ColoredFormFont>제목</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <F.CalendarDiv />
      </S.CardBox>
    </S.Container>
  );
}

export default RecruitForm;
