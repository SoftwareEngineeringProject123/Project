import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, resp)=>{

    try{ // if we can any of the posts

        const postMessages = await PostMessage.find(); // gets all

        resp.status(200); // 200 = ok, everything went as expected
        resp.json( postMessages ); // send all the messages to us


    }catch (e) { // post schema was not defined or any related errors

        console.log(`ERROR at localhost:${process.env.DB_CONNECTION}/ : ${e}`)

        resp.status(404); // 200 = error, there was an error
        resp.json( { message : e.message } ); // send all the messages to us

    }
}


export const createPosts = async (req, resp)=>{

    // const { title, message,  } = req.body; // what we expect to be sent from the body
    const post = req.body; // what we expect to be sent from the body

    const createPost = await new PostMessage(/*{

        title : req.body,
        message : req.body,
        creator : req.body,
        tags : req.body,
        likeCount : req.body,
    }*/ post)

    try{ // save the user's new post

        await createPost.save(); // save the post into our DB

        resp.status(201); // 201 = created , if the post was created
        resp.json( createPost )

    }catch (e) { // if user's new post cannot be saved

        resp.status(409); // 201 = could not create , if the post could not be created
        resp.json( {message : e.message} )

    }
}


