import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HelpTitleBox = styled.div`
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
  font-weight: 800;
  line-height: normal;
  margin: 0 5px 10px 0;
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
const WriteButton = styled.button`
  width: 296px;
  height: 43px;
  background-color: #FA7070;
  color: white;
  font-weight: 700;
`

const CardBox = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: skyblue;
  overflow-y: scroll;
  border: 1px solid black;
  text-align: left;
  /* position: relative; */

  /* overflow-x: auto; */
  /* overflow: auto; */
`;

const InputTitle = styled.div`
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  text-align: left;
  margin: 50px 10px 0px 10px;
`;

const InputContent = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  margin: 20px 10px 0px 10px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;

const CardContainer = styled.div`

`;

const CardImg = styled.img`
  width: 390px;
  height: 252px;
  flex-shrink: 0;
  alt:"포스트 카드 이미지";
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

const HurryImg = styled.img`
  width: 36px;
  height: 35px;
  flex-shrink: 0;
  padding-right: 30px;
`;

const Address = styled.img`
  width: 138px;
  height: 40px;
  flex-shrink: 0;
  padding-left: 10px;
`;

const HorizontalLine = styled.div`
margin-top: 30px;
width: 380px;
opacity: 0.2;
        height: 0.5px; /* 원하는 높이 설정 */
        background-color: #000; /* 원하는 선의 색상 설정 */
`;

export const S = {
  Container,
  HelpTitleBox,
  BoldFont,
  LightFont,
  WriteButton,
  CardBox,
  InputTitle,
  Input,
  CardContainer,
  CardImg,
  InputContent,
  HurryImg,
  Info,
  Address,
  HorizontalLine
};
