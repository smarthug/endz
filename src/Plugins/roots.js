import React, { useEffect, useState } from 'react'
import { useStore, diversity, history, useStoryStore, rootAdder } from '../global'
import Nextpage from '../Components/nextPage'




export default function RootsPage(props) {
   //const nextPage = useStoryStore(state => state.nextPage)




    return (
        <div>
          
            { history.get(`${props.v.name}`) && <h3>{history.get(`${props.v.name}`)[0].helper}</h3>}
            <Nextpage/>
        </div>
    

    )

}

