import React, { useState, useEffect } from 'react';

// COMPONENTS WE'LL BE USING
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.jpg'
import useStyles from './styles'


const App = ()=>{
    const [currentId, setCurrentid] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (

        <Container maxWidth="lg">

            <AppBar className={classes.appBar} position="static" color="inherit">

                <Typography className={classes.heading} variant="h2" align="center"> SNAPSHOTS </Typography>
                <img className={classes.image}  src={memories} alt="snapshots" height="60"/>

            </AppBar>
            <Grow in>

                <Container>

                    <Grid className={classes.mainContainer} container justify="space-between"
                    alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentid}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form current = {currentId} setCurrentId = {setCurrentid}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;
// module.exports = App;