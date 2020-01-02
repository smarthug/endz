import React, { useEffect } from 'react'
import Swiper from 'swiper'
import './customSwiper.css'

import { data } from '../../global'

// import { Swiper, Slide } from 'react-dynamic-swiper'
//  import 'react-dynamic-swiper/lib/styles.css'

import { makeStyles } from '@material-ui/core/styles'

var slideCount = 5;

var options = {
    navigation: true,
    pagination: true,
    paginationClickable: true,
    scrollBar: false,
    loop: false
}

const useStyles = makeStyles(theme => ({
    root: {
        height: 100
    }
}))

// export default function Test() {

//     const classes = useStyles()

//     return (
//         <div className="Demo">
//             <div className="Demo-swiper">

//                 <Swiper
//                     swiperOptions={{ scrollbarHide: false }}
//                     {...options}
//                 >
//                     {(new Array(slideCount).fill(null).map((_, i) => (
//                         <Slide className="Demo-swiper__slide" key={i}>
//                             Slide {i + 1}
//                         </Slide>
//                     )))}
//                 </Swiper>
//             </div>

//         </div >
//     )
// }

// pages 배열은 글로벌에서 오고 ... 파서함수로 다 돌려줄까 ....



export default function Test() {

    const classes = useStyles()

    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            // navigation: false,

            // // If we need pagination
            /// pagination: {
            //     el: '.swiper-pagination',
            // },

            // // Navigation arrows
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

                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>


                {data.pages.map((v, i) => {
                    return (
                        <div className="swiper-slide">{v.text}</div>
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

