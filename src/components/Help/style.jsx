import styled from "styled-components";
import location from "../../assets/Icon/location.svg";
import clock from "../../assets/Icon/clock.svg";

// RecruitCard.jsx
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 330px;
  height: 142px;
  /* margin: auto; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const CardImg = styled.img`
  width: 106px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 5px;
  alt:"포스트 카드 이미지";
`;

const HurryImg = styled.img`
  width: 36px;
  height: 35px;
  flex-shrink: 0;
`;

const BoldFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 10px 0;
`;

const LightFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-left: 20px;
`;

const TemperContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  color: #D85B53;
  font-weight: 800;
`;

const LocationIcon = styled.img.attrs({
  src: location,
})`
  width: 10px;
  height: 10px;
`;

const ClockIcon = styled.img.attrs({
  src: clock,
})`
  width: 10px;
  height: 10px;
`;

export const S = {
  Container,
  CardContainer,
  BoldFont,
  LightFont,
  CardImg,
  TextContainer,
  LocationIcon,
  ClockIcon,
  TemperContainer,
  HurryImg
};
