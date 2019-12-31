import React, { useEffect } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 8px 0px 8px'
  },
  typoArea: {
    wordBreak: "break-all",
    display: "inline",
    whiteSpace: "pre-wrap"
  }
}));
const Main = ({ contents, onTypoEnded }) => {
  const classes = useStyles();
  useEffect(()=> {
    console.log(contents)
  },[])
  return (
    <div className={classes.root}>
      {/* <Typography variant="h4">[endZ]</Typography> */}
      <Typist onTypingDone={onTypoEnded}>
        <Typography className={classes.typoArea}>{contents.content}</Typography>
      </Typist>
    </div>
  );
};

export default Main;
