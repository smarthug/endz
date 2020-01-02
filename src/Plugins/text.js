import React from 'react'
import { data } from '../global'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
   swiperSlide: {
      fontSize: "1rem",
      letterSpacing: "normal",
      lineHeight: "2rem",
      whiteSpace: "pre-line"
   }
}))


export default function TextPage(props) {
   const classes = useStyles()


   return (
     
         <div className={classes.swiperSlide}>
           {props.v.text}
         </div>
    
   )

}

