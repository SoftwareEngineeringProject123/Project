import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux'


import { deletePost, likePost } from '../../../actions/posts'



const Post = ( { post, setCurrentId, isToggled } ) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    let backToTopEdit = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        alert(post.createdAt)
    }

    return (

        <Card className={isToggled ? classes.card : classes.darkCard}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div  className={classes.overlay2}>
                <Button id="backToTopEdit" style={{color: 'white'}} size="small" onClick={ () => { backToTopEdit(); setCurrentId( post._id ) } }>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={isToggled ? classes.details : classes.darkDetails}>
                <Typography variant="body2" color="white">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={isToggled ? classes.title : classes.darkTitle} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={isToggled ? classes.message : classes.darkMessage} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button className={isToggled ? classes.like : classes.darkLike} size="small" color="primary" onClick={() => dispatch( likePost(post._id) ) }>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button className={classes.delete} size="small" color="primary" onClick={() => { dispatch( deletePost(post._id )) } }>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>

    )
}

// import './backToTopEdit' // take you to the top when you click edit

export default Post