import React, { useRef, useEffect, useState } from "react";
import Theme from "./Theme";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import TestLP from "./Pages/WWW";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import BackDiv from "./Theme/backColor";
import { useStore } from "./Store";

function App() {
  const { darkTheme, font, set } = useStore();

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify({ darkTheme, font }));
  }, [darkTheme, font.size, font.family]);

  const theme = Theme({
    darkTheme,
    fontFamily: font.family,
    fontSize: font.size
  });
  return (
    <ThemeProvider theme={theme}>
      <BackDiv />
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/test" exact component={TestLP} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
