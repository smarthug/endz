import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {useStoryStore} from '../global'

const useStyles = makeStyles(theme => ({

}))


export default function NextPage() {
    const classes = useStyles()
    const NextPage = useStoryStore(state => state.nextPage)

    return (
        <button onClick={NextPage}>NextPage</button>
    )
}

