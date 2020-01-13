import React, { useRef, useEffect } from 'react';
//import './App.css';
import Typed from 'typed.js';

import Test from './Pages/Test'
import Test2 from './Pages/testPage'


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';



import Setting from './setting'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function App() {
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  

  useEffect(()=> {
   
    //customContainer.current.appendChild(gui.domElement)
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
    //customContainer.current.appendChild(gui.domElement)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App" >
      <button onClick={handleClickOpen}>Setting</button>
      <Test />
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
        <List >
          <Setting/>
        </List>
      </Dialog>
    </div>
  );
}

export default App;
