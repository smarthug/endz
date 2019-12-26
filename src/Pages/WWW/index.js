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
  MenuItem
} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIosOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SelectPopCard from "./selectable";

const styles = makeStyles(theme => ({
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
    boxShadow:
      "0px -3px 5px -1px rgba(0,0,0,0.2),0px -5px 8px 0px rgba(0,0,0,0.14),0px -1px 14px 0px rgba(0,0,0,0.12)"
  },
  displayOutBox: {
    height: 50,
    width: "100%"
  },
  settingsList: {
    width: "100%"
  }
}));

const contents = `상상의 집. \n
엔즈에 오신걸 환영합니다.\n
당신의 인생은 항상 선택의 연속이며 음....\n
... (어떻게 써야할까?) 그럼 이제 첫번째 질문을 하도록 하죠.\n
당신은 어디로 가고 싶으신가요? \n`;

const Main = () => {
  const classes = styles();
  const controls = useAnimation();
  const openState = useRef(false);
  const onPanEnd = (event, info) => {
    console.log(info.offset.y, info.point.y);
    if (info.offset.y > 0) {
      openState.current = false;
      controls.start({ y: 0 });
    } else {
      openState.current = true;
      controls.start({ y: -210 });
    }
  };

  const openSettings = () => {
    openState.current = !openState.current;
    openState.current ? controls.start({ y: -210 }) : controls.start({ y: 0 });
  };

  useEffect(() => {}, []);

  return (
    <>
      <SelectPopCard contents={contents} selectObj={{title:"선택",list:["1. 개인서재","2. 도서관","3. 안내","4. ㅁㅁ"]}}/>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          height: "50px",
          width: "100%",
          overflowY: "visible"
        }}
      >
        <motion.div
          className={classes.dragableItem}
          animate={controls}
          drag="y"
          dragConstraints={{ top: -210, bottom: 0 }}
          dragElastic={0.1}
          onDragEnd={onPanEnd}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={classes.displayOutBox}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              flexGrow={1}
            >
              <IconButton size="small">
                <ArrowBackIos />
              </IconButton>
              <Typography>로비</Typography>
              <IconButton size="small">
                <ArrowForwardIos />
              </IconButton>
            </Box>
            <IconButton size="small" onClick={openSettings}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Box>
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
        </motion.div>
      </div>
    </>
  );
};

export default Main;
