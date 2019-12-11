import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'typed.js';


import useTyped from 'use-typed'

import TestPage from './testPage'




function App() {

  // const hRef = useRef(null)
  // useTyped(hRef, {
  //   strings: [
  //     'dynamic-novel first commit',
  //     'now Story begins',
  //     'hold on tight'
  //   ],
  //   typeSpeed: 100,
  //   backSpeed: 100
  // });



  return (
    <div className="App">
      {/* <header className="App-header">
       <div ref={hRef}>dynamic-novel first commit</div>
      </header> */}
      <TestPage/>
    </div>
  );
}

export default App;
