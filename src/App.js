import React, { useRef, useEffect } from "react";
import Theme from "./Theme";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import TestLP from "./Pages/WWW";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/test" exact component={TestLP} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
