import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

import { data } from '../../global'
import { Plugins } from '../../Plugins'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


toast.configure({ autoClose: false, position: "bottom-center" })


export default function Main() {
    const textRef = useRef(null);
    const sampleRef = useRef(null);
    const [pageNum, setPageNum] = useState(0);

    const notify = (text) => toast(text, { onClick: () => { console.log(text); } });

    useEffect(() => {
        notify("A로 간다");
        notify("B로 간다");
        notify("C로 간다");
        Next(pageNum);


    }, []);

    // 인자로 페이지나 다음으로 갈곳에 대한 객체를 받고 다음 씬을 추가 .. 
    function Next(pageNum) {
        console.log("Next");


        console.log(data.pages[pageNum].type)

        // plugin style...
        var cb = Plugins[data.pages[pageNum].type]({ sampleRef: sampleRef, pageNum: pageNum })




        var d = document.createElement("div")
        sampleRef.current.appendChild(d)


        var options = {
            strings: [data.pages[pageNum].text],
            typeSpeed: 70,
            backSpeed: 0,
            onComplete: (self) => {
                console.log(self);
                Next(pageNum);
                cb();
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


