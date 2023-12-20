import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  width: 175px;
  height: 19px;
  font-family: Inter;
  font-weight: 700;
  font-size: 19px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input` 
    width: 325px;
    height: 50px;
    background: #FFFFFF;
    border 1px solid #A9AFB3;
`;

const Button = styled.button`
  width: 298px;
  height: 53.834px;
  border-radius: 17.507px;
  border: 1px solid A9AFB3;
  background-color: #9ed2be;
`;

export const Style = {
  Container,
  Label,
  Input,
  Button,
};
