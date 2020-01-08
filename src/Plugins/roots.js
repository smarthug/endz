import React from 'react'
import { useStore,diversity , history, useStoryStore } from '../global'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

// import { mySwiper , root} from '../Pages/Test/index'




const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"

    },
    button: {
        margin: 50
    }
}))


export default function RootsPage(props) {
    const classes = useStyles()
    const story = useStoryStore(state => state.story)
    const setStory = useStoryStore(state => state.setStory)
    const setIndex = useStoryStore(state => state.setIndex)
    const setBookLength = useStoryStore(state => state.setBookLength)
   
 

    const rootAdder = (obj) => {

        var tmp = [];

        history.set(obj.name, obj.root);

        // to remove future stuff
        var index = [...history.keys()].findIndex((element) => element === obj.name)
        var slicedArr = [...history.values()].slice(0, index + 1)

        slicedArr.map((v, i) => {
            tmp.push(...v);
        })

        var length = tmp.length - obj.root.length;
        //var length = slicedArr.length;

        setStory(tmp)
        //story = tmp;
        setBookLength(tmp.length);
        setIndex(length);

    }


    return (

        <div className={classes.root}>
            {props.v.choices.map((v, i) => {
                return (
                    <div>

                        <Button className={classes.button} variant="outlined" color="primary" onClick={() => { rootAdder(v.obj) }} >{v.text}</Button>
                    </div>
                )
            })}
        </div>

    )

}

