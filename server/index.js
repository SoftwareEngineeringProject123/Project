import express from 'express'; // express framework
import bodyParser from 'body-parser'; // allows access to incoming info from the body
import mongoose from 'mongoose'; // the database
import cors from 'cors';
import 'dotenv/config'

// same as above
/*const express = require('express'); // express framework
const bodyParser = require('body-parser'); // allows access to incoming info from the body
const mongoose = require('mongoose'); // the database
const cors = require('cors');*/



const app = express();


                        // MIDDLEWARE
app.use(bodyParser.json( { limit: '30mb', extended: true } ) ) // allow use to receive things from the body
app.use(bodyParser.urlencoded( { limit: '30mb', extended: true } ) ) // allow use to receive things from the body
app.use( cors() );


                        // ROUTES
import postRoutes from './routes/posts.js';
app.use('/posts', postRoutes);


app.get('/', (req, resp)=>{

    resp.json({message: 'this works'})
})


                        // CONNECTS TO THE DB AND SERVER
/*
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser : true, useUnifiedTopology : true} )
    .then( ()=>{ app.listen( process.env.PORT, ()=>{ console.log(`CONNECTED AT PORT ${process.env.PORT}`) } ) } )
    .catch( (err)=>{ console.log(err.message) } );

// mongoose.set('useFindAndModify', false); // prevents warnings rom showing in the console
*/


 // same as above
import connectDB from "./config/db.js";
connectDB();

// connect to the server
app.listen( process.env.PORT, ()=>{ console.log(`CONNECTED AT PORT ${process.env.PORT}`) } )
