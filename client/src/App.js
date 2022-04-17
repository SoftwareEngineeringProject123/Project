import React, { useState, useEffect } from 'react';

// COMPONENTS WE'LL BE USING
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { ArrowUpwardRounded } from "@material-ui/icons";

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/camera2.png'
import useStyles from './styles'

import './ColorToggle.css'
import './backToTop.css'

import { handleToggle } from './HandleToggle'


const App = ()=>{

    const [currenId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [ currenId, dispatch]);

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);

        let body = document.body;
        if(isActive){

            body.style.backgroundColor = 'rgba(10,7,14)';
        }else{

            body.style.backgroundColor = 'rgba(252,252,252,255)';
        }
    }

    document.body.onload = ()=>{

        let backToTop = document.getElementById("backToTop")
        // scroll back to top
        backToTop.addEventListener('click', ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            });
        })
        window.addEventListener("scroll", ()=>{
            let y = window.scrollY;
            if( y >= 50 ){
                backToTop.className = "backToTop"; // apply the class
            }else{
                backToTop.className = "hide";
            }
        });
    }

    return (

        <Container maxWidth="lg">

            <button id="backToTop"  className="hide">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
                <ArrowUpwardRounded className={classes.attachFile}></ArrowUpwardRounded>
            </button>

            <AppBar id="appBar" className={isActive ? classes.appBar : classes.darkAppBar } position="static" color="inherit">

                <label id="toggle" className="toggle" title="Dark Mode">
                    <input type="checkbox" onClick={ handleToggle } />
                        <span className="slider round"></span>
                </label>

                <Typography id="heading" className={ isActive ? classes.heading : classes.darkHeading} variant="h2" align="center"> REFLECT </Typography>
                <img  id="image" className={classes.image}  src={memories} alt="snapshots" height="60"/>

            </AppBar>
            <Grow in>

                <Container>

                    <Grid className={classes.mainContainer} container justify="space-between"
                    alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId} isToggled = { isActive } />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = { currenId } setCurrentId = {setCurrentId} isToggled = {isActive}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

// import './backToTop.js' // at the bottom because the script was laoding before the page could
export default App;
// module.exports = App;