import mongoose from "mongoose";

const postSchema = mongoose.Schema({ // how a post a structured

    title : String, // title of the post
    message : String, // description of the post
    creator : String, // creator
    tags : [String], // defining tags of the post
    selectedFile : String, // image
    likeCount : {

        type : Number,
        default : 0
    },

    createdAt : {

        type : Date,
        default : new Date( Date.now() )
    }


})


const PostMessage = mongoose.model( 'PostMessage', postSchema );
// mongoose.model( 'TABLE TO SAVE IT TO', THE SCHEMA NAME );


export default PostMessage


