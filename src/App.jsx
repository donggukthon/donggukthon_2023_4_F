import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";

import volunmateLogo from "./assets/Logo/volunmate.svg";
import backButton from "./assets/Button/backButton.svg";
import Footer from "./components/layout/Footer";

function App() {
  // 얘네 따로 빼두는 폴더 만들 예정입니다.
  const CardImg = styled.div`
    background-image: url(${volunmateLogo});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70px;
    /* position: sticky; */
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const Backbutton = styled.button`
    background-image: url(${backButton});
    background-repeat: no-repeat;
    background-position: center;
    width: 37px;
    height: 37px;
    margin-left: 10px;
  `;
  const RoutesContainerStyled = styled.div`
    margin-bottom: 63px; // Footer 높이보다 약간 더 크게 설정
  `;

  return (
    <Router>
      <Reset />
      {/* Header */}
      <CardImg>
        <Backbutton />
      </CardImg>
      <RoutesContainer />
      <RoutesContainerStyled />
      <Footer />
    </Router>
  );
}

function RoutesContainer() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
