import React, { useEffect, useState } from 'react'
import { useStore, diversity, history, useStoryStore, rootAdder } from '../global'




export default function RootsPage(props) {
   




    return (
        <div>

            { history.get(`${props.v.name}`) && <h3>{JSON.stringify(history.get(`${props.v.name}`))}</h3>}
        </div>
    

    )

}

