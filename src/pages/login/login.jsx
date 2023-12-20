import styled from "styled-components";
import React from "react";
import BackToListImg from "../../assets/Button/googleLogin.svg";
import vollumateImg from "../../assets/Logo/volunmate2.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* 두 요소 간의 상단 여백 조절 */
`;

const BackToListBtn = styled.button`
  /* 리스트로 돌아가기 */
  width: 390px;
  height: 240px;
  background: url(${BackToListImg}) no-repeat center/247px 40px;
  border: transparent;
  margin-bottom: 10px;

  @media (min-width: 768px) {
  }
`;

const VollumateImg = styled.img`
  /* Vollumate 이미지 스타일 조정 */
  width: 260px;
  height: auto;
  margin-top: 20px;
  align-items: center;
`;

function Login() {
    return (
        <Container>
            <VollumateImg src={vollumateImg} alt="Volunmate Logo" />
            <BackToListBtn></BackToListBtn>
        </Container>
    );
}

export default Login;
