import React, { useRef, useEffect } from 'react'
import { data, useStore , useStoryStore, refList} from '../global'
import { makeStyles } from '@material-ui/core/styles'

import Typed from 'typed.js';



const useStyles = makeStyles(theme => ({
    swiperSlide: {
        fontSize: "1rem",
        lineHeight: "2rem",
        letterSpacing: "normal",
        whiteSpace: "pre-line",
        margin: 20,
        // marginTop:50
    }
}))


export default function TextAnimationPage(props) {
    const classes = useStyles()
    const fontSize = useStore(state => state.fontSize)
    const lineHeight = useStore(state => state.lineHeight)
    const nextPage = useStoryStore(state => state.nextPage)

    const textRef = useRef();


    useEffect(() => {

        var options = {
             strings: [props.v.text],
            //stringElement: "#endz",
            typeSpeed: 10,
            backSpeed: 0 ,
            onComplete: nextPage,
            showCursor: false,

          };

        var typed = new Typed(textRef.current, options)
        typed.stop();
        refList.push(typed  )
    }, [])

    return (

        <div className={classes.swiperSlide} style={{ fontSize, lineHeight }} ref={textRef} id="endz">
            {/* {props.v.text} */}
        </div>

    )

}

