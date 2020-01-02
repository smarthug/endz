import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      height: "100vh",
      width: "100vw",
      position:'absolute',
      top: 0,
      zIndex:-1,
      backgroundColor: theme.palette.background.paper
    }
  }));

  const Main = () => {
      const classes = useStyles();
      return <div className = {classes.root} />
  }

  export default Main;