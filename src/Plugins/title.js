import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    title:{
        textAlign: "center"
    }
}))

export default function TitlePage(props) {
    const classes = useStyles()

    return (
        <h1 className={classes.title}>{props.v.title}</h1>
    )
}




