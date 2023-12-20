import styled from "styled-components";
import location from "../../assets/Icon/location.svg";
import clock from "../../assets/Icon/clock.svg";
import finRecruiting from "../../assets/Button/mini/finRecruiting.svg";
import recruiting from "../../assets/Button/mini/recruiting.svg";

const HelpContainer = styled.div`
  width: 137px;
  height: 165px;
  border-radius: 5px;
  border: 1px solid #a9afb3;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImg = styled.img`
  width: 106px;
  height: 75px;
  border: 1px solid #a9afb3;
`;

const VariBox = styled.div`
  display: flex;
  flex-direction: row;
  witdh: 106px;
`;

const TitleBox = styled.div`
  width: 117px;
  height: 15px;
  flex-shrink: 0;
`;

const TitleFont = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FinishedRecru = styled.img.attrs({
  src: finRecruiting,
})`
  width: 49px;
  height: 16px;
`;

const InRecru = styled.img.attrs({
  src: recruiting,
})`
  width: 49px;
  height: 16px;
`;

export const S = {
  HelpContainer,
  CardImg,
  VariBox,
  TitleBox,
  TitleFont,
  FinishedRecru,
  InRecru,
};
