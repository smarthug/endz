import React, { useEffect, useRef } from "react";
import Typist from "react-typist";
import { motion, useAnimation } from "framer-motion";
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
  MenuItem,
  Button,
  MenuList
} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIosOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import TypoContents from "./typo";
import SelectPopCard from "./selectable";

const styles = makeStyles(theme => ({
  dragableItem: {
    backgroundColor: "#fff",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: 210,
    top: 0,
    left: 0,
    right: 0,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "solid #d1d1d1"
  },
  displayOutBox: {
    height: 50,
    width: "100%"
  },
  settingsList: {
    width: "100%",
    maxHeight: 144,
    overflowY: "auto"
  }
}));

const Main = ({ contents, selectObj }) => {
  const classes = styles();
  const controls = useAnimation();
  const openState = useRef(false);
  //   const onPanEnd = (event, info) => {
  //     console.log(info.offset.y, info.point.y);
  //     if (info.offset.y > 0) {
  //       openState.current = false;
  //       controls.start({ y: 0 });
  //     } else {
  //       openState.current = true;
  //       controls.start({ y: -160 });
  //     }
  //   };

  const openSettings = () => {
    openState.current = !openState.current;
    openState.current ? controls.start({ y: -160 }) : controls.start({ y: 0 });
  };

  useEffect(() => {}, []);

  return (
    <>
      <TypoContents contents={contents} />
      {selectObj && (
        <div
          style={{
            position: "fixed",
            bottom: 50,
            height: "50px",
            width: "100%",
            overflowY: "visible"
          }}
        >
          <motion.div className={classes.dragableItem} animate={controls}>
            <MenuItem onClick={openSettings}>{selectObj.title}</MenuItem>
            <List className={classes.settingsList}>
              {selectObj.list.map((i, d) => (
                <ListItem button>
                  <ListItemText id={d} primary={i} />
                </ListItem>
              ))}
            </List>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Main;
