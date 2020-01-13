import React, { useRef, useEffect } from 'react';

import dat from 'dat.gui'

var test = {
    a: 999,
    b: 888,
    c: 777
  
  }

export default function Setting() {
    const customContainer = useRef();

    var gui = new dat.GUI({autoPlace:false});
    gui.add(test, "a")
    gui.add(test, "b")
    gui.add(test, "c")

    useEffect(()=>{
        customContainer.current.appendChild(gui.domElement)
    })

    return (
        <div ref={customContainer}></div>
    )
}

