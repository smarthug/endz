import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  makeStyles,
} from "@material-ui/core";
import TypoContents from "./typo";
import SelectModule, { openDrawer } from "./modules";

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
    // border: "solid #d1d1d1",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
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

const Main = ({ chapter, firstScene }) => {
  const classes = styles();
  const controls = useAnimation();
  const openState = useRef(false);
  const sceneState = useState(chapter[firstScene]);

  const [scene,] = sceneState;
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

  const onTypoEnded = openDrawer({controls, openState, scene})

  useEffect(()=> {
    if (openState.current) {
      openState.current = false;
      controls.start({y:0});
    } 
    return () => {}
  }, [scene])

  return (
    <>
      <TypoContents contents={scene.content} onTypoEnded={onTypoEnded} />
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
          <SelectModule sceneState={sceneState} openSettings={openSettings} chapter={chapter} classes={classes}/>
        </motion.div>
      </div>
    </>
  );
};

export default Main;
