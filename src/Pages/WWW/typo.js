import React, { useEffect, useRef } from "react";
// import Typist from "react-typist";
// import "react-typist/dist/Typist.css";
import Typed from "typed.js";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "30px 8px 0px 8px"
  },
  typoArea: {
    wordBreak: "break-all",
    display: "inline",
    whiteSpace: "pre-wrap"
  }
}));
const Main = ({ contents, onTypoEnded }) => {
  const classes = useStyles();
  const typoRef = useRef(null);
  // const aaa = useRef([]);

  useEffect(() => {
    console.log("aaaaa");
    const options = {
      strings: [contents],
      typeSpeed: 50,
      backSpeed: 50,
      onComplete: onTypoEnded
    };
    // aaa.current.push(contents);
    const typed = new Typed(typoRef.current, options);
    
    return () => typed.destroy();
  }, [contents]);

  return (
    <div className={classes.root}>
      {/* <Typography variant="h4">[endZ]</Typography> */}
      <Typography ref={typoRef} className={classes.typoArea} />
      {/* <Typography className={classes.typoArea}>{contents}</Typography> */}
    </div>
  );
};

export default Main;
