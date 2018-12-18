import React from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Authentication App 
            </Typography>
            <Button component={ Link } to="/" color="inherit">Home</Button>
            <Button component={ Link } to="/Members" color="inherit">Member Area</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
      textAlign: "left",
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  export default withStyles(styles)(NavBar);
