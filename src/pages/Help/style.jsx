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

export const S = {
    Container,
    HelpTitleBox,
    BoldFont,
    LightFont,
    WriteButton
};
