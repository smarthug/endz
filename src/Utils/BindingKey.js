import React, { useEffect, useCallback } from "react";

const useKey = (options)=>{
    // const keyCode = event.keyCode ? event.keyCode : event.which;
    const mapKey = options
    const handlerEvent = useCallback(e=> {
        const method = options
    },[]);

    useEffect(()=> {
        document.addEventListener("keyup",handlerEvent)
        return ()=>{}
    },[])

};

export default useKey;