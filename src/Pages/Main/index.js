import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Typed from "typed.js";

import {FixedSizeList} from 'react-window'

import Para from './paragraph'

export default function Main() {
  const textRef = useRef(null);
  const sampleRef = useRef(null);

  useEffect(() => {
    
      //console.log(sampleRef.current)
    // var options = {
    //   stringsElement: sampleRef.current,
    //   typeSpeed: 70,
    //   backSpeed: 0,
    //   onComplete : (self) => {
    //     console.log(self);
    //   }
      
    // };

    //const typed = new Typed(textRef.current, options);
    //typed.typeSpeed = 0.01;
    //typed.destroy();
    //console.log(s)
  }, []);

  function Skip() {
      console.log("skip");
      //textRef.current.typeSpeed = 0;
  }

  return (
    <div className="App">
     
      <h1>Don quixote</h1>
      <FixedSizeList
       height={900}
       itemCount={100}
       itemSize={1000}
       width={"100%"}>
          {Para}
      </FixedSizeList>
    </div>
  );
}
