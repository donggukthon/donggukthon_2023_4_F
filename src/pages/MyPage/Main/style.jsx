import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #9ED2BE
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Greeting = styled.p`
  text-align: center;
  color: #black;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const IconImage = styled.img`
  width: 27px;
  height: 27px;
`;

export const Style = {
  Container,
  Greeting,
  Button,
  NameContainer,
  ImageContainer,
  IconImage,
};
