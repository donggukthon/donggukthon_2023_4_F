import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <RoutesContainer />
    </Router>
  );
}

function RoutesContainer() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
