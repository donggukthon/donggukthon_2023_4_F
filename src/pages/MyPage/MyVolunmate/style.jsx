import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 98px;
  background-color: #f3fffa;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  fond-size: 22px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.span`
  color: #9ed2be;
  font-weight: bold;
`;

const Divider = styled.hr`
  border = none;
  height: 1px;
  background-color: #000000;

  margin: 20px 0;
`;

export const Style = {
  Container,
  Header,
  Heading,
  Content,
  Highlight,
  Divider,
};
