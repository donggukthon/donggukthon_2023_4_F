import React from "react";
import { S, P, M } from "./style";
import RecruitCard from "../../components/Recruit/RecruitCard.jsx";
import { useNavigate } from "react-router-dom";

function RecruitPost() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate(`/recruitForm`);
  };
  return (
    <S.Container>
      <P.PostImg />
      <P.PostContainer>
        {/* 모집자 정보 들어갈 곳 */}
        <P.PostUserSection>
          <S.BoldFont>김온도</S.BoldFont>
          <S.LightFont>1 일전 | 매너온도: 30 도</S.LightFont>
        </P.PostUserSection>
        <P.Hr />
        {/* 봉사 제목 들어갈 곳 */}
        <P.PostUserSection>
          <S.BoldFont>목도리 뜨기 봉사 하실 분</S.BoldFont>
        </P.PostUserSection>
        <P.Hr />
        {/* 모집, 봉사기간과 장소가 들어갈 곳 */}
        <P.PostUserSection>
          <P.PostFont>모집 마감까지?</P.PostFont>
          <p> 3명 남았어요</p>
          <p> 2일 남았어요</p>
          <P.PostFont>봉사 기간</P.PostFont>
          <p>2023-12-02 부터 2023-12-02 까지</p>
          <p>0일동안 진행 예정</p>
          <P.PostFont>봉사 장소</P.PostFont>
          <p>서울특별시 중구 필동</p>
          <P.GoogleMapImg />
        </P.PostUserSection>
        <P.Hr />
        <P.PostUserSection>
          <P.PostTextArea>
            언제 어디서 하는 봉사입니다 ㄴ sd S
            ㅁㄴㅁㄴㅇㅁㄴ어무졍ㅁㅈ우ㅏㅁ누어무너우머누어ㅜㅁ너ㅜㅁ넝ㅇ
          </P.PostTextArea>
        </P.PostUserSection>
        {/* 이건 글쓴이만 볼 수 있게 해야 함 */}
        <M.RowBox>
          <p>수정</p>
          <p>삭제</p>
        </M.RowBox>
      </P.PostContainer>
      <P.ApplyButton onClick={goToForm} />
    </S.Container>
  );
}

export default RecruitPost;
