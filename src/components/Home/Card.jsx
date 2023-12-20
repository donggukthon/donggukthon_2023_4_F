import React, { useState, useEffect } from "react";
import { S } from "./style";
import axios from "axios";

function Card({ src, currentNum, fullNum, location, title, isRecruiting }) {
  const [cardNowNum, setCardNowNum] = useState(0);
  const [cardFullNum, setCardFullNum] = useState(0);
  const [cardLocation, setCardLocation] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardState, setCardState] = useState(false);

  useEffect(() => {
    if (currentNum && fullNum) {
      setCardNowNum(currentNum);
      setCardFullNum(fullNum);
    } else {
      setCardNowNum(1);
      setCardFullNum(10);
    }
    if (location) {
      setCardLocation(location);
    } else setCardLocation("왕족발보쌈");
    if (title) {
      setCardTitle(title);
    } else setCardTitle("동국대학교");
    if (isRecruiting) {
      setCardState(isRecruiting);
    } else setCardState(false);
  }, [currentNum, fullNum, location, title]); // 의존성 배열 추가

  const handleLogout = async () => {
    try {
      const res = await axios.post(`/api/team`);

      if (res.httpStatus === 200) {
        alert("성공 되었습니다");
        navigate("/login");
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      alert("실패");
      // 오류 처리 로직...
    }
  };

  return (
    <S.HelpContainer onClick={handleLogout}>
      <S.CardImg src={src} />
      <S.VariBox>
        <p>
          {cardNowNum}/{cardFullNum}
        </p>
        <p>{cardLocation}</p>
      </S.VariBox>
      <S.TitleBox>
        <S.TitleFont>{cardTitle}</S.TitleFont>
      </S.TitleBox>
      {isRecruiting ? <S.InRecru /> : <S.FinishedRecru />}
    </S.HelpContainer>
  );
}

export default Card;
