import React, {useState, useEffect} from 'react';
import {useStore} from '../global'

import produce from "immer"



// export default function Test(){
//     const [count, setCount] = useState({a:{b:5}})
    
//     useEffect(()=>{
//         console.log('hello Immer');
       
//         console.log(count.a.b)
//         setCount( produce((draft)=>{draft.a.b += 999}))
       
//     },[])
    
//     return(
//         <div>{count.a.b}</div>
//     )
// }

export default function Test(){
    const {count, set} = useStore()
    
    useEffect(()=>{
        set(draft => {draft.count.a.b+=1})
       
    },[])
    
    return(
        <div>{count.a.b}</div>
    )
}