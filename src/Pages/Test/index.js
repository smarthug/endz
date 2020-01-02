import React, { useEffect } from 'react'
import Swiper from 'swiper'
import './customSwiper.css'

import { data } from '../../global'

import { Plugins } from '../../Plugins'









export default function Test() {

   

    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            
        })
    }, [])

    return (

        <div className="swiper-container">

            <div className="swiper-wrapper">




                {data.pages.map((v, i) => {
                    var ReactComponent = Plugins[data.pages[0].type]
                    console.log(ReactComponent)
                    return (
                    <div className="swiper-slide"><ReactComponent v={v}/></div>
                    )
                })}
            </div>

            <div className="swiper-pagination"></div>


            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>


            <div className="swiper-scrollbar"></div>
        </div>
    )
}

