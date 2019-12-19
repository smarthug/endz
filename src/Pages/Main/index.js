import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

import {data} from '../../global'

export default function Main() {
    const textRef = useRef(null);
    const sampleRef = useRef(null);

    useEffect(() => {
        Next();

      
    }, []);

    // 인자로 페이지나 다음으로 갈곳에 대한 객체를 받고 다음 씬을 추가 .. 
    function Next() {
        console.log("Next");

       
        var b = document.createElement("img")
        b.src = "https://cpb-us-w2.wpmucdn.com/blogs.baylor.edu/dist/c/3127/files/2015/12/DQ-Screen-Shot-2015-12-04-at-4.10.29-PM-29wbxtz.png"
        b.width = window.innerWidth;
        sampleRef.current.appendChild(b)
       

        

        var d = document.createElement("div")
        sampleRef.current.appendChild(d)
       

        var options = {
            strings: [data.pages[0].text],
            typeSpeed: 2,
            backSpeed: 0,
            onComplete: (self) => {
                console.log(self);
                Next();
            },
            loop: false

        };

        const typed = new Typed(d, options);
        

        


    }

    return (
        <div ref={sampleRef} className="App">
            

            <h1>Don quixote</h1>

           

        </div>
    );
}
