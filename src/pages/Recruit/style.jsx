import styled from "styled-components";
import volunmateLogo from "../../assets/Logo/volunmate.svg";

const Container = styled.div``;

const Logo = styled.img.attrs({
  src: volunmateLogo,
})`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const S = {
  Container,
  Logo,
};
