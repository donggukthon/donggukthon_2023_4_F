import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";

function MainHome() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.UserInfoContainer>
        <S.UserNameFont>이름</S.UserNameFont>
        <S.TempBox>
          <S.TempFont>36.5</S.TempFont>
          <S.TempTitleFont>
            도의 온도로 세상을 따듯하게 만드는중
          </S.TempTitleFont>
        </S.TempBox>
        <S.UserLocationBox>
          <S.LocationIcon /> 내 위치 장충동 왕족발보쌈
        </S.UserLocationBox>
      </S.UserInfoContainer>
      <S.TitleFont>주변에 도움이 필요한 곳📢</S.TitleFont>
      <S.PostContainer>
        <S.HelpContainer>사진포스팅1</S.HelpContainer>
        <S.HelpContainer>사진포스팅2</S.HelpContainer>
        <S.HelpContainer>사진포스팅3</S.HelpContainer>
        <S.HelpContainer>사진포스팅4</S.HelpContainer>
        <S.HelpContainer>사진포스팅5</S.HelpContainer>
      </S.PostContainer>
      <S.TitleFont>내 주변 HOT한 봉사 🔥</S.TitleFont>
      <S.PostContainer>
        <S.HelpContainer>사진포스팅1</S.HelpContainer>
        <S.HelpContainer>사진포스팅2</S.HelpContainer>
        <S.HelpContainer>사진포스팅3</S.HelpContainer>
        <S.HelpContainer>사진포스팅4</S.HelpContainer>
        <S.HelpContainer>사진포스팅5</S.HelpContainer>
      </S.PostContainer>
    </S.Container>
  );
}

export default MainHome;
