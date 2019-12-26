import React, { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import TestLP from "./Pages/WWW";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/test" exact component={TestLP} />
    </Router>
  );
}

export default App;
