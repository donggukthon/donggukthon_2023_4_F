import React from "react";
import { S, P } from "./style";
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
      <P.PostContainer>냠냠</P.PostContainer>
      <S.WirteButton onClick={goToForm} />
    </S.Container>
  );
}

export default RecruitPost;
