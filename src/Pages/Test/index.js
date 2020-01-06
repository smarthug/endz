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
    const ReactComponent = Plugins[data.pages[index].type]
    var v = data.pages[index]


    return (
        <div key={key} ><ReactComponent v={v} /></div>
    )
}









export default function Test() {
    const [index, setIndex] = useState(0)

    useEffect(() => {

    }, [])

    const handleChangeIndex = index => {

        setIndex(index)
    };

    return (

        <div>
            <VirtualizeSwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                slideRenderer={slideRenderer}
                slideCount={data.pages.length}
            />
        </div>
    )
}

