import React from 'react'
//import Swiper from 'swiper'

import { Swiper, Slide } from 'react-dynamic-swiper'
 import 'react-dynamic-swiper/lib/styles.css'

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

export default function Test() {

    const classes = useStyles()

    return (
        <div className="Demo">
            <div className="Demo-swiper">

                <Swiper
                    swiperOptions={{ scrollbarHide: false }}
                    {...options}
                >
                    {(new Array(slideCount).fill(null).map((_, i) => (
                        <Slide className="Demo-swiper__slide" key={i}>
                            Slide {i + 1}
                        </Slide>
                    )))}
                </Swiper>
            </div>

        </div >
    )
}




