import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import './customSwiper.css'

import { data, useStore } from '../../global'

import { Plugins } from '../../Plugins'

import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

export var mySwiper

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

function slideRenderer(params) {
    
    const { index, key } = params;
    console.log(index)
    // index 가 길이를 안넘게 .... 
    var ReactComponent
    if(index>=data.pages.length){
        ReactComponent = Plugins[data.pages[1].type]
        var v = data.pages[1]
    }else{

        ReactComponent = Plugins[data.pages[index].type]
        var v = data.pages[index]
    }


    return (
        <div key={key} ><ReactComponent v={v} /></div>
    )
}









export default function Test() {
    //const [index, setIndex] = useState(0)
    const index = useStore(state => state.index)
    const setIndex = useStore(state => state.setIndex)

    const pages = useStore(state => state.pages)

    useEffect(() => {

    }, [])

    const handleChangeIndex = index => {
        // 여기서 마지막 페이지 이상은 안넘게 할 수 있겠군 ... 
        setIndex(index)
    };

    return (

        <div>
            <button>Setting</button>
            <VirtualizeSwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                slideRenderer={slideRenderer}
                slideCount={999}
                overscanSlideBefore={1}
            />
        </div>
    )
}

 // slideCount={data.pages.length}
 // 이걸 풀어야하나 ?? 