import React, { useState, useRef, useEffect , createRef} from "react";
import Typed from "typed.js";

import { data } from '../../global'
import { Plugins } from '../../Plugins'

// global state
var sampleRef = createRef();
var pageNum = 0;



// 인자로 페이지나 다음으로 갈곳에 대한 객체를 받고 다음 씬을 추가 .. 
export function Next(pageNum) {
    console.log("Next");


    console.log(data.pages[pageNum].type)

    // plugin style...
    var cb = Plugins[data.pages[pageNum].type]({ sampleRef: sampleRef, pageNum: pageNum })




    var d = document.createElement("div")
    sampleRef.current.appendChild(d)


    var options = {
        strings: [data.pages[pageNum].text],
        typeSpeed: 0,
        backSpeed: 0,
        onComplete: (self) => {
            console.log(self);
            //Next(pageNum);
            cb();
        },
        loop: false

    };

    const typed = new Typed(d, options);





}


export default function Main() {

    sampleRef = useRef(null);
    // maybe place it to global ... 
  



    useEffect(() => {

        Next(pageNum);


    }, []);



    return (
        <div ref={sampleRef} className="App">


            <h1>Don quixote</h1>



        </div>
    );
}


