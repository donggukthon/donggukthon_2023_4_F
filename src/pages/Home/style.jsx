import styled from "styled-components";
import location from "../../assets/Icon/location.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 341px;
  height: 159px;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid #a9afb3;
`;

const TitleFont = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserNameFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TempTitleFont = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TempFont = styled(TempTitleFont)`
  color: #fa7070;
`;

const TempBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserLocationBox = styled.div`
  width: 311px;
  height: 46px;
  border-radius: 5px;
  background: #9ed2be;
`;

const LocationIcon = styled.img.attrs({
  src: location,
})`
  width: 10px;
  height: 10px;
`;

const HelpContainer = styled.div`
  width: 137px;
  height: 165px;
  border-radius: 5px;
  border: 1px solid #a9afb3;

  background: #fff;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  white-space: nowrap; // 이 부분을 추가
  height: 167px;
  width: 400px; // 필요한 경우 너비 조정
`;

export const S = {
  UserInfoContainer,
  Container,
  UserLocationBox,
  UserNameFont,
  TempTitleFont,
  TempFont,
  TempBox,
  LocationIcon,
  TitleFont,
  HelpContainer,
  PostContainer,
};
