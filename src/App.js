import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'typed.js';

import useTyped from 'use-typed'


var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

function App() {

  const hRef = useRef(null)
  useTyped(hRef, {
    strings: [
      'dynamic-novel first commit',
      'now Story begins',
      'hold on tight'
    ],
    typeSpeed: 30,
    backSpeed: 30
  });

  // useEffect(()=>{
  //   const options = {
  //     strings: 'Hello , world!',
  //     typeSpeed: 50,
  //     backSpeed:50

  //   }

  //  new Typed(hRef.current, options)

  // }, [])

  return (
    <div className="App">
      <header className="App-header">
       <div ref={hRef}>dynamic-novel first commit</div>
      </header>
    </div>
  );
}

export default App;
