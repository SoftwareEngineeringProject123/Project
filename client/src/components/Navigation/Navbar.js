import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";

import useStyles from './style';
import memories from '../../images/memories.jpg'


const Navbar = () => {

    const classes = useStyles();

    return (

    <AppBar className={classes.appBar} position="static" color="inherit">

        <div className={classes.brandContainer}>
            <Typography  component={Link} to="/" className={classes.heading} variant="h2" align="center"> SNAPSHOTS </Typography>
            <img className={classes.image}  src={memories} alt="snapshots" height="60"/>

        </div>
        <Toolbar className={classes.toolbar}>
            {
                user ? (/*WHAT YOU SEE IF USER IS LOGGED IN*/

                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt[0]}</Avatar>
                        <Typography className={classes.userNmae} variant="h6">{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : ( /*WHAT YOU SEE IF USER IS NOT LOGGED IN*/

                    <Button componnt={Link} to="/auth" variant='contained' color="primary">Sign In</Button>

                )
            }
        </Toolbar>

    </AppBar>
    );
}

export default Navbar;