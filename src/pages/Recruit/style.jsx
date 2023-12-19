import styled from "styled-components";
import volunmateLogo from "../../assets/Logo/volunmate.svg";
import postWriteBtn from "../../assets/Button/postWrite.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: volunmateLogo,
})`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const RecruitTitleBox = styled.div`
  width: 380px;
  height: 98px;
  background-color: #f3fffa;
  padding-top: 18px;
  padding-left: 20px;
`;

const BoldFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 10px 0;
`;

const LightFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const CardBox = styled.div`
  width: 332px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: skyblue;
  overflow-y: auto;
  position: relative;

  /* overflow-x: auto; */
  /* overflow: auto; */
`;

const WirteButton = styled.button`
  background-image: url(${postWriteBtn});
  width: 296px;
  height: 43px;
`;

export const S = {
  Container,
  Logo,
  RecruitTitleBox,
  BoldFont,
  LightFont,
  CardBox,
  WirteButton,
};
