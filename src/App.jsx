import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import volunmateLogo from "./assets/Logo/volunmate.svg";
import styled from "styled-components";

function App() {
  const CardImg = styled.img`
    width: 100%;
    height: 120px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Router>
      <Reset />
      <CardImg src={volunmateLogo} />
      <RoutesContainer />
    </Router>
  );
}

function RoutesContainer() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
