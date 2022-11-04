import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {AttachFile} from '@material-ui/icons';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import {clickFileUploadButton} from './clickFileInput'


                // receiving the ID's
const Form = ( { currentId, setCurrentId, isToggled } )=>{
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    // if there's a current id, loop through the posts and find the post that has that same id as the currentId
    const classes = useStyles();
    const dispatch = useDispatch();

    // when the post value changes from nothing to the actual post,
    useEffect( ()=>{

        if( post ) {
            setPostData(post);
        }// populate it with the data of the post

    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();


        if( currentId ){ // if ID is not null dispatch update post
                        // because if you already have an ID that means we'll be updating a current post

            dispatch( updatePost( currentId, postData ) );

        }else{ // not currentID is pesent, meaning a post has to be created

            dispatch(createPost(postData));

        }
        clear();
    }

    const clear = () => {

        setCurrentId(null)
        setPostData( {creator: '', title: '', message: '', tags: '', selectedFile: ''} );

    }

    return (


        <Paper className={isToggled ? classes.paper : classes.darkPaper}>
            <script type="text/javascript" src="clickFileInput.js"  />
            <Typography id="formTitle" className={ isToggled ? classes.formTitle : classes.darkFormTitle} variant="h6">{ currentId ? 'Edit' : 'Make' } A Reflection</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField InputProps={{className : isToggled ? classes.textFieldCreator : classes.darkTextFieldCreator}} InputLabelProps={{className : isToggled ? classes.textFieldCreatorLabel : classes.darkTextFieldCreatorLabel}} color="secondary" name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField InputProps={{className : isToggled ? classes.textFieldTitle : classes.darkTextFieldTitle}} InputLabelProps={{className : isToggled ? classes.textFieldTitleLabel : classes.darkTextFieldTitleLabel}} color="secondary"name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField InputProps={{className : isToggled ? classes.textFieldMessage : classes.darkTextFieldMessage}} InputLabelProps={{className : isToggled ? classes.textFieldMessageLabel : classes.darkTextFieldMessageLabel}} color="secondary" name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField InputProps={{className : isToggled ? classes.textFieldTags : classes.darkTextFieldTags}} InputLabelProps={{className : isToggled ? classes.textFieldTagsLabel : classes.darkTextFieldTagsLabel}} color="secondary" name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div  className={classes.fileContainer}>
                    <div className={classes.buttonWrap}>
                        <Button id="upload" onClick={ ()=>{ clickFileUploadButton() } } className={classes.button} variant="raised" color="secondary" size="large" fullWidth>Upload File <AttachFile className={classes.attachFile}></AttachFile></Button>
                        <div id="fileInputButton" className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/>
                        </div>
                    </div>
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form