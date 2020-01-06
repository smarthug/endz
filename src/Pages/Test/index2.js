import React, { useEffect } from 'react'
import Swiper from 'swiper'
import './customSwiper.css'

import { data, useStore } from '../../global'

import { Plugins } from '../../Plugins'

import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';





export var mySwiper = null;





export default function Test() {
    const pages = useStore(state => state.pages)
    const root = useStore(state => state.root)



    useEffect(() => {
        mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'fraction',
            //   },

            //And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            virtual: {
                slides: pages
            },

            slidesPerView: 'auto',
            centeredSlides: true,


        })

        /// bad
        if(root !== "main"){
            mySwiper.slideTo(13,0)
        }
        ///

    }, [pages])

    return (

        <div className="swiper-container">

            <div className="swiper-wrapper">




                {pages.map((v, i) => {
                    var ReactComponent = Plugins[pages[i].type]
                    console.log(ReactComponent)
                    return (
                        <div key={i} className="swiper-slide"><ReactComponent v={v} /></div>
                    )
                })}
            </div>



            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-pagination"></div>

            <div className="swiper-scrollbar"></div>
        </div>
    )
}

