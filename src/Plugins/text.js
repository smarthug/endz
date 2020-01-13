import React from 'react'
import { data , useStore } from '../global'
import { makeStyles } from '@material-ui/core/styles'

import Nextpage from '../Components/nextPage'



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


export default function TextPage(props) {
   const classes = useStyles()
   const fontSize = useStore(state => state.fontSize)
   const lineHeight = useStore(state => state.lineHeight)
   


   return (
     
         <div className={classes.swiperSlide} style={{fontSize, lineHeight}}>
            <Nextpage/>
           {props.v.text}
         </div>
    
   )

}

