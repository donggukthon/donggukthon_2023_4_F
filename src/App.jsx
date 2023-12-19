import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";

import volunmateLogo from "./assets/Logo/volunmate.svg";

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
    justify-content: center;
    align-items: center;
  `;

  const FooterContainer = styled.div`
    width: 100%;
    height: 64px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Router>
      <Reset />
      <CardImg src={volunmateLogo} />
      <RoutesContainer />
      <Footer />
    </Router>
  );
}

function RoutesContainer() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
