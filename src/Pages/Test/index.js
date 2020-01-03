import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import './customSwiper.css'

import { data } from '../../global'

import { Plugins } from '../../Plugins'


import { motion } from "framer-motion";
import {
    makeStyles,
    Box,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
    Select,
    MenuItem
} from "@material-ui/core";

import SettingIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles(theme => ({
    dragableItem: {
        backgroundColor: "#fff",
        opacity: 0.8,
        position: "absolute",
        width: "100%",
        height: 260,
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow:
            "0px -3px 5px -1px rgba(0,0,0,0.2),0px -5px 8px 0px rgba(0,0,0,0.14),0px -1px 14px 0px rgba(0,0,0,0.12)"
    },
    displayOutBox: {
        height: 50,
        width: "100%"
    },
    settingsList: {
        width: "100%",
        //position: "fixed"
    }
}));









export default function Test() {

    const classes = useStyles();

    // const controls = useAnimation();
    const openState = useRef(false);

    const openSettings = () => {
        openState.current = !openState.current;
        // openState.current ? controls.start({ y: -210 }) : controls.start({ y: 0 });
    };





    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'fraction',
            //   },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            virtual: {
                slides: data.pages
            },

            slidesPerView: 'auto',
            centeredSlides: true,


        })
    }, [])

    return (
        <Box>

            <div className="swiper-container">
                <IconButton size="small" onClick={openSettings}>
                    <SettingIcon />
                </IconButton>

                <div className="swiper-wrapper">




                    {data.pages.map((v, i) => {
                        var ReactComponent = Plugins[data.pages[0].type]
                        console.log(ReactComponent)
                        return (
                            <div className="swiper-slide"><ReactComponent v={v} /></div>
                        )
                    })}
                </div>



                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-pagination"></div>

                <div className="swiper-scrollbar"></div>
            </div>
            <List className={classes.settingsList}>
                <ListItem>
                    <ListItemText id="theme" primary="어두운 테마" />
                    <ListItemSecondaryAction>
                        <Switch edge="end" />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText id="font" primary="글자체" />
                    <ListItemSecondaryAction>
                        <Select>
                            <MenuItem value={10}>kopubDotum</MenuItem>
                        </Select>
                    </ListItemSecondaryAction>
                </ListItem>{" "}
                <ListItem>
                    <ListItemText id="font-size" primary="글자크기" />
                    <ListItemSecondaryAction>
                        <Typography>14</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                    <ListItemText id="share" primary="공유" />
                </ListItem>
                <ListItem button>
                    <ListItemText id="copyright" primary="저작권" />
                </ListItem>
            </List>
        </Box>

    )
}

