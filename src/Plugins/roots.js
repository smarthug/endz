import React from 'react'
import { data, useStore } from '../global'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { mySwiper , root} from '../Pages/Test/index'
import { Plugins } from './index'



const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"

    },
    button : {
        margin: 50
    }
}))


export default function RootsPage(props) {
    const classes = useStyles()
    const set = useStore(state => state.set)
    const rootChange = useStore(state => state.rootChange)

    const rootAdder = (result) => {
        set( state => {state.pages = [ ...state.pages  , ...result]})
        mySwiper.destroy();
        rootChange("rootA")
        //mySwiper.slideTo(12)
        //set( state => {state.pages = [  ...result]})

        // result.map((v, i) => {
        //     var ReactComponent = Plugins[pages[i].type]
        //     console.log(ReactComponent)
        //     return (
        //         <div key={i} className="swiper-slide"><ReactComponent v={v} /></div>
        //     )
        // })

        // mySwiper.appendSlide([
        //     '<div class="swiper-slide">Slide  </div>',
        //     '<div class="swiper-slide">Slide </div>'
        //     ]);

            // mySwiper.appendSlide(result.map((v, i) => {
            //     var ReactComponent = Plugins[v.type]
            //     console.log(ReactComponent)
            //     return (
            //         <div key={i} className="swiper-slide"><ReactComponent v={v} /></div>
            //     )
            // }));
    }


    return (

        <div className={classes.root}>
            {props.v.choices.map((v, i) => {
                return (
                    <div>

                        <Button className={classes.button} variant="outlined" color="primary" onClick={() => {rootAdder(v.result)}} >{v.text}</Button>
                    </div>
                )
            })}
        </div>

    )

}

